/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/factory/ApplyStyle.factory.ts
const ApplyStyle = (element, style) => {
    Object.keys(style).forEach((key) => {
        const value = String(style[key]);
        if (key in element.style) {
            element.style[key] = value;
        }
    });
};

;// CONCATENATED MODULE: ./src/factory/ManageClass.factory.ts
const ManageClass = (element, className) => {
    let classNames = [];
    if (typeof className === 'string') {
        classNames = className.split(' ');
    }
    else {
        classNames = className;
    }
    return {
        add() {
            classNames.forEach((e) => element.classList.add(e));
        },
        remove() {
            classNames.forEach((e) => element.classList.remove(e));
        },
    };
};

;// CONCATENATED MODULE: ./src/builder/BuilderElement.builder.ts


function BuilderElement(tagName, args) {
    const Element = document.createElement(tagName);
    const actions = {
        className(element, className) {
            ManageClass(element, className).add();
        },
        style(element, style) {
            ApplyStyle(element, style);
        },
        appendChild(element, childrens) {
            childrens.forEach((child) => {
                element.appendChild(child);
            });
        },
        setAttribute(element, attr) {
            Object.keys(attr).forEach((key) => {
                element.setAttribute(key, attr[key]);
            });
        },
    };
    Object.keys(args).forEach((key) => {
        const value = args[key];
        if (actions[key]) {
            actions[key](Element, value);
        }
        else if (key in Element) {
            Element[key] = value;
        }
    });
    return Element;
}

;// CONCATENATED MODULE: ./src/component/button.component.ts

class ButtonComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        const attr = {};
        this.getAttributeNames().forEach((_attr) => (attr[_attr] = this.getAttribute(_attr)));
        this.render(attr);
    }
    render(args) {
        var _a;
        const styles = document.getElementsByTagName('link');
        if (styles)
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(styles[0].cloneNode(true));
        const themeColor = {
            'BLUE': ['bg-primary', 'text-white'],
            'WHITE': ['bg-white', 'text-primary']
        };
        var _class = themeColor[args.theme || 'BLUE'];
        _class = _class.concat(['p-16', 'm-0', 'rounded-pill', 'text-center', 'border-0', 'w-100']);
        if (args.className)
            _class = args.className.split(' ');
        // cria os elementos filhos do heading e o heading
        const _button = BuilderElement('button', {
            className: _class,
            innerText: args.label,
            onclick: args.onclick,
            style: {
                letterSpacing: "0.0125rem",
                fontWeight: (args.try) ? 700 : 400,
                fontSize: "1.25rem",
                lineHeight: "1.25rem"
            }
        });
        if (this.shadowRoot) {
            this.shadowRoot.appendChild(_button);
        }
    }
}
customElements.define("app-button", ButtonComponent);

/******/ })()
;