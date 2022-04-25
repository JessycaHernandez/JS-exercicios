function pegarNotas() {
  var nota1 = Number(document.getElementById("nt_prova1").value);

  var nota2 = Number(document.getElementById("nt_prova2").value);

  var media = (nota1 + nota2) / 2;
  console.log(media);

  document.getElementById("media_notas").innerHTML = media;

  if (media > 5.99)
    return (document.getElementById("passou?").innerHTML = "Passou Desgrama");
  else {
    return (document.getElementById("passou?").innerHTML =
      "Passou nada, vai estudar, filho de uma bezerra!");
  }
}
