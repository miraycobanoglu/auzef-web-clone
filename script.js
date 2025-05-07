// Menu icon elementini seçiyoruz
const menuIcon = document.getElementById("menuIcon");
// Menü içeriğini seçiyoruz
const mobileMenu = document.getElementById("mobileMenu");

// Menü ikona tıklanma olayını ekliyoruz
menuIcon.addEventListener("click", function() {
  // Eğer menü kapalıysa, açıyoruz
  if (mobileMenu.style.display === "none") {
    mobileMenu.style.display = "block";
  } else {
    // Eğer menü açıksa, kapatıyoruz
    mobileMenu.style.display = "none";
  }
});

  






  const carousel = document.querySelector('#customCarousel');
  const indicators = document.querySelectorAll('.indicator-btn');

  carousel.addEventListener('slid.bs.carousel', function (e) {
    indicators.forEach(btn => btn.classList.remove('active'));
    indicators[e.to].classList.add('active');
  });





