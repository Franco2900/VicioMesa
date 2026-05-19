async function cargarFragmentoHTML(id, file) 
{ 
    const res = await fetch(file);                            // Busco el archivo HTML
    document.getElementById(id).innerHTML = await res.text(); // Pongo el HTML en el div con ID

    // MEDIDA PARA EVITAR PONER LOS DATOS PERSONALES COMO TEXTO PLANO Y ASÍ EVITAR LOS BOTS QUE RECOLECTAN INFORMACIÓN AUTOMATICAMENTE
    // Después de cargar el HTML, actualizo los spans dinamicamente
    const emailSpans = document.querySelectorAll(".email");
    emailSpans.forEach(span => {
        if (!span.innerText) span.innerText = "emailDeEjemplo" + "@" + "gmail.com";
    });

    const telefonoSpans = document.querySelectorAll(".telefono");
    telefonoSpans.forEach(span => {
        if (!span.innerText) span.innerText = "(+54) " + "9 " + "11-" + "2356-" + "2146";
    });
    
    return Promise.resolve(); // para poder encadenar .then()
} 

// Cargo el layout
cargarFragmentoHTML("header",  "./partials/header.html"); 
cargarFragmentoHTML("navbar",  "./partials/navbar.html");
//cargarFragmentoHTML("fondo",   "./partials/fondo.html"); 
cargarFragmentoHTML("footer",  "./partials/footer.html");