import { main as view } from "../../../../index.js";

function main() {
    const className = "swn-view-button";
    const button = document.getElementById(className);
    button.addEventListener("click", () => { view(); });
}

main();