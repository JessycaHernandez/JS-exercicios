function calcularComissao() {
  var salario = Number(document.getElementById("vl_salario").value);

  var valorVenda = Number(document.getElementById("vl_venda").value);

  var valorComissao = "";

  if (valorVenda < 1501)
    return (document.getElementById("salario").innerHTML = valorComissao =
      (3 * valorVenda) / 100 + salario);
  else {
    return (document.getElementById("salario").innerHTML = valorComissao =
      (8 * valorVenda) / 100 + salario);
  }
}
