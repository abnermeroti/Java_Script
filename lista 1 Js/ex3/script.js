/*3.	A empresa Hipotheticus paga R$10,00 por hora normal trabalhada, e R$15,00 por hora extra. Faça um algoritmo para calcular e imprimir o salário bruto e o salário líquido de um determinado funcionário. Considere que o salário líquido é igual ao salário bruto descontando-se 10% de impostos*/

let hrNor = prompt("qunatas hrs normal voce trabalhou este mes: ")
let hrEx = prompt("quantas hrs extras voce fez este mes: ")
let slB = (hrNor*10)+(hrEx*15)
let slL = slB*0.9

alert("seu salario bruto: " + slB + "seu salario liquido: " + slL)