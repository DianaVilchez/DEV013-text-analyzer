const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(/\s+/);
    const palabrasFiltradas = palabras.filter(palabra => palabra !== '');
    return palabrasFiltradas.length;
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.trim();    /*trim:elimina los espacio de adelante y atras*/
    return caracteres.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresexcluidos = text.trim().replace(/\W/g,'').length;         /*/\W/g:esta expresion regular obtiene signos de puntuacion(menos _)*/
    return caracteresexcluidos;
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // SI POR EJEMPLO 90 SON 2 NUMEROS O UNO
    // const cantnumeros = text.replace(/[\D]+/g,'').length;   
    // Encontrar coincidencias de números en el texto
  const cantnumeros = text.match(/\d+/g);

  // Contar el número total de números encontrados
  const contadorNumeros = cantnumeros ? cantnumeros.length : 0;

  // Mostrar el resultado en la consola o en otro lugar según tus necesidades
  console.log('Números:', contadorNumeros);   
  return contadorNumeros;  
    
},
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    
  },
};

export default analyzer;
