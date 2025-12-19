export default function closePopup(rootClassName, elem) {
    elem.addEventListener("click", () => {
        const popupElements = document.getElementsByClassName(`${rootClassName}-base`);
        Array.from(popupElements).forEach(popupElement => { popupElement.remove(); });
    });
}