// Varsayılan ses seviyesi
let currentVolume = 1;

document.getElementById("volumeControl").addEventListener("input", function () {
  currentVolume = this.value;
});

function playSound(key) {
  let sesURL = "";

  switch (key) {
    case "w":
      sesURL = "sounds/crash.mp3";
      break;
    case "a":
      sesURL = "sounds/kick-bass.mp3";
      break;
    case "s":
      sesURL = "sounds/snare.mp3";
      break;
    case "d":
      sesURL = "sounds/tom-1.mp3";
      break;
    case "j":
      sesURL = "sounds/tom-2.mp3";
      break;
    case "k":
      sesURL = "sounds/tom-3.mp3";
      break;
    case "l":
      sesURL = "sounds/tom-4.mp3";
      break;
    default:
      return;
  }

  const ses = new Audio(sesURL);
  ses.volume = currentVolume;
  ses.play();
}

function buttonAnimation(key) {
  const activeButton = document.querySelector("." + key);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}

document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", function () {
    const key = this.innerHTML.toLowerCase();
    playSound(key);
    buttonAnimation(key);
  });
});

document.addEventListener("keydown", function (event) {
  const key = event.key.toLowerCase();
  playSound(key);
  buttonAnimation(key);
});
