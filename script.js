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




    var list = $(".center-navbar-container nav ul li");
    console.log(list);
    
    var numToShow = 3;
    var button = $("#next");
    var numInList = list.length;
    list.hide();
    if (numInList > numToShow) {
      button.show();
    }
    list.slice(0, numToShow).show();

    button.click(function(){
        var showing = list.filter(':visible').length;
        list.slice(showing - 1, showing + numToShow).fadeIn();
        var nowShowing = list.filter(':visible').length;
        if (nowShowing >= numInList) {
          button.hide();
        }
    });
