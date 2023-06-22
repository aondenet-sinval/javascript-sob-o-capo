function multiply (x, y) {
    return x * y
}
function printSquare (x) {//passo 2 definição de printSquare
    const s = multiply(x, x)//aqui multiply vai ao topo da pilha
    console.log(s)//passo 3 execução
    // passo 4 console.log() removido
}
printSquare(3)//passo 1 chamada de função/passo 5 retorno
