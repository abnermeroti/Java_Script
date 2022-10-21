/*22.	Faça um algoritmo que calcule e mostre a tabuada de um número digitado pelo usuário. */

let num = prompt("qual numero voce deseja saber a tabuada")
let aux = 0

for (let i=0; i<11; i++){
    aux = num*i
    alert(num + "*"+ i + " = "+aux)
}
