//Ejercicio 3: El Promedio de la UTP (Acumular y calcular)
const calcularPromedio = (notas) => {
    let sumaTotal = 0;
    for (let i=0; i< notas.length; i++){
        sumaTotal = sumaTotal + notas[i];
    }
    sumaTotal = sumaTotal / notas.length;
    return sumaTotal;
}
const misNotas = [12,14,16];
console.log(calcularPromedio(misNotas));
