/* Slide Show START*/
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');                   /*  FOR LOOP  */
    if (i === index) {
      slide.classList.add('active');
    }
  });
}

function nextSlide() {                                  /*  Used Function,   */
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length;
  showSlide(slideIndex);
}

// Auto slide every 3 seconds
setInterval(nextSlide, 3000);

// Initial display
showSlide(slideIndex);
/* Slide Show END*/







