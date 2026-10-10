//Crea un array con temperaturas en grados Celsius: const gradosCelsius = [0, 15, 30, 40];
//Usa .map() para crear un nuevo array llamado gradosFahrenheit.
//La fórmula: Para convertir, multiplica el grado Celsius por 1.8 y súmale 32.
//Imprime tu nuevo array gradosFahrenheit. (Deberían salirte: 32, 59, 86, 104).
const gradosCelsius = [0,15,30,40];
const gradosFahrenheit = gradosCelsius.map( (celsius) =>{
    return (celsius *1.8)+32;
})
console.log(gradosFahrenheit);