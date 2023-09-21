const prompt = require('prompt-sync')()

var number = Number(prompt('Digite um número: '));
var valueA = Number(prompt('Qual o valor A: '));
var valueB = Number(prompt('Qual o valor B: '));

var result = number + valueA + valueB

while(number !== 9999 && valueA !== 9999 && valueB !== 9999) {
     console.log(result)
}
