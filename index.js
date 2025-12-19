import InsertHTMLData from "./src/js/module/insertHTML/insertHTMLData.js";
import insertHTML from "./src/js/module/insertHTML/insertHTML.js";
import RunMode from "./src/js/mode.js";

export async function main() {
    RunMode.mode = RunMode.develop;
    const insertHTMLData = new InsertHTMLData("./src/gui/MainMenu/index.html", "./src/gui/MainMenu/css/style.css");
    await insertHTML(insertHTMLData);
}