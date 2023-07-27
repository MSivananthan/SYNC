// Get DOM elements
const playButton = document.querySelector(".fa-pause");
const audioPlayer = document.querySelector(".music-player");
const progressBar = document.querySelector(".prog-bar-inner");
const currentTimeDisplay = document.querySelector(".prog-time .left");
const totalTimeDisplay = document.querySelector(".prog-time .right");
const nextButton = document.querySelector(".button-lg");
const prevButton = document.querySelector(".button-md");

let isPlaying = false;
let currentTrack = 0;

// List of music tracks
const tracks = [
  {
    title: "Eleanor Rigby",
    artist: "The Beatles",
    source: "eleanor-rigby.mp3",
    duration: 126
  },
  {
    title: "Another Song",
    artist: "Another Artist",
    source: "Nee Paartha-cut.mp3",
    duration: 200
  }
  // Add more tracks here...
];

// Function to update time format for the total duration
function updateTotalTimeDisplay() {
  const totalTime = tracks[currentTrack].duration;
  totalTimeDisplay.textContent = formatTime(totalTime);
}

// Set the total duration of the audio once it's loaded
audioPlayer.addEventListener("loadedmetadata", updateTotalTimeDisplay);

// Play or pause the audio when the play button is clicked
playButton.addEventListener("click", () => {
  if (isPlaying) {
    audioPlayer.pause();
    isPlaying = false;
    playButton.classList.replace("fa-play", "fa-pause");
  } else {
    audioPlayer.play();
    isPlaying = true;
    playButton.classList.replace("fa-pause", "fa-play");
  }
});

// Function to update time format for the current time
function updateTimeDisplay() {
  if (isPlaying) {
    const currentTime = audioPlayer.currentTime;
    currentTimeDisplay.textContent = formatTime(currentTime);
  }
}

// Update the progress bar and current time as the audio plays
audioPlayer.addEventListener("timeupdate", () => {
  if (isPlaying) {
    const currentTime = audioPlayer.currentTime;
    const totalTime = tracks[currentTrack].duration;
    progressBar.style.width = `${(currentTime / totalTime) * 100}%`;
    updateTimeDisplay();
  }
});

// Function to play the next track
function playNextTrack() {
  currentTrack = (currentTrack + 1) % tracks.length;
  audioPlayer.src = tracks[currentTrack].source;
  updateTotalTimeDisplay();
  audioPlayer.play();
}

// Next Music button click event
nextButton.addEventListener("click", () => {
  playNextTrack();
});

// Format time in seconds to MM:SS format
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
