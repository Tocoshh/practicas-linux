const paciente = {
    nombre: "Juan",
    sangre: "B+",
    peso: 77,
    alergias: ["Pescado", "Sandia"],
};
const { sangre , alergias}  = paciente;
console.log("Tipo de sangre:" + sangre , "Tipo de alergias:" + alergias);