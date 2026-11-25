const invertirTexto = (palabra) => {
    let textoInvertido = "";
    for (let i=palabra.length -1; i>=0; i--){
        textoInvertido = textoInvertido + palabra[i];
    }
    return textoInvertido;
}
console.log(invertirTexto("jordan"));
console.log( invertirTexto("servidor") ); 