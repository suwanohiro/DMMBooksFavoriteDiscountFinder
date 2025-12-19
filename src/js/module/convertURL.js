import RunMode from "../mode.js";

/**
 * 相対パスとして与えられたURLを絶対パスに変換する
 * @param {string} url - 相対パス
 * @returns {string} 絶対パス
 */
export default function convertURL(url) {
    if (RunMode.mode === RunMode.develop) {
        console.log(`url: http://localhost:${location.port}/${url}`);
        return `http://localhost:${location.port}/${url}`;
    } else if (RunMode.mode === RunMode.release) {
        return `https://suwanohiro.github.io/DMMBooksFavoriteDiscountFinder/${url}`;
    }
}