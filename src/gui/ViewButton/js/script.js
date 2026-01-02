import { main as view } from "../../../../index.js";
import IDNames from "../../module/IDNames.js";

function main() {
    const button = document.getElementById(IDNames.ViewButton);
    button.addEventListener("click", () => { view(); });
}

main();