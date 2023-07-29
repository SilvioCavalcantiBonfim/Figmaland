window.onload = () => {

  const video = document.getElementById("video__1");
  const bt_video = document.getElementById("button__play__1");
  

  if(video instanceof HTMLVideoElement){
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
