(function () {
  $.ajax({
    type: "GET",
    url: "json/registro.json",
    dataType: "json",
  })
    .done(function (data) {
      console.log("ya tamos", data);
      $("#picFoto").attr("src", data.foto);
      $("#txtNombre").val(data.nombre);
      $("#txtDireccion").val(data.direccion);
      $("#txtTelefono").val(data.telefono);
      $("#txtGenero").val(data.genero);
    })
    .fail(function (err) {
      console.log("Error pe", err);
    })
    .always(function () {
      console.log("Final");
    });
})();
