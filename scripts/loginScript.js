let usuarioInput = document.getElementById("input-usuario");
let contraInput = document.getElementById("input-contra");
let botonLogin = document.getElementById("boton-login");

function imprimirConsola() {
    console.log(usuarioInput.value);
    console.log(contraInput.value);
}

const escribiendoUsuario = () => console.log(usuarioInput.value);
const escribiendoContra = () => console.log(contraInput.value);
