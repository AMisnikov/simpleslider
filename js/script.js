var currentSlide = 0; //счетчик текущего слайда

var slides = document.querySelectorAll(".slider-container__slide"); //список слайдов

drawDots();

var dotes = document.querySelectorAll(".dots-container__dot"); //список точек

document.querySelector(".btn--right").addEventListener("click", function () {
  if (currentSlide + 1 >= slides.length) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }

  changeSlide(currentSlide);
});

document.querySelector(".btn--left").addEventListener("click", function () {
  if (currentSlide == 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }

  changeSlide(currentSlide);
});

for (var i = 0; i < dotes.length; i++) {
  dotes[i].addEventListener("click", function (e) {
    //console.log(e.target.id.split('-'));

    var id = e.target.id.split("-");
    currentSlide = parseInt(id[1]);

    changeSlide(currentSlide);
  });
}

function drawDots() {
  var dotHTML = '<div class="dots-container__dot" id="dot-%"></div>';

  var dotContainer = document.querySelector(".dots-container");

  for (var i = 0; i < slides.length; i++) {
    var newDot = dotHTML.replace("%", i);

    dotContainer.insertAdjacentHTML("beforeend", newDot);
  }

  document
    .querySelectorAll(".dots-container__dot")[0]
    .classList.add("dots-container__dot--active");
}

function changeSlide(slide) {
  for (var i = 0; i < slides.length; i++) {
    slides[i].classList.remove("slider-container__slide--active");
    dotes[i].classList.remove("dots-container__dot--active");
  }

  slides[slide].classList.add("slider-container__slide--active");
  dotes[slide].classList.add("dots-container__dot--active");
}
