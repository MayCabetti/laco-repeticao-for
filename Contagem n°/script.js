let numeroEscolhido = Number(prompt("Insira um número qualquer:"));
let mensagem = " ";


for (let contador = 1; contador <= numeroEscolhido; contador++) {
    mensagem = `${mensagem} ${contador}`;
}

alert(mensagem);