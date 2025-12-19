import closePopup from "../../module/closePopup.js";
import syncRange from "./syncRange.js";

const rootClassName = "swn-popup";

function main() {
    // 閉じるボタンのイベント設定
    closePopup(rootClassName, document.getElementById("swn-close"));

    // 範囲入力と数値入力の同期設定
    syncRange("swn-percent-max");
    syncRange("swn-percent-min");
    syncRange("swn-return-min");
    syncRange("swn-return-max");
}

main();