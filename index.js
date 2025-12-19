import InsertHTMLData from "./src/js/module/insertHTML/insertHTMLData.js";
import insertHTML from "./src/js/module/insertHTML/insertHTML.js";
import RunMode from "./src/js/mode.js";

export async function main() {
    const rootClassName = "swn-popup";
    RunMode.mode = RunMode.develop;
    const baseCSS = new InsertHTMLData("", "", "./develop/style.css", "");
    const insertHTMLData = new InsertHTMLData(
        rootClassName,
        "./src/gui/MainMenu/index.html",
        "./src/gui/MainMenu/css/style.css",
        "./src/gui/MainMenu/js/script.js"
    );
    const swnPopup = document.getElementsByClassName(rootClassName);
    if (swnPopup.length > 0) return;
    await insertHTML(baseCSS, rootClassName);
    await insertHTML(insertHTMLData, rootClassName);
}