// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
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
