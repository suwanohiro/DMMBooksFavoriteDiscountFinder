import { main } from "../index.js";

window.onload = () => {
    const run = document.getElementById("run");
    run.onclick = () => { main(); };
}