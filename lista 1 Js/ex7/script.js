/*7.	Pedrinho tem um cofrinho com muitas moedas, e deseja saber quantos reais conseguiu poupar. Faça um algoritmo para ler a quantidade de cada tipo de moeda, e imprimir o valor total economizado, em reais. Considere que existam moedas de 1, 5, 10, 25 e 50 centavos, e ainda moedas de 1 real. Não havendo moeda de um tipo, a quantidade respectiva é zero. */

let m1 = prompt("quantas moedas de 1 centavo voce tem: ")
let m5 = prompt("quantas moedas de 5 centavos voce tem: ")
let m10 = prompt("quantas moedas de 10 centavos voce tem: ")
let m25 = prompt("quantas moedas de 25 centavos voce tem: ")
let m50 = prompt("quantas moedas de 50 centavos voce tem: ")
let m100 = prompt("quantas moedas de 1 real voce tem: ")

let total = (m1*0.01)+(m5*0.05)+(m10*0.1)+(m25*0.25)+(m50*0.5)+(m100*1)

alert("pedrinho poupou R$" + total + "em moedas")