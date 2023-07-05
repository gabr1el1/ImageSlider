let carousel = Array.from(document.querySelectorAll(".carousel img"));
let carouselLength = carousel.length;
let dotControl = document.querySelector(".carousel .dot-control");
let arrowLeft = document.querySelector(".arrow-left");
let arrowRight = document.querySelector(".arrow-right");

let activeImage = 0;

carousel.forEach((element, index) => {
  if (element.classList.contains("visible")) {
    activeImage = index;
  }
});

let htmlString = "";
for (let i = 0; i < carouselLength; i++) {
  htmlString += `<li><span>.</span></li>`;
}
dotControl.innerHTML = htmlString;
let dotsControl = Array.from(
  document.querySelectorAll(".carousel .dot-control li span")
);

dotsControl.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    selectImage(index);
  });
});
let myTimer = setInterval(next, 5000);

dotsControl[activeImage].classList.add("active");
arrowLeft.addEventListener("click", previous);
arrowRight.addEventListener("click", next);

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
    activeImage = carouselLength - 1;
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
  if (activeImage == carouselLength - 1) {
    activeImage = 0;
  } else {
    activeImage++;
  }

  carousel[activeImage].classList.add("visible");
  dotsControl[activeImage].classList.add("active");

  clearInterval(myTimer);
  myTimer = setInterval(next, 5000);
}
