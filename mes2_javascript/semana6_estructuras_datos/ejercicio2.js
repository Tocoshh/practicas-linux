//Imagina que eres profesor en la UTP y quieres saber cuántos alumnos aprobaron el curso de Estadística.
const contarAprobados = (notas) => {
    let aprobados = 0;
    for (let i= 0; i<notas.length; i++){
        if (notas[i] >= 11){
            aprobados++;

        }
    }
    return aprobados;
}
const notasClase = [15, 8, 11, 18, 9, 14, 10];
console.log( contarAprobados(notasClase) );