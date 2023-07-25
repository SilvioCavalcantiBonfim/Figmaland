const series = [new Serie('BRIDGERTON', 0.98, '/assets/bg1.jpeg')];
var currentSerie = series[0];


function onInit() {
  // background
  const background = document.getElementById('background');
  background.style.background = `url(${currentSerie.img}) lightgray 50% / cover no-repeat`;
}

function focusIn(id) {
  document.getElementById(id).focus();
}