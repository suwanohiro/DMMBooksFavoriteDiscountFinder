import InsertHTMLData from "./insertHTMLData.js";
import convertURL from "../convertURL.js";

export default async function insertHTML(insertHTMLData, rootClassName = "swn-popup") {
    const hasHTML = insertHTMLData.HTML !== "";
    const hasCSS = insertHTMLData.CSS !== "";
    const hasJS = insertHTMLData.JS !== "";

    // どちらもない場合は何もしない（HTML があれば挿入）
    if (!hasCSS && !hasJS) {
        if (hasHTML) await insertHTMLElement(insertHTMLData.HTML, rootClassName);
        return;
    }

    if (hasCSS) {
        await new Promise(resolve => insertStyleElement(insertHTMLData.CSS, rootClassName, resolve));
    }

    if (hasHTML) {
        await insertHTMLElement(insertHTMLData.HTML, rootClassName);
    }

    if (hasJS) {
        await new Promise(resolve => insertScriptElement(insertHTMLData.JS, rootClassName, resolve));
    }
}

async function createHTMLElement(html, rootClassName = "swn-popup") {
    if (!html || html.trim() === "") return null;

    const trimmed = html.trim();

    // 生の HTML 文字列（< で始まる）ならそのままパース
    if (trimmed.startsWith("<")) {
        const container = document.createElement("div");
        container.classList.add(rootClassName);
        container.innerHTML = trimmed;
        return container;
    }

    // それ以外はパスとして fetch
    try {
        const response = await fetch(convertURL(html));
        const data = await response.text();
        const container = document.createElement("div");
        container.classList.add(rootClassName);
        container.classList.add(`${rootClassName}-html`);
        container.innerHTML = data.trim();
        return container;
    } catch (err) {
        console.error("createHTMLElement fetch failed:", err);
        return null;
    }
}

async function insertHTMLElement(html, rootClassName = "swn-popup", onload = undefined) {
    const htmlElement = await createHTMLElement(html, rootClassName);
    if (!htmlElement) {
        if (onload) onload();
        return;
    }

    // wrapper（rootClassName を付与した要素）自体を body に追加して CSS セレクタを維持
    document.body.appendChild(htmlElement);

    if (onload) onload();
}

function createStyleElement(css, rootClassName = "swn-popup") {
    const trimmed = (css || "").trim();
    // URL/パスっぽければ link、それ以外（生 CSS）なら style を返す
    const looksLikeURL = /(^\/|^\.\.?\/|^https?:\/\/)|\.css(\?|$)/i.test(trimmed);
    if (looksLikeURL) {
        const linkElem = document.createElement("link");
        linkElem.rel = "stylesheet";
        linkElem.type = "text/css";
        linkElem.href = convertURL(css);
        if (rootClassName) linkElem.classList.add(rootClassName);
        return linkElem;
    } else {
        const styleElem = document.createElement("style");
        styleElem.type = "text/css";
        if (rootClassName) styleElem.classList.add(rootClassName);
        styleElem.appendChild(document.createTextNode(css || ""));
        return styleElem;
    }
}

async function insertStyleElement(css, rootClassName = "swn-popup", onload = undefined) {
    const elem = createStyleElement(css, rootClassName);
    if (onload) {
        if (elem.tagName.toLowerCase() === "link") {
            elem.onload = onload;
        } else {
            // style 要素は即時反映されるので次tickで onload を呼ぶ
            setTimeout(onload, 0);
        }
    }
    document.head.appendChild(elem);
}

function createScriptElement(js, rootClassName = "swn-popup") {
    const scriptElem = document.createElement("script");
    scriptElem.type = "module";
    // キャッシュバスト: クエリパラメータで毎回実行
    scriptElem.src = convertURL(js) + `?t=${Date.now()}`;
    if (rootClassName) scriptElem.classList.add(rootClassName);
    return scriptElem;
}

async function insertScriptElement(js, rootClassName = "swn-popup", onload = undefined) {
    const scriptElem = createScriptElement(js, rootClassName);
    if (onload) scriptElem.onload = onload;
    document.body.appendChild(scriptElem);
}