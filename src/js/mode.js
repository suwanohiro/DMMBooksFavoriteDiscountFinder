export default class RunMode {
    static mode = RunMode.develop;

    static get develop() { return "develop"; }
    static get release() { return "release"; }
}