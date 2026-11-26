
const titulo = document.querySelector("#titulo_principal");
const estado = document.querySelector("#mensaje_estado");
const autor = document.querySelector("#autor");

titulo.textContent = "Servidor HP : En linea";
estado.textContent = "Conexion SHH Exitosa";
autor.textContent = "Desarrollado por: Jordan";

titulo.style.color = "#2ecc71";
estado.style.fontSize = "1.5rem";
autor.style.color ="#f1c40f";
//1. Tenemos nuestra lista de datos
const servicios = [
    "Base de Datos PostgreSQL (Docker)",
    "Servidor SSH Activo (Puerto 22)",
    "Node.js Runtime v22",
    "Api Backend Express",
];
//2. Atrapamos el contenedor donde queremos pegar las cosas
const listaContenedor = document.querySelector("lista_servicios");
//3. Recorremos la lista para fabricar un <li> por cada servicio
for (let i = 0; i< servicios.length;i++){
    const nuevoElemento = document.createElement("li");

    
    nuevoElemento.textContent = "✔ " + servicios[i];

    
    nuevoElemento.style.color = "#3498db"; // Azul
    nuevoElemento.style.margin = "10px 0";
    nuevoElemento.style.fontSize = "1.1rem";

    
    listaContenedor.appendChild(nuevoElemento);
}