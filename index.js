import InsertHTMLData from "./src/js/module/insertHTML/insertHTMLData.js";
import insertHTML from "./src/js/module/insertHTML/insertHTML.js";
import RunMode from "./src/js/mode.js";

export async function main() {
    RunMode.mode = RunMode.develop;
    const swnPopup = document.getElementsByClassName("swn-popup");
    if (swnPopup.length > 0) return;

    await insertHTML(new InsertHTMLData("swn-default-css", "", "./develop/style.css", ""));
    await insertHTML(createInsertHTMLData("swn-popup", "./src/gui/MainMenu"));
    await insertHTML(createInsertHTMLData("swn-view-button", "./src/gui/ViewButton"));
}

function createInsertHTMLData(className, directory, targetElement = undefined) {
    return new InsertHTMLData(
        className,
        `${directory}/index.html`,
        `${directory}/css/style.css`,
        `${directory}/js/script.js`,
        targetElement
    );
}