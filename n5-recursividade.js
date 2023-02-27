// Implemente um método que calcule o somatório de um número usando recursividade:

let n = parseInt(gets());

let soma = 0

function somatorio(n){

for (let i = n; i >= 0; i--) {
    soma += i
  }
  print(soma)
}
somatorio(n)

