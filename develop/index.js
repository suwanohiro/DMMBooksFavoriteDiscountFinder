import { main } from "../index.js";
import RunMode from "../src/js/mode.js";

window.addEventListener("DOMContentLoaded", async () => {
    const run = document.getElementById("run");
    run.addEventListener("click", async () => { await main(); });
    if (RunMode.mode === RunMode.develop) { run.click(); }
});