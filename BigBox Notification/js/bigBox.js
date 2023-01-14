(function () {
  $.bigBox = function (opciones, callback) {
    opciones = $.extend(
      {
        fa: "fa-thumbs-o-up",
        titulo: undefined,
        contenido: undefined,
        boton: "Aceptar",
      },
      opciones
    );

    if (opciones.titulo == undefined) {
      alert("El título es necesario.");
      return;
    }

    if (opciones.contenido == undefined) {
      alert("El contenido es necesario.");
      return;
    }

    var contenido = "";
    contenido = '<div class="bigBox-Fondo"></div>';
    contenido += '<div class="bigBox-contenedor" align="center">';
    contenido += '<div class="bigBox-Cerrar"><i class="fa fa-times"></i></div>';
    contenido +=
      '<div class="bigBox-Circulo"><i class="fa ' +
      opciones.fa +
      ' fa-3x" aria-hidden="true"></i></div>';
    contenido += '<div class="bigBox-Contenido">';
    contenido += '<span class="bigBox-Titulo">' + opciones.titulo + "</span>";
    contenido += '<span class="bigBox-Texto">' + opciones.contenido + "</span>";
    contenido += "</div>";
    contenido += '<button class="bigBox-Boton">' + opciones.boton + "</button>";
    contenido += "</div>";

    $("body").append(contenido);

    animarEntrada();

    // Función del botón cerrar
    $(".bigBox-Cerrar").on("click", function () {
      animarSalida();
      if (typeof callback == "function") {
        callback("boton-cerrar");
      }
    });

    // Función del botón principal
    $(".bigBox-Boton").on("click", function () {
      animarSalida();
      if (typeof callback == "function") {
        callback("boton-principal");
      }
    });

    // Animar la entrada
    function animarEntrada() {
      var $fondo = $(".bigBox-Fondo");
      //   $fondo.fadeIn(300);

      var $bigBox = $(".bigBox-contenedor");

      var anchoP = $(window).width();

      var altoP = $(window).height();

      var anchoB = $bigBox.width();
      var altoB = $bigBox.height();

      $bigBox.css({
        top: altoP / 2 - altoB / 2,
        left: anchoP / 2 - anchoB / 2,
      });

      $bigBox.show();
      $fondo.show();
      var tl = new TimelineMax();
      tl.to($fondo, 0.5, { opacity: 0.3 })
        .to($bigBox, 0.5, { opacity: 1 }, "-=0.35")
        .from($bigBox, 0.8, { y: "-=20", ease: Bounce.easeOut }, "-=0.5");
    }

    function animarSalida() {
      var $fondo = $(".bigBox-Fondo");
      //   $fondo.fadeIn(300);

      var $bigBox = $(".bigBox-contenedor");
      var tl = new TimelineMax();
      tl.to($fondo, 0.3, { opacity: 0 }).to(
        $bigBox,
        0.3,
        { opacity: 0, onComplete: removerBigBox },
        "-=0.3"
      );
    }

    function removerBigBox() {
      var $fondo = $(".bigBox-Fondo");
      var $bigBox = $(".bigBox-contenedor");
      $fondo.remove();
      $bigBox.remove();
    }
  };
})();
