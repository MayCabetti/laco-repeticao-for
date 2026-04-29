let numero = Number(prompt("Qual tabuada vc deseja ver?"));
let mensagem = "";

for (let i = 1; i<= 10; i++) {
    let tabuada = i * numero;
    mensagem += `${numero} x ${i} = ${tabuada}\n`;
}

alert(mensagem);