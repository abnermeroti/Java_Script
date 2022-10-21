/*8.	Num dia de sol, você deseja medir a altura de um prédio, porém, a trena não é suficientemente longa. Assumindo que seja possível medir sua sombra e a do prédio no chão, e que você lembre da sua altura, faça um algoritmo para ler os dados necessários e calcular a altura do prédio. */

let alt_Ps = Number.parseFloat(prompt("qual sua altura: "))
let somb_Ps = Number.parseFloat(prompt("qual o tamanho da sua sombra: "))
let somb_Pr = Number.parseFloat(prompt("qual o tamanho da sombra do predio: "))
let tam_Pr = Number.parseFloat((somb_Pr*alt_Ps) / somb_Ps)

alert("o predio tera " + tam_Pr + "m de altura")