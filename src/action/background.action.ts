const background = document.getElementById("background");
const _path = document.getElementById("background_path");
const _use = document.getElementById("background__use");

function viewBox(_w: number, _h: number): string {
  return `0 0 ${_w} ${_h}`;
}

function path(_w: number, _h: number): string {
  return `M 0 -3 H ${_w} V ${_h - 92} L ${_w / 2} ${_h} L 0 ${_h - 92} L 0 -3 Z`;
}

function getMatrixValue(param: number): string {
  const m375 = 'matrix(0.00105845 0 0 0.000521105 -1.02312 0)';
  const m1020 = 'matrix(0.000347464 0 0 0.000663456 0 -0.136586)';

  if (param <= 375) {
    return m375;
  } else if (param >= 1020) {
    return m1020;
  } else {
    const percentage = (param - 375) / (1020 - 375);
    const a = 0.00105845 + percentage * (0.000347464 - 0.00105845);
    const d = 0.000521105 + percentage * (0.000663456 - 0.000521105);
    const e = -1.02312 + percentage * (0 - (-1.02312));
    return `matrix(${a} 0 0 ${d} ${e} 0)`;
  }
}

function ResizeBackground() {
  const home__rect = document.getElementById("home")?.getBoundingClientRect().height || 0;
  const header__rect = document.getElementById("header")?.getBoundingClientRect().height || 0;
  const w = document.body.getBoundingClientRect().width || 0;
  const h = home__rect - 64 + header__rect;

  background?.setAttribute("height", String(h));
  background?.setAttribute("width", String(w));
  background?.setAttribute("viewBox", viewBox(w, h));

  _path?.setAttribute("d", path(w, h));
  _use?.setAttribute("transform", getMatrixValue(w));
}

let resizeTimeout: NodeJS.Timeout;

function handleResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(ResizeBackground, 300);
}

window.addEventListener('resize', handleResize);
if (background)
  background.onload = () => {
    ResizeBackground();
  };