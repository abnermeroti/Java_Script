/*4.	A granja Frangotech possui um controle automatizado de cada frango da sua produção. No pé direito do frango há um anel com um chip de identificação; no pé esquerdo são dois anéis para indicar o tipo de alimento que ele deve consumir. Sabendo que o anel com chip custa R$4,00 e o anel de alimento custa R$3,50, faça um algoritmo para calcular o gasto total da granja para marcar todos os seus frangos. */

let qnt = prompt("quantos frango tem na granja: ")
let gasto = (qnt*4) + (qnt*3.5*2)

alert("voce tera R$" + gasto + " de gasto em chip")