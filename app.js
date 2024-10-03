alert('Boas vindas ao jogo do número secreto');
let limite = 100;
let numeroSecreto = parseInt( Math.random() * limite + 1 );
console.log (numeroSecreto);

//let chute = prompt('Escolha um número entre 1 e 10'); //sempre testar os ERROS
let chute;

//Quantidade de tentativas - inicia em 1
let tentativas = 1;

//Enquanto - Estrutura de Looping
while (chute != numeroSecreto) {
    chute = prompt(`Escolha um número entre 1 e ${limite}`);

    // If/else - Estrutura condicional
    if (chute == numeroSecreto) {
        break;

    } else {
        if (chute < numeroSecreto) {
            alert (`O número secreto é maior que ${chute}`);

        } else {
            alert (`O número secreto é menor que ${chute}`);
        }
        //Incremento: tentativas = tentativas + 1;
        tentativas ++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1) {
//    alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas.`);
//} else {
//    alert (`Isso aí! Você descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa.`);
//}

