export default class RunMode {
    static initialize(mode = RunMode.develop) { RunMode.mode = mode; }

    static mode = RunMode.develop;

    static get develop() { return "develop"; }
    static get release() { return "release"; }

}