/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

var dropdown = false;
const background = document.getElementById("background");
const _path = document.getElementById("background_path");
const _use = document.getElementById("background__use");
const video = document.getElementById("video__1");
const bt_video = document.getElementById("button__play__1");
const bt_dropdown = document.getElementById("button__dropdown");
const dropdown_menu = document.getElementById("dropdown__content");
function viewBox(_w, _h) {
    return `0 0 ${_w} ${_h}`;
}
function path(_w, _h) {
    return `M 0 -3 H ${_w} V ${_h - 92} L ${_w / 2} ${_h} L 0 ${_h - 92} L 0 -3 Z`;
}
function getMatrixValue(param) {
    const m375 = 'matrix(0.00105845 0 0 0.000521105 -1.02312 0)';
    const m1020 = 'matrix(0.000347464 0 0 0.000663456 0 -0.136586)';
    if (param <= 375) {
        return m375;
    }
    else if (param >= 1020) {
        return m1020;
    }
    else {
        const percentage = (param - 375) / (1020 - 375);
        const a = 0.00105845 + percentage * (0.000347464 - 0.00105845);
        const d = 0.000521105 + percentage * (0.000663456 - 0.000521105);
        const e = -1.02312 + percentage * (0 - (-1.02312));
        return `matrix(${a} 0 0 ${d} ${e} 0)`;
    }
}
function ResizeBackground() {
    var _a, _b;
    const home__rect = ((_a = document.getElementById("home")) === null || _a === void 0 ? void 0 : _a.getBoundingClientRect().height) || 0;
    const header__rect = ((_b = document.getElementById("header")) === null || _b === void 0 ? void 0 : _b.getBoundingClientRect().height) || 0;
    const w = document.body.getBoundingClientRect().width || 0;
    const h = home__rect - 64 + header__rect;
    background === null || background === void 0 ? void 0 : background.setAttribute("height", String(h));
    background === null || background === void 0 ? void 0 : background.setAttribute("width", String(w));
    background === null || background === void 0 ? void 0 : background.setAttribute("viewBox", viewBox(w, h));
    _path === null || _path === void 0 ? void 0 : _path.setAttribute("d", path(w, h));
    _use === null || _use === void 0 ? void 0 : _use.setAttribute("transform", getMatrixValue(w));
}
let resizeTimeout;
function handleResize() {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(ResizeBackground, 300);
}
window.onload = () => {
    ResizeBackground();
    window.addEventListener('resize', handleResize);
    bt_dropdown === null || bt_dropdown === void 0 ? void 0 : bt_dropdown.addEventListener('click', () => {
        if (dropdown) {
            dropdown_menu === null || dropdown_menu === void 0 ? void 0 : dropdown_menu.classList.remove('scale-in-ver-top');
            dropdown_menu === null || dropdown_menu === void 0 ? void 0 : dropdown_menu.classList.add('scale-out-ver-top');
        }
        else {
            dropdown_menu === null || dropdown_menu === void 0 ? void 0 : dropdown_menu.classList.remove('scale-out-ver-top');
            dropdown_menu === null || dropdown_menu === void 0 ? void 0 : dropdown_menu.classList.add('scale-in-ver-top');
        }
        dropdown = !dropdown;
    });
    if (video instanceof HTMLVideoElement) {
        video.addEventListener("ended", () => {
            bt_video === null || bt_video === void 0 ? void 0 : bt_video.classList.remove("d-none");
        });
        video === null || video === void 0 ? void 0 : video.addEventListener("click", () => {
            bt_video === null || bt_video === void 0 ? void 0 : bt_video.classList.remove("d-none");
            video === null || video === void 0 ? void 0 : video.pause();
        });
        bt_video === null || bt_video === void 0 ? void 0 : bt_video.addEventListener("click", () => {
            if (video === null || video === void 0 ? void 0 : video.onended)
                video.currentTime = 0;
            bt_video.classList.add("d-none");
            video.play();
        });
    }
};

/******/ })()
;