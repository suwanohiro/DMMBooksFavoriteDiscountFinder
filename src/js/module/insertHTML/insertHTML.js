import InsertHTMLData from "./insertHTMLData.js";
import convertURL from "../convertURL.js";

export default async function insertHTML(insertHTMLData) {
    if (insertHTMLData.CSS === "") {
        const html = await createHTMLElement(insertHTMLData.HTML);
        document.body.appendChild(html);
        return;
    }

    const css = createStyleElement(insertHTMLData.CSS);
    document.head.appendChild(css);
    css.onload = async () => {
        const html = await createHTMLElement(insertHTMLData.HTML);
        document.body.appendChild(html);
    };
}

function createStyleElement(css) {
    const linkElem = document.createElement("link");
    linkElem.rel = "stylesheet";
    linkElem.type = "text/css";
    linkElem.href = convertURL(css);
    return linkElem;
}

async function createHTMLElement(html) {
    const response = await fetch(convertURL(html));
    const data = await response.text();
    const container = document.createElement("div");
    container.classList.add("swn-popup");
    container.innerHTML = data.trim();
    return container;
}