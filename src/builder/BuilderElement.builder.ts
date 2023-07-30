import { ApplyStyle } from "../factory/ApplyStyle.factory";
import { ManageClass } from "../factory/ManageClass.factory";
import { ElementArg } from "../type/ElementStyle.type";

type BuilderElementActions = {
  [key: string]: (element: HTMLElement, value: any) => void;
};

export function BuilderElement(tagName: string, args: ElementArg): HTMLElement {

  const Element = document.createElement(tagName);

  const actions: BuilderElementActions = {
    className(element: HTMLElement, className: string | string[]) {
      ManageClass(element, className).add();
    },
    style(element: HTMLElement, style: ElementArg) {
      ApplyStyle(element, style);
    },
    appendChild(element: HTMLElement, childrens: HTMLElement[]) {
      childrens.forEach((child) => {
        element.appendChild(child);
      });
    },
    setAttribute(element: HTMLElement, attr: { [x: string]: string }) {
      Object.keys(attr).forEach((key) => {
        element.setAttribute(key, attr[key]);
      });
    },
  };

  Object.keys(args).forEach((key: string) => {
    const value = args[key];
    if (actions[key]) {
      actions[key](Element, value);
    } else if (key in Element) {
      (Element as any)[key] = value;
    }
  });

  return Element;
}