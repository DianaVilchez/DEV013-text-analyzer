import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

// evento reset-button
document.addEventListener("DOMContentLoaded", function() {
  const textarea = document.querySelector('[name="user-input"]');
  const resetboton = document.getElementById("reset-button");

  resetboton.addEventListener("click", function () {
    textarea.value = " ";
  });

});

// QUE LA INFORMACION ESTE EN LA CONSOLA/CONSOLE
// document.addEventListener("DOMContentLoaded", function () {
//   const textarea = document.querySelector('[name="user-input"]');
//   const contadorPalabras = document.querySelector('.metrica[data-testid="word-count"]')

//   textarea.addEventListener("input", function (e) {
//     console.log(e.target.value)
//   })
// });

// CONTEO DE PALABRAS
// Obtener referencia al área de texto y al elemento de conteo
const inputTextarea = document.querySelector('[name="user-input"]');
const contadorPalabras = document.querySelector('.metrica[data-testid="word-count"]');

// Agregar un evento de entrada al área de texto
inputTextarea.addEventListener("input", function () {
  // Obtener el valor del texto ingresado
  const textoIngresado = inputTextarea.value;

  // Obtener el número de palabras y actualizar el contador(no olvidar el analyzer.)
  const numeroPalabras = analyzer.getWordCount(textoIngresado);
  contadorPalabras.textContent = 'Recuento de palabras:' + numeroPalabras; /*otra forma es con ${numeroPalabras}*/
});

// CONTEO DE CARACTERES
const contadorCaracteres = document.querySelector('.metrica[data-testid="character-count"]');

inputTextarea.addEventListener("input", function () {
  const textoIngresado = inputTextarea.value;

  const Caracteres = analyzer.getCharacterCount(textoIngresado);
  contadorCaracteres.textContent = 'Caracteres:' + Caracteres;
});
// CARACTERES SIN ESPACIOS,SIN SIGNOS DE PUNTUACION
const contadorCaracteresSin = document.querySelector('.metrica[data-testid="character-no-spaces-coun"]');

inputTextarea.addEventListener("input", function () {
  const textoIngresado = inputTextarea.value;

  const CaracteresSin = analyzer.getCharacterCountExcludingSpaces(textoIngresado);
  contadorCaracteresSin.textContent = 'Caracteres excluyendo espacios y signos de puntuación:' + CaracteresSin;
});
// //  CANT DE NUMEROS
const contadorcantNumeros = document.querySelector('.metrica[data-testid="number-count"]')

inputTextarea.addEventListener("input", function () {
  const textoIngresado = inputTextarea.value;

  const CantNumeros = analyzer.getNumberCount(textoIngresado);
  contadorcantNumeros.textContent = 'Números:' + CantNumeros;
});

// LONGITUD MEDIA DE PALABRAS
const Longitudmedia = document.querySelector('.metrica[data-testid="word-length-average"]')

inputTextarea.addEventListener("input", function () {
  const textoIngresado = inputTextarea.value;
  
  const PromedioPalabras = analyzer.getAverageWordLength(textoIngresado);
  Longitudmedia.textContent = 'Promedio de longitud de palabra:' + PromedioPalabras;
});

// SUMA DE NUMEROS

const Sumanumeros = document.querySelector('.metrica[data-testid="number-sum"]')

inputTextarea.addEventListener("input", function () {
  const textoIngresado = inputTextarea.value;
  
  const SumadeNumeros = analyzer.getNumberSum(textoIngresado);
  Sumanumeros.textContent = 'Suma de números:' + SumadeNumeros;
});




    



   






































/*
  document.addEventListener('DOMContentLoaded', function () {
    var textarea = document.getElementsByName('cuadro')[0];
    var resetButton = document.getElementById('reset-button');
  
    resetButton.addEventListener('click', function () {
      // Limpiar el contenido del textarea
      textarea.value = '';
    });
  });
  */