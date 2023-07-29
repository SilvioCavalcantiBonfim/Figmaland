export const ApplyStyle = (_element, _style) => {
  Object.keys(_style).forEach((key) => {
    if (Object.hasOwnProperty.call(_style, key)) {
      _element.style[key] = _style[key];
    }
  });
};