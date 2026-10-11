// Crea una lista de clientes morosos (cuántos días llevan sin pagar):
//  const diasRetraso = [5, 45, 12, 60, 2, 90];
//Usa .filter() para crear un nuevo array llamado clientesCriticos.
//La regla es: Solo los clientes que tengan un retraso mayor a 30 días deben pasar el filtro.
//Imprime tu array clientesCriticos.
const diasRetraso = [5,45,12,60,2,90];
const clientesCriticos = diasRetraso.filter( (retraso ) =>{
    return retraso > 30;
})
console.log(clientesCriticos);
console.log("El total de clientes críticos es: " + clientesCriticos.length);