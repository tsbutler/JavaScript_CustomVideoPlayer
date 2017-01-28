/* Get our elements */
const player = document.querySelector('.player');
const video = player.querySelector(".viewer");
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build our functions */
function togglePlay() {
  video[video.paused ? 'play' : 'pause']();
  // The single line above does what the five lines below do
  // if (video.paused) {
  //   video.play();
  // } else {
  //   video.pause();
  // }
}

function updateButton() {
  toggle.textContent = this.paused ? '►' : '❚ ❚';
  // The single line above does what the two lines below do
  // const icon = this.paused ? '►' : '❚ ❚';
  // toggle.textContent = icon;
  // console.log(icon);
}

function skip() {
  console.log(this.dataset.skip);
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate() {
  console.log(this.value);
}
/* Hook up our event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);
skipButtons.forEach(button => button.addEventListener('click', skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));