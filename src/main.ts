import './css/main.scss';

var dropdown = false;

function updateBackground() {
  const home__rect = document.getElementById("home")?.getBoundingClientRect().height || 0;
  const header__rect = document.getElementById("header")?.getBoundingClientRect().height || 0;
  const w = document.body.getBoundingClientRect().width || 0;
  const h = home__rect - 64 + header__rect;
  
  const viewBox = function (_w: number, _h: number): string {
    return `0 0 ${_w} ${_h}`;
  }
  
  const path = function (_w: number, _h: number):string {
    return `M 0 -3 H ${_w} V ${_h-92} L ${_w/2} ${_h} L 0 ${_h-92} L 0 -3 Z`;
  }
  
  const background = document.getElementById("background");

  background?.setAttribute("height", String(h));
  background?.setAttribute("width", String(w));
  background?.setAttribute("viewBox", viewBox(w,h));

  const _path = document.getElementById("background_path");
  _path?.setAttribute("d", path(w,h));

  const getMatrixValue = function(param: number) {
    const m375 = 'matrix(0.00105845 0 0 0.000521105 -1.02312 0)';
    const m1020 = 'matrix(0.000347464 0 0 0.000663456 0 -0.136586)';
  
    if (param <= 375) {
      return m375;
    } else if (param >= 1020) {
      return m1020;
    } else {
      // Interpolação linear para os valores entre 375 e 1020
      const percentage = (param - 375) / (1020 - 375);
      const a = 0.00105845 + percentage * (0.000347464 - 0.00105845);
      const d = 0.000521105 + percentage * (0.000663456 - 0.000521105);
      const e = -1.02312 + percentage * (0 - (-1.02312));
      return `matrix(${a} 0 0 ${d} ${e} 0)`;
    }
  }
  const _use = document.getElementById("background__use");
  _use?.setAttribute("transform", getMatrixValue(w));
}

window.onload = () => {

  const video = document.getElementById("video__1");
  const bt_video = document.getElementById("button__play__1");
  const bt_dropdown = document.getElementById("button__dropdown");
  const dropdown_menu = document.getElementById("dropdown__content");
  updateBackground();
  window.addEventListener('resize', updateBackground);

  bt_dropdown?.addEventListener('click', () => {
    if (dropdown) {
      dropdown_menu?.classList.remove('scale-in-ver-top');
      dropdown_menu?.classList.add('scale-out-ver-top');
    } else {
      dropdown_menu?.classList.remove('scale-out-ver-top');
      dropdown_menu?.classList.add('scale-in-ver-top');
    }
    dropdown = !dropdown;
  });

  if (video instanceof HTMLVideoElement) {
    video.addEventListener("ended", () => {
      bt_video?.classList.remove("d-none");
    });

    video?.addEventListener("click", () => {
      bt_video?.classList.remove("d-none");
      video?.pause();
    });

    bt_video?.addEventListener("click", () => {
      if (video?.onended) video.currentTime = 0;
      bt_video.classList.add("d-none");
      video.play();
    });
  }
};
