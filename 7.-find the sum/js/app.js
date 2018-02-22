                // ES5
/*
  function findPairForSum(array, number){
    var newArray = [];
  //En ese for
  for(var i=0; i<array.length;i++){
    for(var j=0;j<array.length; j++){
      var resultado =0;
      resultado= array[i]+array[j];//suma el elemento que se encuentra en la posición i y j del mismo array.
      if(resultado === number){
        newArray.push(array[i],array[j]);
        return newArray
      }
    }
  }

  }

  //Ejecutando función findPairForSum().
  var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  console.log (pair);
*/

                    // ES6

// Ahora comenta todo el código anterior y pasalo a ES6
let findPairForSum = (array, number) => {
  const newArray = [];
  //En ese for
  for (item1 of array) {
    for (item2 of array) {
      let resultado= item1+item2;
      if(resultado === number) {
        newArray.push(item1,item2);
        return newArray
      }
    }
  }
}

//Ejecutando función findPairForSum().
let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log (pair);
