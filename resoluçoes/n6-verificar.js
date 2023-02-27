
// Imprima se os valores numéricos passados são iguais ou não.

let A = gets();
let B = gets();

function verificarNums(a, b) {
  if (a === b) {
    return 'Sao iguais!'
  }
  else {
    return 'Nao sao iguais!'
  }
}

print (verificarNums(A, B))
