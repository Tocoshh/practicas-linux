const servidorHP = {ip:"192.168.100.210", ram: 16, disco: "1TB"};
const servidorHP_Mejorado = {
    ...servidorHP,
    ram:32,
    procesador:"Ryzen 7",
};
console.log(servidorHP_Mejorado);