// Desafio 1
function compareTrue(paramet1, paramet2) {
  let result;
  if (paramet1 === true && paramet2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}
// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(parametro) {
  let string = parametro;
  return string.split(' ');
}
console.log(splitSentence('go trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));
// Desafio 4

function concatName(nome) {
  let conatenacao = nome[nome.length - 1] + ', ' + nome[0];
  return conatenacao;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));
// Desafio 5
function footballPoints(wins, ties) {
  let vitorias = wins * 3;
  let empates = ties * 1;
  let totaoDePontos = vitorias + empates;
  return totaoDePontos;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
// Desafio 6
function highestCount(array) {
  let maiorNum = null;
  for(let index of array) {
    if (maiorNum === null) {
     maiorNum = index;
    } else if (index > maiorNum) {
      maiorNum = index;
    }
  }
  let repetNum = 0;
  for(let index = 0; index < array.length; index += 1) {
    if (maiorNum === array[index]) {
      repetNum += 1;
    }
  }
  return repetNum;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let rato = mouse;
  let gato1 = cat1;
  let gato2 = cat2;
  if ((Math.abs(rato - gato1)) < (Math.abs(rato - gato2))) {
    return 'cat1';
  } else if ((Math.abs(rato - gato1)) === (Math.abs(rato - gato2))){
    return 'os gatos trombam e o rato foge';
  } else {
    return 'cat2';
  }

}
console.log(catAndMouse(1, 3, 2));
console.log(catAndMouse(1, 6, 12));
console.log(catAndMouse(1, 6, 6));
// Desafio 8
function fizzBuzz(numeros) {
  let array = numeros;
  let resultado = [];
  for (let index of array){
    if (index % 3 === 0 && index % 5 === 0){
      resultado.push('fizzBuzz');
    }else if (index % 3 === 0 && index % 5 !== 0){
      resultado.push('fizz');
    }else if (index % 5 === 0 && index % 3 !== 0){
      resultado.push('buzz');
    }else {
      resultado.push('bug!')
    }
  }
  return resultado;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));
// Desafio 9
function encode(text) {
  let codifica = text.replace(/a/g, "1").replace(/e/g, "2").replace(/i/g, "3").replace(/o/g, "4").replace(/u/g, "5");
  return codifica;
}
console.log(encode('hello'));
console.log(encode('How are you today?'));
console.log(encode('This is an encoding test'));
console.log(encode('go Trybe!'));
function decode(text2) {
  let decodifica = text2.replace(/1/g, "a").replace(/2/g, "e").replace(/3/g, "i").replace(/4/g, "o").replace(/5/g, "u");
  return decodifica; 
}
console.log(encode('h2ll4'));
console.log(encode('H4w 1r2 yo5 tod1y?'));
console.log(encode('Th3s is 1n 2nc4ding t2st'));
console.log(encode('g4 Tryb2!'));
// Desafio 10
function techList(array, string) {
  listaArray = array.sort();
  let listaNova = [];
  if(array.length === 0){
return 'Vazio!';
  }else {
  for (let index in listaArray){
   listaNova.push({tech: listaArray[index], name: string}); 
}
return listaNova;
}
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
console.log();
