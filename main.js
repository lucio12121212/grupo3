class Tarjeta {
    constructor(titulo, img, texto) {
        this.titulo = titulo;
        this.img = img;
        this.texto = texto;
    }
}
let arreglo = [
    new Tarjeta("odio programar", "descarga.png", "hasta que anda el codigo"),
    new Tarjeta("odio python", "python.jpg", "hasta que ana"),
    new Tarjeta("odio javascript", "js.png", "hasta que anda"),
    new Tarjeta("odio programar", "descarga.png", "hasta que anda el codigo"),
    new Tarjeta("odio python", "python.jpg", "hasta que ana"),
    new Tarjeta("odio javascript", "js.png", "hasta que anda"),
    new Tarjeta("odio programar", "descarga.png", "hasta que anda el codigo"),
    new Tarjeta("odio python", "python.jpg", "hasta que ana"),
    new Tarjeta("odio javascript", "js.png", "hasta que anda")
]
let arregloCards =[...arreglo]
const contenedorTarjetas = document.getElementById("contenedor-cards")
function crearCard() {
    if (contenedorTarjetas.innerHTML !== "") {
        contenedorTarjetas.innerHTML = ""
    }else if(arregloCards.length === 0){
        arregloCards =[...arreglo]

    }
    arregloCards.forEach(x => {
        // Crear columna responsive
        const col = document.createElement('div');
        col.className = 'col-md-4';

        // Crear la tarjeta con clases Bootstrap
        const card = document.createElement('div');
        card.className = 'card h-100 shadow-sm';

        // Imagen 
        const img = document.createElement('img');
        img.src = x.img;
        img.className = 'card-img-top';
        img.alt = 'Imagen';
        img.style.width= "350px"
        img.style.height= "200px"
        // cuerpo 
        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        // título
        const title = document.createElement('h5');
        title.className = 'card-title';
        title.textContent = x.titulo;
        // texto
        const text = document.createElement('p');
        text.className = 'card-text';
        text.textContent = x.texto;
        //boton
        const btn = document.createElement('a');
        btn.className = 'btn btn-danger';
        btn.addEventListener("click", function () {
            borrar(x)
        })
        const icono = document.createElement("i")
        icono.className = "bi bi-trash-fill"

        cardBody.appendChild(title);
        cardBody.appendChild(text);
        btn.appendChild(icono)
        cardBody.appendChild(btn);
        card.appendChild(img);
        card.appendChild(cardBody);
        col.appendChild(card);
        contenedorTarjetas.appendChild(col);
    })


}
function borrar(x) {
    console.log("se ha borraodo la card", x)
    arregloCards.splice(arregloCards.findIndex(tarjeta => tarjeta === x), 1)
    crearCard()
}
const body = document.getElementById("cuerpo")
body.className = 'bg-secondary'