class Tarjeta{
    constructor(titulo, img, texto){
        this.titulo = titulo;
        this.img = img;
        this.texto = texto;
    }
}
let arregloCards = [
    new Tarjeta("odio programar","descarga.png","hasta que anda el codigo"),
    new Tarjeta("odio python","python.jpg","hasta que ana"),
    new Tarjeta("odio javascript","js.png","hasta que anda")
]
const contenedorTarjetas = document.getElementById("contenedor-cards")
function crearCard() {
    if(contenedorTarjetas.innerHTML !== ""){
        contenedorTarjetas.innerHTML =""
    }
    arregloCards.forEach(x=>{
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
      btn.className = 'btn btn-primary';
      btn.textContent = 'borrar';
        btn.addEventListener("click", function(){
            borrar(x)
        } )
      
      cardBody.appendChild(title);
      cardBody.appendChild(text);
      cardBody.appendChild(btn);

      card.appendChild(img);
      card.appendChild(cardBody);
      col.appendChild(card);
    contenedorTarjetas.appendChild(col);
    })
      
     
    }
    function borrar (x){
        console.log("se ha borraodo la card" , x)
    arregloCards.splice(arregloCards.findIndex(tarjeta=> tarjeta === x),1  )
    crearCard()
    }