import { ApplyStyle } from "../factory/ApplyStyle.factory.js";
import { ManageClass } from "../factory/ManageClass.factory.js";

const actions = {
  className(Element, className) {
    ManageClass(Element, className).add();
  },
  style(Element, style){
    ApplyStyle(Element, style);
  },
  appendChild(Element, childrens){
    childrens.forEach(element => {
      Element.appendChild(element);
    });
  },
  setAttribute(Element, attr){
    Object.keys(attr).forEach(key => {
      Element.setAttribute(key,attr[key]);
    })
  }
}

export const BuilderElement = (tagName, ...args) => {
  const Element = document.createElement(tagName);
  Object.keys(...args).map(key => {
    if(actions[key])
      actions[key](Element, args[0][key])
    else
      Element[key] = args[0][key]
  })
  return Element;
}