(function () {
  var actual = 0;
  var ancho = 600;
  var $slideShow = $(".slideShow ul");
  var slides = $slideShow.find("li").length;

  var intervalo = setInterval(function () {
    mover("sig");
  }, 1500);

  function mover(dir, click = false) {
    if (click) {
      clearInterval(intervalo);
    }

    dir === "sig" ? actual-- : actual++;

    if (actual > 0) {
      actual = (slides - 1) * -1;
    } else if (actual <= slides * -1) {
      actual = 0;
    }

    var margen = actual * ancho;

    var tl = new TimelineMax();
    tl.to($slideShow, 1.4, {
      marginLeft: margen,
      ease: Elastic.easeOut.config(1, 0.75),
    });

    // $slideShow.animate(
    //   {
    //     marginLeft: margen,
    //   },
    //   400
    // );
  }

  $(".btnSlide").on("click", function () {
    var dir = $(this).data("mov");
    mover(dir, true);
  });
})();
