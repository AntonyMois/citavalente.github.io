// Función para reproducir el audio
function playAudio() {
    const audio = document.getElementById('audio');
    audio.play().then(() => {
        console.log('Audio reproducido correctamente.');
    }).catch(error => {
        console.error('Error al reproducir el audio:', error);
    });
}

// Función para mostrar una pantalla específica y ocultar las demás
function showScreen(screenId) {
    // Oculta todas las pantallas
    document.querySelectorAll('.screen').forEach(screen => {
        screen.style.display = 'none';
    });

    // Muestra la pantalla solicitada
    document.getElementById(screenId).style.display = 'flex';
}

// Muestra la pantalla inicial al cargar la página
showScreen('screen-start');