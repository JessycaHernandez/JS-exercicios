function calcular() {
  var produto = document.getElementById("nome_produto").value;
  var quantidade = Number(document.getElementById("qt_produto").value);
  var valor = Number(document.getElementById("valor_produto").value);

  var valorCalculado = quantidade * valor;

  var descontoP = (2 * valorCalculado) / 100;
  var descontoM = (3 * valorCalculado) / 100;
  var descontoG = (5 * valorCalculado) / 100;

  if (quantidade <= 5)
    return (
      (document.getElementById("total_pagar").innerHTML =
        valorCalculado.toFixed(2)),
      (document.getElementById("desconto").innerHTML = descontoP.toFixed(2)),
      (document.getElementById("total_pagar_desconto").innerHTML =
        valorCalculado - descontoP)
    );
  else {
    if (quantidade > 5 && quantidade <= 10)
      return (
        (document.getElementById("total_pagar").innerHTML =
          valorCalculado.toFixed(2)),
        (document.getElementById("desconto").innerHTML = descontoM.toFixed(2)),
        (document.getElementById("total_pagar_desconto").innerHTML =
          valorCalculado - descontoM)
      );
    else {
      return (
        (document.getElementById("total_pagar").innerHTML =
          valorCalculado.toFixed(2)),
        (document.getElementById("desconto").innerHTML = descontoG.toFixed(2)),
        (document.getElementById("total_pagar_desconto").innerHTML =
          valorCalculado - descontoG)
      );
    }
  }
}
