/*Faça um algoritmo que receba o peso de uma pessoa, calcule e mostre: 
a.	o novo peso se a pessoa engordar 15% sobre o peso digitado;
b.	o novo peso se a pessoa emagrecer 20% sobre o peso digitado.*/

let peso = Number(prompt("qual o seu peso em Kg: "))

let eng = peso + (peso*0.15)
let emag = peso - (peso*0.2)

alert("este sera seu peso caso engorde 15% "+ eng + " e este sera seu peso caso emagreca 20%: "+emag)