// Sequencia da execução
console.log('Eu sou ')
setTimeout(()=> {
  console.log(' o primeiro da fila ')
}, 30)//apos 30 ms é colocado na fila
setTimeout(()=> {
  console.log(' o segundo da fila ')
}, 10)//apos 10 ms é colocado na fila
console.log(' de espera!')
setTimeout(()=> {
  console.log(' o terceiro da fila ')
}, 10)//apos 10 ms é colocado na fila
