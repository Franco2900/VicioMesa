async function cargarIdioma(lang) 
{
    try 
    {
        const res = await fetch(`./js/i18n/${lang}.json`); // Busco el .json con el lenguaje correspondiente
        const traducciones = await res.json();          // Obtengo su contenido

        // Para todas los elementos con el atributo data-i18n
        document.querySelectorAll("[data-i18n]").forEach(el => 
        {
            const clave = el.getAttribute("data-i18n"); // Obtengo el valor del atributo data-i18n
            if (traducciones[clave])  // Si tengo en mi json un elemento con el mismo valor que el atributo
            {
                if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") el.placeholder = traducciones[clave];
                else                                                     el.textContent = traducciones[clave];
            }
        });

        localStorage.setItem("idioma", lang); // Guardo preferencia de idioma
    } 
    catch (err) 
    {
        console.error("Error cargando idioma:", err);
    }
}

// Inicialización
document.addEventListener("DOMContentLoaded", () => 
{
    const idiomaGuardado = localStorage.getItem("idioma") || "es";
    cargarIdioma(idiomaGuardado);

    // Delegación de eventos: funciona aunque el select se regenere
    document.addEventListener("change", (e) => 
    {
        if (e.target && e.target.id === "idiomaSelect") cargarIdioma(e.target.value);
    });

    // MutationObserver: detecta cuando se inserta el select y lo inicializa
    const observer = new MutationObserver(() => 
    {
        const idiomaSelect = document.getElementById("idiomaSelect");
        
        if (idiomaSelect && !idiomaSelect.dataset.initialized) 
        {
            $('.selectpicker').selectpicker();
            idiomaSelect.dataset.initialized = "true"; // flag para no reinicializar infinitamente
            $('.selectpicker').selectpicker('val', idiomaGuardado);
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
});