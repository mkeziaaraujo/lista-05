const prompt =  require('prompt-sync')();

var valueN = Number(prompt('Qual o valor de N ? '));
var valueA = Number(prompt('Qual o valor de A ? '));
var valueB = Number(prompt('Qual o valor de B ? '));

var count = 0

for (index = 1; index <= valueN; index++){
    if(index % 2 !== 0) { 
    console.log(index);
    count = count + index;
    }
}

console.log(`A soma dos números ímpares é: ${count}`);

var countRangeAToB = 0

for(index = valueA; index <= valueB; index++){
    if(index % 2 !==0) {
        console.log(index);
        countRangeAToB = countRangeAToB + index
    }
}
console.log(`A soma dos números ímpares entre A e B é : ${countRangeAToB}`);