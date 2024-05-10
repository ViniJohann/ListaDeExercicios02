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

console.log(verificarTriangulo(2, 2, 2))