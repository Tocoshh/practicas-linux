//Crea una función llamada encontrarMayor(numeros) que reciba un array de números.
//Dentro de la función, asume que el mayor es el primer número: let mayor = numeros[0];
//Recorre el array con un bucle for.
//Si en alguna vuelta encuentras un número que sea más grande que mayor, actualiza la variable mayor.
//Al final del bucle, retorna (return) el número mayor.
//Pruébalo: console.log( encontrarMayor([5, 14, 2, 99, 34]) ); (Debe imprimir 99).
const encontrarMayor = (numeros) => {
    let mayor = numeros[0];
    for (let i= 0; i<numeros.length; i++){
        if (numeros[i]> mayor){
            mayor = numeros[i];
        }
    }
    return mayor;
};
const listaPrueba = [12,15,46,89,3,69,2,19,14,26,33,700];
console.log(encontrarMayor(listaPrueba));