(function () {
  var $cajaRoja = $(".cajaRoja");
  function mover(dir) {
    $cajaRoja.clearQueue();
    switch (dir) {
      case "arr":
        $cajaRoja.animate(
          {
            top: "-=50px",
          },
          200
        );
        break;

      case "aba":
        $cajaRoja.animate(
          {
            top: "+=50px",
          },
          200
        );

        break;
      case "der":
        $cajaRoja.animate(
          {
            left: "+=50px",
          },
          200
        );

        break;
      case "izq":
        $cajaRoja.animate(
          {
            left: "-=50px",
          },
          200
        );
        break;
      default:
        $cajaRoja.animate(
          {
            top: "0",
            left: "0",
          },
          1000
        );
        break;
    }
  }

  $(document).on("keypress", function (e) {
    var keyCode = e.keyCode;
    switch (keyCode) {
      case 119:
        mover("arr");
        break;
      case 115:
        mover("aba");
        break;
      case 100:
        mover("der");
        break;
      case 97:
        mover("izq");
        break;
    }
  });

  $("button").on("click", function () {
    var dir = $(this).data("dir");
    mover(dir);
  });
})();
