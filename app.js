// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

//funcion agregar amigo
function agregarAmigo(){
    const inputAmigo = document.getElementById('amigo');
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
function actualizarLista() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""; 

    for(let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

//funcion para sortear los amigos
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Necesitas al menos dos amigos para hacer un sorteo.");
        return;
    }

    const indiceRandom = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceRandom];

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo sorteado es: ${amigoSorteado}</li>`;
}