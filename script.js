function calcular() {
  const horasInput = document.getElementById("horasIniciais");
  const horasValor = horasInput.value;
  if (horasValor > 0) {
    const resultado = horasValor * 1.1429;
    const hora = (resultado / 60).toFixed(2);
    const mostrarResultado = document.getElementById("resultadoHoras");
    mostrarResultado.innerHTML =
      "O resultado é de " + hora + " horas noturnas.";
  } else {
    const mostrarResultado = document.getElementById("resultadoHoras");
    mostrarResultado.innerHTML = "Você deve inserir um número maior do que 0";
  }
}

function somar() {
  const valorInicial = document.getElementById("valor");
  const valor = valorInicial.value;
  if (valor > 0) {
    const valorMinuto = valor / 60;
    const horasSomar = document.getElementById("horas");
    const horaValor = horasSomar.value;
    if (horaValor > 0) {
      const resultado = valorMinuto * horaValor * 0.2;
      const resultadoArredondado = resultado.toFixed(2);
      const demonstrarResultado = document.getElementById("resultadoValor");
      demonstrarResultado.innerHTML =
        "O valor total das horas noturnas é de R$" + resultadoArredondado;
    } else {
      const demonstrarResultado = document.getElementById("resultadoValor");
      demonstrarResultado.innerHTML =
        "Você deve inserir um número maior do que 0";
    }
  } else {
    const demonstrarResultado = document.getElementById("resultadoValor");
    demonstrarResultado.innerHTML =
      "Você deve inserir um número maior do que 0";
  }
}