function inicializarEventos() 
{
    mostrarJuegos(1); // Primera página de juegos

    const inputNombre    = document.getElementById("nombre");
    const inputPrecioMin = document.getElementById("precioMin");
    const inputPrecioMax = document.getElementById("precioMax");
    const resetBtn       = document.getElementById("resetFiltros");
    const ordenGeneral   = document.getElementById("ordenGeneral");

    // Evento para el filtro por nombre
    inputNombre.addEventListener("input", (e) => {
        const valor = e.target.value;

        if (valor.trim() === "") 
        {
            // Reactivo los filtros de precio si el buscador está vacío
            inputPrecioMin.disabled = false;
            inputPrecioMax.disabled = false;
            mostrarJuegos(paginaActual);
        } 
        else 
        {
            // Desactivo los filtros de precio
            inputPrecioMin.disabled = true;
            inputPrecioMax.disabled = true;
            mostrarJuegosPorNombre(valor);
        }
    });

    // Evento para los filtros de precio
    function aplicarFiltros() 
    {
        const precioMin = inputPrecioMin.value;
        const precioMax = inputPrecioMax.value;

        if (precioMin !== "" || precioMax !== "") {
            // Desactivo el buscador por nombre
            inputNombre.disabled = true;
            mostrarJuegosPorPrecio(precioMin, precioMax);
        } else {
            // Reactivo el buscador si no hay filtros de precio
            inputNombre.disabled = false;
            mostrarJuegos(paginaActual);
        }
    }

    inputPrecioMin.addEventListener("input", aplicarFiltros);
    inputPrecioMax.addEventListener("input", aplicarFiltros);

    // Evento para reiniciar filtros
    resetBtn.addEventListener("click", () => 
    {
        inputNombre.value = "";
        inputPrecioMin.value = "";
        inputPrecioMax.value = "";
        ordenGeneral.value = ""; // Reinicio el select

        inputNombre.disabled = false;
        inputPrecioMin.disabled = false;
        inputPrecioMax.disabled = false;

        mostrarJuegos(paginaActual); // Vuelvo a mostrar la lista normal
    });


    // Evento para ordenar los juegos
    ordenGeneral.addEventListener("change", (e) => 
    {
        const ordenamiento = e.target.value;

        if (ordenamiento) 
        {
            // Limpio y desactivo otros filtros
            inputNombre.value = "";
            inputPrecioMin.value = "";
            inputPrecioMax.value = "";

            inputNombre.disabled = true;
            inputPrecioMin.disabled = true;
            inputPrecioMax.disabled = true;

            // Decido qué ordenar
            if (ordenamiento === "precioAsc")    ordenarJuegosPorPrecio("asc");
            if (ordenamiento === "precioDesc")   ordenarJuegosPorPrecio("desc");
            if (ordenamiento === "duracionAsc")  ordenarJuegosPorDuracion("asc");
            if (ordenamiento === "duracionDesc") ordenarJuegosPorDuracion("desc");
            if (ordenamiento === "complejidadAsc") ordenarJuegosPorComplejidad("asc");
            if (ordenamiento === "complejidadDesc") ordenarJuegosPorComplejidad("desc");
        } 
        else 
        {
            // Si no hay orden, vuelvo a mostrar normal
            inputNombre.disabled = false;
            inputPrecioMin.disabled = false;
            inputPrecioMax.disabled = false;
            mostrarJuegos(paginaActual);
        }
    });
}
