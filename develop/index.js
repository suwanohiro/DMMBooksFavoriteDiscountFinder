import { main } from "../index.js";

window.onload = async () => {
    const run = document.getElementById("run");
    run.onclick = async () => { await main(); };
}