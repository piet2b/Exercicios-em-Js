/* Calcule o quanto deve ser pago segundo as opções a seguir:
  1 - DÉBITO - Desconto de 10% 
  2 - PIX - Desconto de 15%
  3 - DIVIDIDO 2X - Preço normal
  4 - DIVIDIDO + 2X - Juros de 10%
*/

function aplicarDesconto (valor, desconto){
return valor * desconto;
}

function aplicarJuros (valor, juros){
return valor * juros;
}

const preçoNormal = 355;
const opção = 2;

if (opção === 1){
    console.log(aplicarDesconto(preçoNormal , 0.9));
 }                                                          
 else if (opção === 2){
    console.log(aplicarDesconto(preçoNormal , 0.85));
 }
 else if (opção === 3){
     console.log(preçoNormal);
} else if (opção === 4){
     console.log(aplicarJuros(preçoNormal , 1.1));
}
