import ClassNames from "../../module/ClassNames.js";
import closePopup from "../../module/closePopup.js";
import syncRange from "./syncRange.js";

function main() {
    // 閉じるボタンのイベント設定
    closePopup(ClassNames.Popup, document.getElementById("swn-close"));

    // 範囲入力と数値入力の同期設定
    syncRange("swn-percent-max");
    syncRange("swn-percent-min");
    syncRange("swn-return-min");
    syncRange("swn-return-max");

    resetValues();

    const swnContentActive = document.getElementsByClassName("swn-content-active");
    Array.from(swnContentActive).forEach(elem => {
        elem.addEventListener("input", () => {
            const titleDiv = elem.closest('.swn-content-title');
            const parentElem = titleDiv.nextElementSibling.nextElementSibling;
            const parentResetButton = parentElem.previousElementSibling.previousElementSibling.getElementsByClassName('swn-content-value-reset')[0];
            parentResetButton.disabled = !elem.checked;
            if (elem.checked) {
                parentElem.classList.remove("swn-disabled");
                parentResetButton.classList.remove("swn-disabled");
                parentElem.classList.add("swn-enabled");
                parentResetButton.classList.add("swn-enabled");
            } else {
                parentElem.classList.add("swn-disabled");
                parentResetButton.classList.add("swn-disabled");
                parentElem.classList.remove("swn-enabled");
                parentResetButton.classList.remove("swn-enabled");
            }
        });
    });
}

function resetValues() {
    const resetButtons = document.getElementsByClassName("swn-content-value-reset");
    Array.from(resetButtons).forEach(button => {
        // minとmaxの要素を取得
        const parentElem = button.closest('.swn-content-title').nextElementSibling.nextElementSibling;
        const rangeInputs = parentElem.getElementsByTagName("input");
        const minInput = Array.from(rangeInputs).find(input => input.type === "range" && input.id.endsWith("min"));
        const maxInput = Array.from(rangeInputs).find(input => input.type === "range" && input.id.endsWith("max"));
        const minDefaultValue = minInput ? minInput.defaultValue : null;
        const maxDefaultValue = maxInput ? maxInput.defaultValue : null;

        button.addEventListener("click", () => {
            if (minInput && maxInput) {
                minInput.value = minDefaultValue;
                maxInput.value = maxDefaultValue;
                const minTxt = document.getElementById(`${minInput.id}-txt`);
                const maxTxt = document.getElementById(`${maxInput.id}-txt`);
                if (minTxt) minTxt.innerHTML = minDefaultValue;
                if (maxTxt) maxTxt.innerHTML = maxDefaultValue;
            }
        });
    });
}

main();