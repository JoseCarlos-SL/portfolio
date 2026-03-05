function adicionar(valor) {
  const display = document.getElementById("display");
  display.value += valor;
}

function limpar() {
  document.getElementById("display").value = "";
}

function calcular() {
  const display = document.getElementById("display");
  display.value = eval(display.value);
}

document.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        calcular(); 
    }
});

function adicionarNumero(num) {
    if (calculoFinalizado) {
        display.value = ""; // Limpa o display
        calculoFinalizado = false; // Reseta o estado
    }
    display.value += num;
}