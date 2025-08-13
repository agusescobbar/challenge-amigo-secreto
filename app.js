const { act } = require("react");

// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//funcion agregar amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById("Amigo");
    const nombreAmigo = inputAmigo.value.trim();


    if (nombreAmigo === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    } 

    if (amigos.includes(nombreAmigo)) {
        alert(`${nombreAmigo} ya está en la lista.`);
        return;
    }

    amigos.push(nombreAmigo);

    inputAmigo.value = ""; // Limpiar el campo de entrada

    actualizarLista();
}


// funcion para actualizar la lista de amigos


//funcion para sortear los amigos