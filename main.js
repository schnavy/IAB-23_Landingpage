let textContainer = document.querySelector(".text");
let palette = document.querySelector(".palette");
let texts = document.querySelectorAll(".big");

function shufflealignement() {
  texts.forEach((text) => {
    text.classList.remove("right");
    text.classList.remove("middle");
    let r = Math.floor(Math.random() * 3);
    if (r == 0) {
      text.classList.add("right");
    } else if (r == 1) {
      text.classList.add("middle");
    }
  });
}

function suffleRotation() {
  texts.forEach((text) => {
    text.classList.remove("rotated");
    let r = Math.floor(Math.random() * 4);
    if (r == 0) {
      text.classList.add("rotated");
    }
  });
}

let counter = 0;

window.addEventListener("mousemove", () => {
  counter++;
  if (counter % 50 == 0) {
    shufflealignement();
    suffleRotation();
  }
});

let state = 0;

window.addEventListener("click", () => {
  shufflealignement();
  suffleRotation();

  state = state > 2 ? 0 : state += 1;
  console.log(state);


  textContainer.classList.remove("hidden");
  palette.classList.remove("hidden");

  if (state == 0) {
    textContainer.classList.add("hidden");
  } else if (state == 2) {
    palette.classList.add("hidden");
  }
});
