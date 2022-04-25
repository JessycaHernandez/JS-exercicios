function calcular() {
  var frutaEscolhida = document.getElementById("fruta").value;
  var quantidadeQuilos = Number(document.getElementById("quilos").value);
  var vlMorangos = quantidadeQuilos * 2.5;
  var vlMorangosDoisDescontos = vlMorangos - (12 * vlMorangos) / 100;
  var vlMacas = quantidadeQuilos * 1.8;
  var vlMacasDoisDescontos = vlMacas - (16.67 * vlMacas) / 100;

  if (quantidadeQuilos <= 0)
    return alert(
      "Trapaceiro, ladrão aqui não tem vez, Igão, chama a galera, vamos dar uma surra nele!"
    );
  else {
    if (
      frutaEscolhida != "morango" &&
      frutaEscolhida != "maça" &&
      frutaEscolhida != "Morango" &&
      frutaEscolhida != "Maça" &&
      frutaEscolhida != "morangos" &&
      frutaEscolhida != "maças" &&
      frutaEscolhida != "Morangos" &&
      frutaEscolhida != "Maças"
    )
      return alert("Ops, aparentemente não tenho essa fruta hoje");
    else {
      if (
        (frutaEscolhida === "morango" ||
          frutaEscolhida === "Morango" ||
          frutaEscolhida === "Morangos" ||
          frutaEscolhida === "morangos") &&
        quantidadeQuilos <= 5
      )
        return (document.getElementById("resultado").innerHTML =
          "O valor dos " + quantidadeQuilos + " Quilos é de: " + vlMorangos);
      else {
        if (
          (frutaEscolhida === "morango" ||
            frutaEscolhida === "Morango" ||
            frutaEscolhida === "morangos" ||
            frutaEscolhida === "Morangos") &&
          quantidadeQuilos > 5 &&
          quantidadeQuilos < 8
        )
          return (document.getElementById("resultado").innerHTML =
            "O valor dos " +
            quantidadeQuilos +
            " Quilos é de: " +
            vlMorangos.toFixed(2) +
            " Reais. Com o desconto de " +
            ((12 * vlMorangos) / 100).toFixed(2) +
            " fica, apenas " +
            (vlMorangos - (12 * vlMorangos) / 100).toFixed(2));
        else {
          if (
            ((frutaEscolhida === "morango" ||
              frutaEscolhida === "Morango" ||
              frutaEscolhida === "morangos" ||
              frutaEscolhida === "Morangos") &&
              quantidadeQuilos > 8) ||
            vlMorangosDoisDescontos > 25
          )
            return (document.getElementById("resultado").innerHTML =
              "O valor dos " +
              quantidadeQuilos +
              " Quilos é de: " +
              vlMorangos.toFixed(2) +
              " Reais. Com o desconto de " +
              ((12 * vlMorangos) / 100).toFixed(2) +
              " fica, apenas " +
              (vlMorangos - (12 * vlMorangos) / 100).toFixed(2) +
              " Somado com os 10% de desconto, por passarem de 8kg, fica apenas " +
              (vlMorangosDoisDescontos - (10 * vlMorangosDoisDescontos) / 100));
          else {
            if (
              (frutaEscolhida === "maça" ||
                frutaEscolhida === "Maça" ||
                frutaEscolhida === "maças" ||
                frutaEscolhida === "Maças") &&
              quantidadeQuilos <= 5
            )
              return (document.getElementById("resultado").innerHTML =
                "O valor dos " + quantidadeQuilos + " Quilos é de: " + vlMacas);
            else {
              if (
                (frutaEscolhida === "maça" ||
                  frutaEscolhida === "Maça" ||
                  frutaEscolhida === "maças" ||
                  frutaEscolhida === "Maças") &&
                quantidadeQuilos > 5 &&
                quantidadeQuilos <= 8
              )
                return (document.getElementById("resultado").innerHTML =
                  "O valor dos " +
                  quantidadeQuilos +
                  " Quilos é de: " +
                  vlMacas.toFixed(2) +
                  " Reais. Com o desconto de " +
                  ((16.67 * vlMacas) / 100).toFixed(2) +
                  " fica, apenas " +
                  (vlMacas - (16.67 * vlMacas) / 100).toFixed(2));
              else {
                if (
                  ((frutaEscolhida === "maça" ||
                    frutaEscolhida === "Maça" ||
                    frutaEscolhida === "maças" ||
                    frutaEscolhida === "Maças") &&
                    quantidadeQuilos > 8) ||
                  vlMacasDoisDescontos > 25
                )
                  return (document.getElementById("resultado").innerHTML =
                    "O valor dos " +
                    quantidadeQuilos +
                    " Quilos é de: " +
                    vlMacas.toFixed(2) +
                    " Reais. Com o desconto de " +
                    ((16.67 * vlMacas) / 100).toFixed(2) +
                    " fica, apenas " +
                    (vlMacas - (16.67 * vlMacas) / 100).toFixed(2) +
                    " Somado com os 10% de desconto, por passarem de 8kg, fica apenas " +
                    (
                      vlMacasDoisDescontos -
                      (10 * vlMacasDoisDescontos) / 100
                    ).toFixed(2));
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
}
