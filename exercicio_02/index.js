function calcularPctg() {
  var vlSalario = Number(document.getElementById("salario").value);

  var pctgAumento = Number(document.getElementById("aumento").value);

  var calculoPctg = (pctgAumento * vlSalario) / 100 + vlSalario;
  console.log(calculoPctg);

  document.getElementById("total_aumento").innerHTML = calculoPctg.toFixed(2);
}
