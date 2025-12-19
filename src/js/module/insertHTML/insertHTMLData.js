export default class InsertHTMLData {
    constructor(html, css) {
        this.html = html;
        this.css = css;
    }

    get HTML() { return this.html; }
    get CSS() { return this.css; }
}