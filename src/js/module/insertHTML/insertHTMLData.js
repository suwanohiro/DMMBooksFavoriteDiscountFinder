export default class InsertHTMLData {
    constructor(className, html = "", css = "", js = "", addHTMLTargetElement = undefined) {
        this.className = className;
        this.html = html;
        this.css = css;
        this.js = js;
        this.addHTMLTargetElement = (addHTMLTargetElement !== undefined) ? addHTMLTargetElement : document.body;
    }

    get rootClassName() { return this.className; }
    get HTML() { return this.html; }
    get CSS() { return this.css; }
    get JS() { return this.js; }
    get AddHTMLTargetElement() { return this.addHTMLTargetElement; }
}