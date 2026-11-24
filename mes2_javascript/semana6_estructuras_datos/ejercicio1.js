//Función: Llámala encontrarMenor.
//Lógica: Empiezas asumiendo que el menor es el primero: let menor = precios[0];.
//El if: En cada vuelta preguntas: "¿Es el precio actual (precios[i]) MENOR (<) que mi menor actual?".
//  Si sí, actualizas menor.
const encontrarMenor = (precios) =>{
    let menor = precios[0];
    for (let i=0; i<precios.length; i++){
        if(precios[i]< menor){
            menor = precios[0];
        }
    }
    return menor;
};
const preciosComponentes = [120, 45, 800, 30, 150];
console.log(encontrarMenor(preciosComponentes));