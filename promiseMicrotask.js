// Diferenças de prioridade na execução de Microtask e Macrotask
console.log('microtask p1')//1º entrar na pilha
// Macrotask
setTimeout(()=>console.log('p2'), 0)
//Microtask são executadas imediatamente após a fila
Promise.resolve()
  .then(console.log('p3'))//2º entrar na pilha
// Macrotask
setTimeout(()=>console.log('p4'), 0)
//Microtask são executadas imediatamente após a fila
Promise.resolve()
  .then(console.log('p5'))//3º entrar na pilha
Promise.resolve()
    .then(setTimeout(()=>console.log('p6'), 0))//Ultimo da pilha
/*
Retorno:
microtask p1
p3
p5
p2
p4
p6
*/
// Verificamos aqui que microtasks sempre terá prioridade na fila em relação a
// macrotasks
