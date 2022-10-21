/*1.A lanchonete Gostosura vende apenas um tipo de sanduíche, cujo recheio inclui duas fatias de queijo, uma fatia de presunto e uma rodela de hambúrguer. Sabendo que cada fatia de queijo ou presunto pesa 50 gramas, e que a rodela de hamburguer pesa 100 gramas, faça um algoritmo em que o dono forneça a quantidade de sanduiches a fazer, e a máquina informe as quantidades (em quilos) de queijo, presunto e carne necessários para compra. */

const queijo = 0.05
const presunto = 0.05
const carne = 0.1
let hamb = prompt("quantos hamburguer voce quer? ")
alert("sera necessario" + queijo*2*hamb + "Kg de queijo, " + presunto*hamb + "kg de presunto e" + carne*hamb + "Kg de carne")
