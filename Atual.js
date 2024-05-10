const prompt = require('prompt-sync')();
/*
4. Crie um programa que leia o tamanho de três segmentos de reta. Analise seus
comprimentos e diga se é possível formar um triângulo com essas retas.
Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada
lado deve ser menor que a soma dos outros dois.
*/
let verificarTriangulo = (a, b, c) => {
    let triangulo = false
    if((a + b) > c && (a + c) > b && (b + c) > a)
        triangulo = true
    return triangulo
}

let ladoA = parseFloat(prompt("Digite o tamanho do lado A: "))
let ladoB = parseFloat(prompt("Digite o tamanho do lado A: "))
let ladoC = parseFloat(prompt("Digite o tamanho do lado A: "))

if(verificarTriangulo(ladoA, ladoB, ladoC))
    console.log("É possivel criar um triangulo com as medidas fornecidas")