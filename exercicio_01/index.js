function calcularPorcentagem() {
  var habitantes = Number(document.getElementById("nmr_habitantes").value);

  var brancos = Number(document.getElementById("nmr_brancos").value);

  var nulos = Number(document.getElementById("nmr_nulos").value);

  var validos = Number(document.getElementById("nmr_validos").value);

  var totalVotos = brancos + nulos + validos;

  var pctgBrancos = (100 * brancos) / habitantes;

  var pctgNulos = (100 * nulos) / habitantes;

  var pctgValidos = (100 * validos) / habitantes;

  if (totalVotos > habitantes) {
    return alert("Os Números não estão batendo Bebê");
  } else {
    document.getElementById("pctg_brancos").innerHTML =
      pctgBrancos.toFixed(2) + "%";
    document.getElementById("pctg_nulos").innerHTML =
      pctgNulos.toFixed(2) + "%";
    document.getElementById("pctg_validos").innerHTML =
      pctgValidos.toFixed(2) + "%";
  }
}
