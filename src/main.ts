var dropdown = false;

window.onload = () => {

  const video = document.getElementById("video__1");
  const bt_video = document.getElementById("button__play__1");
  const bt_dropdown = document.getElementById("button__dropdown");
  const dropdown_menu = document.getElementById("dropdown__content");

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
