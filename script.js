// Evento que detecta cuando se hace clic en el botón de modo oscuro
document.getElementById("modoOscuro").addEventListener("click", function () {
    document.body.classList.toggle("oscuro");

    // Guardar la preferencia del usuario en el almacenamiento del navegador
    if (document.body.classList.contains("oscuro")) {
        localStorage.setItem("modo", "oscuro");
    } else {
        localStorage.setItem("modo", "claro");
    }
});

// Aplicar el modo guardado al recargar la página
if (localStorage.getItem("modo") === "oscuro") {
    document.body.classList.add("oscuro");
}

// Capturar el formulario y agregar evento al botón "Enviar"
document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue
    
    // Mostrar mensaje de confirmación
    document.getElementById("mensajeConfirmacion").style.display = "block";

    // Limpiar el formulario
    document.getElementById("formulario").reset();
});
