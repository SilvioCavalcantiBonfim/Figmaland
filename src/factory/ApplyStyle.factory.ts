import { ElementStyle } from "../type/ElementStyle.type";

export const ApplyStyle = (element: HTMLElement, style: ElementStyle) => {
  Object.keys(style).forEach((key) => {
    if (Object.hasOwnProperty.call(style, key)) {
      element.style[key] = style[key];
    }
  });
};