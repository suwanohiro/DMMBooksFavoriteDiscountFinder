export default class InsertHTMLData {
    constructor(className, html = "", css = "", js = "") {
        this.className = className;
        this.html = html;
        this.css = css;
        this.js = js;
    }

    get rootClassName() { return this.rootClassName; }
    get HTML() { return this.html; }
    get CSS() { return this.css; }
    get JS() { return this.js; }
}