import { ElementStyle } from "../type/ElementStyle.type";

export const ApplyStyle = (element: HTMLElement, style: ElementStyle) => {
  Object.keys(style).forEach((key) => {
    const value = String(style[key]);
    if (key in element.style) {
      (element.style as any)[key] = value;
    }
  });
};