// Obtengo el parámetro de la URL (ejemplo: producto.html?juego=ajedrez)
const params = new URLSearchParams(window.location.search);
const juegoLink = params.get("juego");

// Busco el juego en el arreglo
const juego = juegos.find(j => j.link === juegoLink);

if (juego) {
    const container = document.getElementById("producto-container");

    // Armo dinámicamente las imágenes disponibles
    const imagenes = Object.keys(juego)
        .filter(key => key.startsWith("img_") && juego[key]) // solo las claves img_X que existan
        .map(key => `
            <div class="carousel-item ${key === "img_1" ? "active" : ""}">
                <img src="images/juegos/${juego[key]}" 
                     class="d-block w-100 img-fluid rounded border border-dark shadow-sm">
            </div>
        `)
        .join("");

    container.innerHTML = `
        <div class="card shadow-lg">
            <div class="card-header bg-dark text-white text-center">
                <h2 class="mb-0">${juego.nombre}</h2>
            </div>
            <div class="card-body">
                <div class="row">
                    
                    <!-- Carrusel de imágenes -->
                    <div class="col-md-6 text-center mb-3">
                        <div id="carouselJuego" class="carousel slide" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                ${imagenes}
                            </div>
                            <button class="carousel-control-prev" type="button" data-bs-target="#carouselJuego" data-bs-slide="prev">
                                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Anterior</span>
                            </button>
                            <button class="carousel-control-next" type="button" data-bs-target="#carouselJuego" data-bs-slide="next">
                                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                <span class="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                    </div>
                    
                    <!-- Información -->
                    <div class="col-md-6">
                        <p class="lead">${juego.descripcion}</p>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">
                                <strong>Jugadores:</strong> ${juego.jugadoresMinimos} - ${juego.jugadoresMaximos}
                            </li>
                            <li class="list-group-item">
                                <strong>Duración:</strong> ${juego.duracionPartida} minutos
                            </li>
                            <li class="list-group-item">
                                <strong>Complejidad:</strong> ${juego.complejidad}/5
                            </li>
                            <li class="list-group-item">
                                <strong>Precio:</strong> $${juego.precio}
                            </li>
                        </ul>
                        <div class="mt-3 text-center">
                            <a href="juegos.html" class="btn btn-outline-secondary btn-lg ms-2">
                                <i class="bi bi-arrow-left"></i> Volver
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
} else {
    document.getElementById("producto-container").innerHTML = `
        <div class="alert alert-danger text-center">
            <i class="bi bi-exclamation-triangle-fill"></i> Juego no encontrado
        </div>
    `;
}
