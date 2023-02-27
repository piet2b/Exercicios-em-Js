/*  Calcule a média de um aluno e sua classificação
    Classificação:
    1 - média menor que 5, reprovação
    2 - média entre 5 e 7, recuperação
    3 - média maior que 7, aprovado
    Formula de média simples
*/

const nota1 = 2;
const nota2 = 5;
const nota3 = 7;

const media = (nota1 + nota2 + nota3) / 3;
console.log(media.toFixed(1));

if (media < 5) {
  console.log('reprovado');
} else if (media >= 5 && media <= 7) {
  console.log('recuperaçao');
} else {
  console.log('aprovado');
}
