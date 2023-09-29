// Puedes agregar cualquier código JavaScript adicional que necesites aquí.
function mostrarHorarioLocal() {
    const fechaActual = new Date();
    const opciones = { hour: 'numeric', minute: 'numeric', second: 'numeric' };

    // Obtener la zona horaria del navegador del usuario
    const zonaHoraria = Intl.DateTimeFormat().resolvedOptions().timeZone;

    // Obtener la hora local según la zona horaria del usuario
    const horaLocal = fechaActual.toLocaleTimeString('es-ES', opciones);

    // Mostrar la hora local en la página
    document.getElementById('hora-local').textContent = `Hora en ${zonaHoraria}: ${horaLocal}`;
}

// Actualizar el horario local cada segundo
setInterval(mostrarHorarioLocal, 1000);

// Mostrar el horario local al cargar la página
mostrarHorarioLocal();


// Obtiene una referencia al botón por su ID
const botonIrAInicio = document.getElementById("botonIrAInicio");

// Agrega un oyente de eventos para el clic en el botón
botonIrAInicio.addEventListener("click", function() {
     // Redirige a la página "index.html"
     window.location.href = "index.html";
    // Aquí puedes agregar la acción que deseas realizar al hacer clic en el botón
    // Por ejemplo, redirigir a la página de inicio o desplazarse hasta la parte superior de la página
    // Puedes usar window.location.href = "tu_pagina_de_inicio.html"; para redirigir o window.scrollTo(0, 0); para desplazarte arriba.
});
