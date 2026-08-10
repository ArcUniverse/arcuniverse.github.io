let slideIndex = 0;
showSlides();

// Next/previous controls
function plusSlides() {
  showSlides(slideIndex + 1);
}
function minusSlides() {
  showSlides(slideIndex - 1);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

document.getElementById('animatedBook').addEventListener('mouseenter', function() {
  this.classList.add('hovered');
});

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  // Update slideIndex if provided
  if (typeof n !== 'undefined') {
    slideIndex = n;
  }

  // Reset slideIndex if out of bounds
  if (slideIndex >= slides.length) { slideIndex = 0; }
  if (slideIndex < 0) { slideIndex = slides.length - 1; }

  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Show current slide
  slides[slideIndex].style.display = "block";  

  // Update dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[slideIndex].className += " active";
}
