// Función para mostrar juegos filtrados por nombre
function mostrarJuegosPorNombre(nombre) 
{
    const container = document.getElementById("juegos-container"); // Contenedor para almacenar los juegos
    container.innerHTML = ""; // Vacio los juegos para poner los juegos del filtro

    // Filtro por nombre (case-insensitive)
    const juegosFiltrados = juegos.filter(juego =>
        juego.nombre.toLowerCase().includes( nombre.toLowerCase() ) // Comparo lo escrito con los nombres de los juegos (todo en minuscula)
    );

    // Renderizo los juegos filtrados
    juegosFiltrados.forEach(juego => {

        // Creo el HTML de la tarjeta
        const card = `
            <div class="col-6 col-md-4 col-lg-3 text-center juego-card">
                <a href="juegos/${juego.link}.html">
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

    document.getElementById("pagination").innerHTML = ""; // Limpio la paginación
}


// Función para mostrar juegos filtrados por precio
function mostrarJuegosPorPrecio(precioMin, precioMax) 
{
    const container = document.getElementById("juegos-container");
    container.innerHTML = "";

    // Filtro por rango de precio
    const juegosFiltrados = juegos.filter(juego => {
        return (
            (precioMin === "" || juego.precio >= parseInt(precioMin)) &&
            (precioMax === "" || juego.precio <= parseInt(precioMax))
        );
    });

    // Renderizo los juegos filtrados
    juegosFiltrados.forEach(juego => {
        const card = `
            <div class="col-6 col-md-4 col-lg-3 text-center juego-card">
                <a href="juegos/${juego.link}.html">
                    <span>${juego.nombre} - $${juego.precio}</span>
                    <img 
                        src="images/juegos/${juego.img_1}" 
                        class="img-uniform border border-dark border-1"
                    >
                </a>
            </div>
        `;
        container.innerHTML += card;
    });

    document.getElementById("pagination").innerHTML = "";
}


// Función para ordenar juegos por precio
function ordenarJuegosPorPrecio(ordenamiento) 
{
    const container = document.getElementById("juegos-container");
    container.innerHTML = "";

    // Copio el arreglo y lo ordeno
    const juegosOrdenados = [...juegos].sort((a, b) => {
        if (ordenamiento === "asc") return a.precio - b.precio;
        if (ordenamiento === "desc") return b.precio - a.precio;
        return 0;
    });

    // Renderizo los juegos ordenados
    juegosOrdenados.forEach(juego => {
        const card = `
            <div class="col-6 col-md-4 col-lg-3 text-center juego-card">
                <a href="producto.html?juego=${juego.link}">
                    <span>${juego.nombre} - $${juego.precio}</span>
                    <img 
                        src="images/juegos/${juego.img_1}" 
                        class="img-uniform border border-dark border-1"
                    >
                </a>
            </div>
        `;
        container.innerHTML += card;
    });

    document.getElementById("pagination").innerHTML = ""; // Oculto paginación
}


// Función para ordenar juegos por duración
function ordenarJuegosPorDuracion(ordenamiento) 
{
    const container = document.getElementById("juegos-container");
    container.innerHTML = "";

    // Copio el arreglo y lo ordeno
    const juegosOrdenados = [...juegos].sort((a, b) => {
        if (ordenamiento === "asc") return a.duracionPartida - b.duracionPartida;
        if (ordenamiento === "desc") return b.duracionPartida - a.duracionPartida;
        return 0;
    });

    // Renderizo los juegos ordenados
    juegosOrdenados.forEach(juego => {
        const card = `
            <div class="col-6 col-md-4 col-lg-3 text-center juego-card">
                <a href="producto.html?juego=${juego.link}">
                    <span>${juego.nombre} - ${juego.duracionPartida} min</span>
                    <img 
                        src="images/juegos/${juego.img_1}" 
                        class="img-uniform border border-dark border-1"
                    >
                </a>
            </div>
        `;
        container.innerHTML += card;
    });

    document.getElementById("pagination").innerHTML = ""; // Oculto paginación
}


// Función para ordenar juegos por complejidad
function ordenarJuegosPorComplejidad(ordenamiento) 
{
    const container = document.getElementById("juegos-container");
    container.innerHTML = "";

    const juegosOrdenados = [...juegos].sort((a, b) => {
        if (ordenamiento === "asc") return a.complejidad - b.complejidad;
        if (ordenamiento === "desc") return b.complejidad - a.complejidad;
        return 0;
    });

    juegosOrdenados.forEach(juego => {
        const card = `
            <div class="col-6 col-md-4 col-lg-3 text-center juego-card">
                <a href="producto.html?juego=${juego.link}">
                    <span>${juego.nombre} - Complejidad ${juego.complejidad}/5</span>
                    <img 
                        src="images/juegos/${juego.img_1}" 
                        class="img-uniform border border-dark border-1"
                    >
                </a>
            </div>
        `;
        container.innerHTML += card;
    });

    document.getElementById("pagination").innerHTML = ""; // Oculto paginación
}
