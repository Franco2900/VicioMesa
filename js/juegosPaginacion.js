// Variables globales
const juegosPorPagina = 12;
let paginaActual = 1;


function mostrarJuegos(pagina) 
{
    const container = document.getElementById("juegos-container"); // Contenedor para almacenar los juegos
    container.innerHTML = ""; // Vacio los juegos de la página anterior para poner los juegos de la página actual

    const inicio = (pagina - 1) * juegosPorPagina;  // Calculo posicion inicial del nuevo arreglo
    const fin = inicio + juegosPorPagina;           // Calculo posicion final del nuevo arreglo
    const juegosPagina = juegos.slice(inicio, fin); // Nuevo arreglo con los juegos a mostrar en la página actual 

    // Para cada nuevo juego del nuevo arreglo
    juegosPagina.forEach(juego => {

        // Creo el HTML de la tarjeta
        const card = `
            <div class="col-6 col-md-4 col-lg-3 text-center juego-card">
                <a href="producto.html?juego=${juego.link}">
                    <span>${juego.nombre}</span>
                    <img 
                        src="images/juegos/${juego.img_1}" 
                        class="img-uniform border border-dark border-1"
                    >
                </a>
            </div>
        `;

        // Agrego el HTML a la vista
        container.innerHTML += card;
    });

    actualizarPaginacion();
}


function actualizarPaginacion() 
{
    const totalPaginas = Math.ceil(juegos.length / juegosPorPagina); // Calculo cantidad total de juegos
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    // Para cada una de las páginas
    for (let i = 1; i <= totalPaginas; i++) 
    {
        const btn = document.createElement("button"); // Creo un boton
        btn.textContent = i; // Contenido del boton es el número de página

        if (i === paginaActual) btn.classList.add("active"); // Marco el botón de la página actual

        btn.addEventListener("click", () => { // Añado evento de click a cada boton
            paginaActual = i;                 // Actualizo cual es la página actual al hacer clic en el boton
            mostrarJuegos(paginaActual);      // Muestro juegos de la página actual
        });

        pagination.appendChild(btn);
    }
}