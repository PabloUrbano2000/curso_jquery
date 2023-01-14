(function () {
  $.smallBox = function (opciones) {
    opciones = $.extend(
      {
        titulo: undefined,
        subtitulo: undefined,
        contenido: undefined,
        fa: "fa-envelope-o",
        img: undefined,
        timeout: 3000,
      },
      opciones
    );

    var html = `
    <div class="smallBox-contenedor">
    <div class="smallBox-foto">
      <img src="${opciones.img}" />
    </div>
    <div class="smallBox-contenido" align="center">
      <div class="smallBox-textoContenedor" align="left">
        <span class="smallBox-titulo">${opciones.titulo}</span>
        <span class="smallBox-subTitulo">${opciones.subtitulo}</span>
      </div>
      <div class="smallBox-pico"></div>
      <div class="smallBox-cajaColor">
        <div class="smallBox-colorTexto">
          <i class="fa fa-bell-o"></i> ${opciones.contenido}
        </div>
        <div class="smallBox-colorIcon">
          <i class="fa ${opciones.fa} fa-2x"></i>
        </div>
      </div>
      <div class="smallBox-sombra"></div>
    </div>
  </div>
    `;

    $("body").append(html);
    animarEntrada();

    setTimeout(function () {
      animarSalida();
    }, opciones.timeout);
  };

  function animarSalida() {
    var $smallBox = $(".smallBox-contenedor");
    var tl = new TimelineMax();
    tl.to($smallBox, 1, { x: "+=100px" }).to(
      $smallBox,
      1,
      { opacity: 0, onComplete: removerSmallBox },
      "-=1.3"
    );
  }

  function removerSmallBox() {
    $(".smallBox-contenedor").remove();
  }

  function animarEntrada() {
    var $smallBox = $(".smallBox-contenedor");
    var tl = new TimelineMax();
    tl.from($smallBox, 1.3, { x: "+=100px", ease: Bounce.easeOut }).from(
      $smallBox,
      1,
      { opacity: 0 },
      "-=1.3"
    );
  }
})();
