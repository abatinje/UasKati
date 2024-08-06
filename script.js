let slideIndex = 0;
showSlides();

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function showSlides() {
  let slides = document.getElementsByClassName("slide");
  let dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; 
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slideIndex = (slideIndex + slides.length) % slides.length;
  slides[slideIndex].style.display = "block"; 
  dots[slideIndex].className += " active";
  setTimeout(showSlides, 3000); // Change image every 3 seconds
}

// Add dots dynamically based on the number of slides
const dotsContainer = document.querySelector(".dots-container");
const slides = document.querySelectorAll(".slide");
for (let i = 0; i < slides.length; i++) {
  let dot = document.createElement("span");
  dot.className = "dot";
  dot.onclick = () => changeSlide(i - slideIndex);
  dotsContainer.appendChild(dot);
}

function getQueryParameters(url) {
  const urlParams = new URLSearchParams(url);
  const params = {};

  for (const [key,value] of urlParams.entries()){
      params[key] = value;
  }
  return params;
}

const data = getQueryParameters(window.location.href);


document.getElementById('invoiceName').innerText = data.nama;
document.getElementById('invoiceEmail').innerText = data.email;
document.getElementById('invoiceAddress').innerText = data.alamat;
document.getElementById('invoicePhone').innerText = data.telepon;