(function () {
  var $cajaRoja = $(".cajaRoja");

  $("#btnTamano").on("click", function () {
    $cajaRoja
      .animate(
        {
          width: "+=50px",
          height: "+=50px",
        },
        1000,
        function () {
          console.log("terminó la animación");
        }
      )
      .animate({
        width: "-=50px",
        height: "-=50px",
      })
      .animate(
        {
          opacity: 0.1,
        },
        1500,
        function () {
          $(this).remove()
        }
      );
  });
})();
