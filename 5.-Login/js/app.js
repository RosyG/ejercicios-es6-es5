// En este ejercicio deberas crear tu solción en ES5, asegurarte que funcione
/*
// declara el prompt
var password = prompt('Ingrese su contraseña');
//console.log(password);
user(password)
function user (pw) {
  var passwordSaved = 'Labo';
  if (passwordSaved === pw) {
    console.log('verdadero');
  }else if (password === '') {
    console.log('falso');
  }else {
    console.log('false-incorrecto');
  }
}//Fin de función user()
*/


// comenta todo lo anterior y escribelo en ES6
// declara el prompt
const password = prompt('Ingrese su contraseña');
//console.log(password);
let user = pw => {
  let passwordSaved = 'Labo';
  if (passwordSaved === pw) {
    console.log('verdadero');
  }else if (password === '') {
    console.log('falso');
  }else {
    console.log('false-incorrecto');
  }
}//Fin de función user()

//Mandando a llamar a la función user()
user(password);
