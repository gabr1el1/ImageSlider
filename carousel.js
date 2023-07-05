let carousel = Array.from(document.querySelectorAll(".carousel img"));
let carouseLength = carousel.length;
let dotsControl = Array.from(
  document.querySelectorAll(".carousel .dot-control li span")
);
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let activeImage = 0;

carousel.forEach((element, index) => {
  if (element.classList.contains("visible")) {
    activeImage = index;
  }
});

dotsControl[activeImage].classList.add("active");
arrowLeft.addEventListener("click", previous);
arrowRight.addEventListener("click", next);
dotsControl.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    selectImage(index);
  });
});
let myTimer = setInterval(next, 5000);

function selectImage(index) {
  dotsControl[activeImage].classList.remove("active");
  carousel[activeImage].classList.remove("visible");
  activeImage = index;
  carousel[activeImage].classList.add("visible");
  dotsControl[activeImage].classList.add("active");
}

function previous() {
  dotsControl[activeImage].classList.remove("active");
  carousel[activeImage].classList.remove("visible");
  if (activeImage == 0) {
    activeImage = carouseLength - 1;
  } else {
    activeImage--;
  }

  carousel[activeImage].classList.add("visible");
  dotsControl[activeImage].classList.add("active");
  /*
  setInterval is running continuousely
  when this funciton is triggered to change
  the image in the carousel, it may happen 
  that setInterval interval was about to 
  reach the limit and change the image again too early.
  */
  clearInterval(myTimer);
  myTimer = setInterval(next, 5000);
}

function next() {
  dotsControl[activeImage].classList.remove("active");
  carousel[activeImage].classList.remove("visible");
  if (activeImage == carouseLength - 1) {
    activeImage = 0;
  } else {
    activeImage++;
  }

  carousel[activeImage].classList.add("visible");
  dotsControl[activeImage].classList.add("active");

  clearInterval(myTimer);
  myTimer = setInterval(next, 5000);
}
