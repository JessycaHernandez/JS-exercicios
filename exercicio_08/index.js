function calcular() {
  var escolhaCombustivel = document.getElementById("combustivel").value;
  var quantidadeLitros = Number(document.getElementById("litros").value);
  var vlGasolina = quantidadeLitros * 3.3;
  var vlAlcool = quantidadeLitros * 2.9;

  console.log(escolhaCombustivel, quantidadeLitros);

  if (vlGasolina <= 0)
    return alert(
      "Ta me zuando? Quer me roubar é? Não vendemos números negativos!"
    );
  else {
    if (vlAlcool <= 0)
      return alert(
        "Ta me zuando? Quer me roubar é? Não vendemos números negativos!"
      );
    else {
      if (escolhaCombustivel === "gasolina" && quantidadeLitros <= 20)
        return (document.getElementById("resultado").innerHTML =
          "O valor total é de " +
          vlGasolina.toFixed(2) +
          "  o desconto ficou de " +
          ((4 * vlGasolina) / 100).toFixed(2) +
          ". O valor a ser pago é de: " +
          (vlGasolina - (4 * vlGasolina) / 100).toFixed(2) +
          " reais. ");
      else {
        if (escolhaCombustivel === "gasolina" && quantidadeLitros > 20)
          return (document.getElementById("resultado").innerHTML =
            "O valor total é de " +
            vlGasolina.toFixed(2) +
            "  o desconto ficou de " +
            ((6 * vlGasolina) / 100).toFixed(2) +
            ". O valor a ser pago é de: " +
            (vlGasolina - (6 * vlGasolina) / 100).toFixed(2) +
            " reais. ");
        else {
          if (escolhaCombustivel === "alcool" && quantidadeLitros <= 20)
            return (document.getElementById("resultado").innerHTML =
              "O valor total é de " +
              vlAlcool.toFixed(2) +
              "  o desconto ficou de " +
              ((3 * vlAlcool) / 100).toFixed(2) +
              ". O valor a ser pago é de: " +
              (vlAlcool - (3 * vlAlcool) / 100).toFixed(2) +
              " reais. ");
          else {
            if (escolhaCombustivel === "alcool" && quantidadeLitros > 20)
              return (document.getElementById("resultado").innerHTML =
                "O valor total é de " +
                vlAlcool.toFixed(2) +
                "  o desconto ficou de " +
                ((5 * vlAlcool) / 100).toFixed(2) +
                ". O valor a ser pago é de: " +
                (vlAlcool - (5 * vlAlcool) / 100).toFixed(2) +
                " reais. ");
            else {
              if (
                escolhaCombustivel != "gasolina" &&
                escolhaCombustivel != "alcool"
              )
                return alert("Não vendemos COMBUSTIVEL ADULTERADO NÃO!!!");
              else {
                ("");
              }
            }
          }
        }
      }
    }
  }
}
