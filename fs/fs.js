const fs = require ('fs')

// console.log(fs);



// LEER ARCHIVO .TXT QUE ESTA EN MI DIRECTORIO

const prog = fs.readFileSync('./programa.txt', 'utf-8');   //lee el archivo y lo muestra en la consola, con utf-8 se muestra el texto sin codificar
console.log(prog);

//AGREGAR NUEVA LINEA AL TEXTO TXT (5. SQL) POR EJEMPLO

const nuevaLinea = fs.appendFileSync('./programa.txt', '5. SQL');   //agrega una nueva linea al final del texto, sin borrar lo que ya estaba

// LUEGO DE AGREGAR, VUELVO A LEER EL ARCHIVO PARA VER LOS CAMBIOS

console.log(fs.readFileSync('./programa.txt', 'utf-8'));