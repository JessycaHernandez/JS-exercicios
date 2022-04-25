function pegarDados() {
  var anosPessoa = Number(document.getElementById("anos").value);

  var mesesPessoa = Number(document.getElementById("meses").value);

  var diasPessoa = Number(document.getElementById("dias").value);

  var anosTratado = anosPessoa * 365;

  var mesesTratado = mesesPessoa * 30;

  console.log(anosTratado, mesesTratado, diasPessoa);

  if (mesesPessoa > 12)
    return alert("Os meses são equivalentes a mais do que um ano.");
  else {
    if (diasPessoa > 30)
      return alert("Os dias são equivalentes a mais do que um mês.");
    else {
      return (document.getElementById("resultado").innerHTML =
        anosTratado + mesesTratado + diasPessoa);
    }
  }
}
