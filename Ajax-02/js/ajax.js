(function () {
  $.ajax({
    type: "GET",
    url: "json/data.json",
    dataType: "json",
  })
    .done(function (data) {
      var personas = data;

      for (let i = 0; i < personas.length; i++) {
        var persona = personas[i];
        var tags = "";
        for (let j = 0; j < persona.tags.length; j++) {
          tags +=
            '<span class="label label-primary">' + persona.tags[j] + "</span> ";
        }

        var html = `
			<tr>
			<td>${persona.name}</td>
			<td>${persona.age}</td>
			<td>${tags}</td>
			</tr>
		`;
        $(".table").append(html);
      }
    })
    .fail(function () {
      console.log("Fallo!");
    })
    .always(function () {
      console.log("Completo!");
    });
})();
