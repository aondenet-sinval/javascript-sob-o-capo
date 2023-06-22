// Sequencia da execução
console.log('Node.js')//função chamada, execução 1 =>'Node.js', saída da pilha
setTimeout(()=> {
  console.log(' awesome!')
}, 5000)//função chamada, timer agenda execução 3, saída da pilha
console.log(' is')//função chamada, execução 2 => ' is', saída da pilha
// Fim do timer e execução => ' awesome!' saída da pilha
