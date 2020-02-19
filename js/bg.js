const body = document.querySelector("body");

const IMG_NUMBER = 3;

function paintImage(imgNumber) {
  console.log(1);
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpeg`;
  image.classList.add("bgImage");
  body.prepend(image);
}

function genRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}

function init() {
  const randomNumber = genRandom();
  paintImage(randomNumber);
}

init();

// Math.floor()
// Math.random()
// Math.ceil()
