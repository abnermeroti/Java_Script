/*24.	João recebeu seu salário de R$ 1200,00 e precisa pagar duas contas (C1=R$ 200,00 e C2=R$120,00) que estão atrasadas. Como as contas estão atrasadas, João terá de pagar multa de 2% sobre cada conta. Faça um algoritmo que calcule e mostre quanto restará do salário do João */

let sl = 1200
let c1 = 200 + (200*0.02)
let c2 = 120 + (120*0.02)

let sobra = sl - (c1+c2)

alert ("joao tera R$"+sobra+" sobrando de seu salario")
