import { main } from "../index.js";
import RunMode from "../src/js/mode.js";

window.addEventListener("DOMContentLoaded", async () => {
    if (RunMode.mode === RunMode.develop) { await main(); }
});