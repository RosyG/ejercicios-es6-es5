                            // ES5

// declara la variable
var array = [10, 20, 30, 20, 30, 40, 60];

/*
// escribe tu funcion.
function computeSumOfAllElements (array) {
  var average = 0;
  for (var i = 0; i < array.length; i++) {
    average += array[i];
  }
  average = average/(array.length);
  var paintConsole = "El promedio de este arreglo es: " + average;
  console.log(paintConsole);
  return paintConsole
}
//Ejecutando función.
computeSumOfAllElements (array)
*/


                              //ES6
// Comenta todo lo anterior y escribelo en ES6

// escribe tu funcion.
let computeSumOfAllElements = array => {
  let average = 0;
  for (item of array) {
    average += item;
  }
  average = average/(array.length);
  return `El promedio de este arreglo es: ${average}.`

}
//Ejecutando función.
console.log(computeSumOfAllElements (array));
