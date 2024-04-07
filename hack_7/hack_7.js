/**
 * ["foo","bar","baz","qux","echo"] 
 * 
 * modificar a mayúscula el primer caracter de cada item string del array
 *  
 * 
 * output => ["Foo","Bar","Baz","Qux","Echo"]   
 */
let arr = ["foo","bar","baz","qux","echo"];
let result = [];

for (let i = 0; i < arr.length; i++) {
    let mayus = arr[i][0].toUpperCase();
    let rest = arr[i].slice(1);
    let newstring = mayus + rest;
    result.push(newstring);

//export result
module.exports = result;