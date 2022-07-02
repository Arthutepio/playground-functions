// Desafio 11
function generatePhoneNumber(array) {
 //verifica se o array tem 11 digitos
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  //verifica se array tem 3 numeros iguais
  for (let index of array) {
    let numerosIguais = 0;
    for (let index2 of array) {
      if (index === index2) {
        numerosIguais += 1;
      }
    }
    
    //verifica se os números do array estão entre 0 e 9
    if (index < 0 || index > 9 || numerosIguais > 2) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  // traz os numeros do array no formato desejado
  return '(' + array[0] + '' + array[1] + ')' + ' ' + array[2] + '' + array[3] + '' + array[4] + '' + array[5] + '' + array[6] + '-' + array[7] + '' + array[8] + '' + array[9] + '' + array[10] + '';

}
generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]);



//Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if (lineA < (lineB  + lineC) && lineA > (Math.abs(lineB - lineC))) {
    return true;
  } else {
    return false;
  }
}
console.log(triangleCheck(10, 14, 8));
// Desafio 13
function hydrate(string) {
  let regExp = /\d+/g;
  let stringNumber = string.match(regExp);
  let array = [];
  let resultado = 0;

  for (let index in stringNumber) {
    array.push(parseInt(stringNumber[index]));
    resultado += array[index];
  }

  if (resultado > 1) {
    return resultado + ' copos de água';
  }else if (resultado === 1){
    return resultado + " copo de água";
  }
}


console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
module.exports = {
  generatePhoneNumber,
  hydrate,
  triangleCheck,
};
