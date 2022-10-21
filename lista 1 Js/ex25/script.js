/*25.	Faça um algoritmo que receba o valor dos catetos de um triângulo, calcule e mostre o valor da hipotenusa*/

let cat1 = prompt("qual o tamanho do cateto adjacente: ")
let cat2 = prompt("qual o tamanho do cateto oposto: ")

let hip = Math.sqrt(Math.pow(cat1,2) + Math.pow(cat2,2))  

alert("a hipotenusa desses dois catetos sera: "+hip)
