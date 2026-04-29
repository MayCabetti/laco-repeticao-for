let soma = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`Digite o ${i}º número:`));
    soma = soma + numero;
}

alert(`A soma dos números é: ${soma}`);