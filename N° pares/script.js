let numero1 = Number(prompt("Insira o primeiro número:"));
let numero2 = Number(prompt("Insira o segundo número:"));
let mensagem = " ";

let inicio = Math.min(numero1,numero2);
let fim = Math.max(numero2,numero1);

for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
        mensagem += `${i} `;
    }
}

alert(`Os números pares são: ${mensagem}`);