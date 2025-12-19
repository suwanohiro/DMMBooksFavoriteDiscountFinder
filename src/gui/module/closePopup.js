export default function closePopup(rootClassName, elem) {
    elem.addEventListener("click", () => {
        const popupElements = document.getElementsByClassName(rootClassName);
        Array.from(popupElements).forEach(element => element.remove());
    });
}