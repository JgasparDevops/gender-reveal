document.addEventListener('DOMContentLoaded', () => {
  const sonido = document.getElementById('sonido');

  function playSound() {
      sonido.play().catch(error => {
          console.error('Error al reproducir el sonido:', error);
      });
  }

  function pauseSound() {
      sonido.pause();
  }

  function stopSound() {
      sonido.pause();
      sonido.currentTime = 0; // Reinicia el audio al principio
  }

  // Agrega los métodos a la ventana global para que puedan ser llamados desde los botones
  window.playSound = playSound;
  window.pauseSound = pauseSound;
  window.stopSound = stopSound;


   // Función para obtener los parámetros de la URL
  function obtenerParametroURL(nombre) {
    let url = window.location.href;
    nombre = nombre.replace(/[\[\]]/g, '\\$&');
    let regex = new RegExp('[?&]' + nombre + '(=([^&#]*)|&|#|$)');
    let resultados = regex.exec(url);
    if (!resultados) return null;
    if (!resultados[2]) return '';
    return decodeURIComponent(resultados[2].replace(/\+/g, ' '));
  }

  // Obtener el valor del parámetro 'texto' de la URL
  let textoParametro = obtenerParametroURL('to');
  let sexParametro = obtenerParametroURL('s');
  let botonTexto = document.getElementById('boton-texto');
  // Si el parámetro existe, cambiar el texto del botón
  if (textoParametro) {
        
        botonTexto.textContent = sexParametro == 'm' ? `Bienvenido ${textoParametro}`: sexParametro == 'f' ? `Bienvenida ${textoParametro}` : `Bienvenid@ ${textoParametro}`;
  }else{
    botonTexto.textContent = 'Bienvenido'
  }

});

function showSecondPage(){
  playSound()
  const first = document.getElementById('first-page');
  first.style.display = 'none';
  const second = document.getElementById('second-page');
  second.style.display = 'inline';


} 
