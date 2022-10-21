/*9.	Um tonel de refresco é feito com 8 partes de água mineral e 2 partes de suco de maracujá. Faça um algoritmo para calcular quantos litros de água e de suco são necessários para se fazer X litros de refresco (informados pelo usuário). */

let qnt = prompt("quantos litros de refresco voce quer fazer: ")
let qnt_Ag = (qnt/10)*8
let qnt_Sc = (qnt/10)*2

alert(qnt_Ag + "litros de agua e "+ qnt_Sc +"litros de suco")