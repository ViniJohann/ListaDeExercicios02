const prompt = require('prompt-sync')();

/*
1. Escreva um programa para calcular a redução do tempo de vida de um fumante.
Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de
vida um fumante perderá e exiba o total em dias.
*/

let vidaPerdida = (maços, anos) => {
    let totalCigarros = (maços * (anos * 365))
    let tempoPerdido = parseFloat(((totalCigarros * 10) / 60) / 24)

    return tempoPerdido.toFixed(2)
}

let cigarrosFumados = parseFloat(prompt("Quantos maços de cigarro você fuma por dia?: "))
let anosFumando = parseInt(prompt("Há quantos anos você fuma?: "))

console.log(vidaPerdida(cigarrosFumados, anosFumando)+" Dias perdidos");


/*
2. Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km/h, 
exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba o valor da multa, 
cobrando R$ 5,00 por cada Km acima da velocidade permitida.
*/

let velocidade = prompt("Qual a velocidade do carro?: ")
if(velocidade > 80){
    let acimaLimite = velocidade - 80
    let multa = parseFloat(5 * acimaLimite)
    console.log("Você foi multado!\nValor da Multa: R$"+multa)
}

/*
3. Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em
Km. Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e
R$ 0.45 para viagens mais longas.
*/
let distancia = prompt("Qual distancia deseja percorrer?: ")
let valorPassagem

if(distancia <= 200 && distancia > 0){
    valorPassagem = parseFloat(distancia * 0.5)
}else if(distancia > 200){
    valorPassagem = parseFloat(distancia * 0.45)
}else{
    console.log("Valor informado deve ser maior que 0!")
}
console.log("Valor da passagem: R$"+valorPassagem)

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

//

/// sa