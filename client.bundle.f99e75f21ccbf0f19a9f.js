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

;// CONCATENATED MODULE: ./src/component/client.component.ts

class ClientComponent extends HTMLElement {
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
        // cria os elementos filhos do heading e o heading
        const _img = BuilderElement('img', {
            src: args.src,
            alt: args.alt,
            width: args.width,
            height: args.height,
        });
        const _title = BuilderElement('h6', {
            className: ['text-center', 'm-0'],
            innerText: args.title || 'Client Name'
        });
        const _container = BuilderElement('div', {
            className: ['d-flex', 'flex-column'],
            style: {
                padding: "1.5625rem 2.5rem",
                gap: "0.9375rem",
                maxWidth: "17.1875rem",
                border: "1px solid #D8D8D8"
            },
            appendChild: [_title, _img]
        });
        if (this.shadowRoot) {
            this.shadowRoot.appendChild(_container);
        }
    }
}
customElements.define("app-client", ClientComponent);

/******/ })()
;