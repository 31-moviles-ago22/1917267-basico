let contador = 0;
let carritoContenido = document.getElementById("carritoContenido");
let carritoVacio = document.getElementById("carritoVacio");
let carritoContador = document.getElementById("carritoContador");

const actualizarContador = () => carritoContador.innerText = `${contador} elementos en el carrito`;

function agregarCarrito(producto) {
    contador++;
    carritoVacio.style.display = "none";

    let productoCarrito = document.createElement("div");
    productoCarrito.setAttribute("class", "productoCarrito");

    let name = document.createElement("h3");
    name.innerHTML = producto.name;
    productoCarrito.appendChild(name);

    let price = document.createElement("p");
    price.innerHTML = producto.price;
    productoCarrito.appendChild(price);

    let eliminar = document.createElement("button");
    eliminar.setAttribute("class", "eliminar");
    eliminar.innerHTML = "Eliminar";
    eliminar.addEventListener("click", quitarCarrito);
    productoCarrito.appendChild(eliminar);

    let img = document.createElement("img");
    img.setAttribute("src", `images/${producto.img}`);
    productoCarrito.appendChild(img);

    carritoContenido.appendChild(productoCarrito);
    actualizarContador();
}

function quitarCarrito() {
    contador--;
    if (contador == 0) {
        carritoVacio.style.display = "block";
    }
    this.parentNode.remove();
    actualizarContador();
}
