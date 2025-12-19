import closePopup from "../../module/closePopup.js";

const rootClassName = "swn-popup";

const button = document.getElementById("swn-close");
closePopup(rootClassName, button);
button.addEventListener("click", async () => {

    console.log("Find Discounts button clicked");
});
