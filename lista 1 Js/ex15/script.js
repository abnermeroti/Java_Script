/*	Um funcionário recebe um salário fixo mais 4% de comissão sobre as vendas. Faça um algoritmo que receba o salário fixo de um funcionário e o valor de suas vendas, calcule e mostre a comissão e o salário final do funcionário*/

let sl = Number(prompt("qual o salario: "))
let vendas = Number(prompt("qual o valor de vendas: "))

let sf = sl + (vendas*0.04)

alert("o salario final sera: "+sf)

