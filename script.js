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
