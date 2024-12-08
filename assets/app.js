

const obrasCard = document.getElementById("obras");
const randomPage = Math.floor(Math.random() * 10) + 1;

fetch(`https://api.artic.edu/api/v1/artworks?page=${randomPage}`)
  .then(response => response.json())
  .then(data => {
    let TodosLosCuadros = `<div class="obras">`;
    const cuadros = data.data;
    for(let i =0; i<cuadros.length; i++){
        
        const imageId = cuadros[i].image_id;
        cuadroHtml =`
        <obra class="obra">
            <h3 class="obra__titulo" slot="title">${cuadros[i].title}</h3>
            <img class="obra__imagen" slot="imagen" src="https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg" alt="obra de arte" ></slot>
            <cite class="obra__autor" slot="autor">${cuadros[i].artist_title}</cite>
            <p class="obra__descripcion" slot="description">Descripción: ${cuadros[i].thumbnail ? cuadros[i].thumbnail.alt_text : "Sin descripción"}</p>
        </obra>`;
        // cuadroHtml =`
        // <div class="obra">
        //     <h2 class="obra__titulo">${cuadros[i].title}</h2>
        //     <img src="https://www.artic.edu/iiif/2/${imageId}/full/843,/0/default.jpg" alt="obra de arte" class="obra__imagen">
        //     <span slot="price">${cuadros[i].artist_title}</span>
        //     <p class="obra__descripcion">Descripción: ${cuadros[i].thumbnail ? cuadros[i].thumbnail.alt_text : "Sin descripción"}</p>
        // </div>`;
        TodosLosCuadros += cuadroHtml;
    }
    TodosLosCuadros += `</div>`;
    obrasCard.innerHTML = TodosLosCuadros;
    // let obra = data.data[i].image_id;
    // const artwork = data.data[0]; // Primera obra
    const imageId = artwork.image_id;
   
  })
  .catch(error => console.error("Error:", error));




// Replicar el template
class ProductCard extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('elTemplate');
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.appendChild(template.content.cloneNode(true));
         // Crear un enlace al archivo CSS
         const link = document.createElement('link');
         link.rel = 'stylesheet';
         link.href = 'assets/style.css';  // Ruta a tu archivo CSS
 
         // Añadir el enlace al shadowRoot
         shadowRoot.appendChild(link);

        // Add random image
        // const image = shadowRoot.querySelector('.product-image');
        // image.src = `https://picsum.photos/200/150?random=${Math.random()}`; 

        
    }
}

customElements.define('obra', ProductCard); 