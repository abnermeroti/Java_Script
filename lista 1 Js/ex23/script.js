/*23.	Faça um algoritmo que receba o ano de nascimento de uma pessoa e o ano atual, calcule e mostre:
a.	a idade dessa pessoa em anos;
b.	a idade dessa pessoa em meses; 
c.	a idade dessa pessoa em dias
d.	a idade dessa pessoa em semanas. */

let nas = Number(prompt("qual ano voce nasceu? "))
let ano = Number(prompt("digite o ano atual: "))

let idade = ano - nas
let idade_m = idade*12
let idade_d = idade_m * 30
let idade_s = idade_d / 7

alert("voce tem "+idade+" anos de vida")
alert("voce tem "+idade_m+" meses de vida")
alert("voce tem "+idade_d+" dias de vida")
alert("voce tem "+idade_s+" semanas de vida")
