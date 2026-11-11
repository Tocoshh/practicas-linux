//Crea un nuevo archivo llamado carrito.js.
//Imagina que estás armando tu PC y tienes una lista con los precios de los componentes
 //(procesador Ryzen, RAM, placa, etc.): const preciosPC = [607, 120, 250, 90];
//Usa .reduce() para sumar todo y guardarlo en una constante llamada totalPagar.
//Imprime totalPagar. (Debería salirte 1067).
const preciosPC = [607,120,250,100];
const totalPagar = preciosPC.reduce( (acumulador,precio)=>{
    return acumulador + precio;
}, 0);
console.log(totalPagar);