const video = document.getElementById("video__1") as HTMLVideoElement;
const bt_video = document.getElementById("button__play__1");

video?.addEventListener("ended", videoEvent);
video?.addEventListener("click", videoEvent);

function videoEvent() {
  bt_video?.classList.remove("d-none");
  video?.pause();
}

bt_video?.addEventListener("click", () => {
  if (video?.onended) video.currentTime = 0;
  bt_video.classList.add("d-none");
  video.play();
});