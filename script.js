$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    dots: false,
    nav: true,
    smartSpeed: 600,
    responsiveClass: true,
    nav: true,
    navText: [
      '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/esquerda.png">',
      '<img src="https://fastshopwr-a.akamaihd.net/pages/2023/12/image/direita.png">',
    ],
    responsive: {
      0: { items: 2, margin: 4 },
      600: { items: 2, margin: 4 },
      1100: { items: 5, margin: 4 },
    },
    slideBy: 3,
    autoplay: true,
    autoplayTimeout: 20000,
    autoplayHoverPause: true,
  });
});

// Sanfona Faq
document.querySelectorAll(".goldFri_sanfona_item").forEach((item) => {
  item.addEventListener("click", function () {
    let alvo = "#" + this.id;

    if (this.getAttribute("sanfona_item_ativo") === "false") {
      document.querySelectorAll(".goldFri_sanfona_item").forEach((item) => {
        item.setAttribute("sanfona_item_ativo", "false");
        item.classList.remove("goldFri_sanfona_item_ativo");
      });

      this.classList.add("goldFri_sanfona_item_ativo");
      this.setAttribute("sanfona_item_ativo", "true");
    } else {
      this.classList.remove("goldFri_sanfona_item_ativo");
      this.setAttribute("sanfona_item_ativo", "false");
    }
  });
});
