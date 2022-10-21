/*6.	A fábrica de refrigerantes Meia-Cola vende seu produto em três formatos: lata de 350 ml, garrafa de 600 ml e garrafa de 2 litros. Se um comerciante compra uma determinada quantidade de cada formato, faça um algoritmo para calcular quantos litros de refrigerante ele comprou. */

let qnt1 = prompt("quantas lata de 350ml foram compradas: ")
let qnt2 = prompt("quantas garrafas de 600ml foram compradas: ")
let qnt3 = prompt("quantas garrafas de 2 litros foram compradas: ")

let qntL = (qnt1*0.350)+(qnt2 * 0.600)+(qnt3*2)

alert("o comerciante comprou "+ qntL + " litros de refrigerante")
