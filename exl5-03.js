const prompt = require('prompt-sync')();

var valueX = Number(prompt('Qual o valor de X ? '));

var numberOne = 0
var numberTwo = 1

while(numberOne + numberTwo !== valueX){
    numberOne = Number(prompt('Qual o primeiro número ? '))
    numberTwo = Number(prompt('Qual o segundo número ? '))
}