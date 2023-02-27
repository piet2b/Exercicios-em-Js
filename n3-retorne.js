//  Retorne o valor da soma de todos múltiplos de "A" até o seu limite "N".

var a = parseInt(gets());
var N = parseInt(gets());

let soma = 0

for (i = a; i <= N; i++) {
  if (i % a === 0) {
    soma += i
  }
}
print(soma)
