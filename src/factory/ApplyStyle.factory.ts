export const ApplyStyle = (element: HTMLElement, style: {[key: string]: any}) => {
  Object.keys(style).forEach((key) => {
    const value = String(style[key]);
    if (key in element.style) {
      (element.style as any)[key] = value;
    }
  });
};