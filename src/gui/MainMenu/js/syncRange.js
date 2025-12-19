export default function syncRange(rangeID) {
    const rangeElem = document.getElementById(rangeID);
    const numberElem = document.getElementById(`${rangeID}-txt`);
    const minElem = document.getElementById(String(rangeID).substring(0, rangeID.length - 3) + "min");
    const maxElem = document.getElementById(String(rangeID).substring(0, rangeID.length - 3) + "max");

    rangeElem.addEventListener("input", () => {
        if (rangeID.endsWith("min")) {
            numberElem.innerHTML = Math.min(rangeElem.value, parseInt(maxElem.value) - 5);
            rangeElem.value = Math.min(rangeElem.value, parseInt(maxElem.value) - 5);
        } else if (rangeID.endsWith("max")) {
            numberElem.innerHTML = Math.max(rangeElem.value, parseInt(minElem.value) + 5);
            rangeElem.value = Math.max(rangeElem.value, parseInt(minElem.value) + 5);
        }
    });
}