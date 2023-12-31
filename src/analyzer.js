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
    
    const cantDeCaracteres = text.replace(/\s/g, "").length;
    // const cantDeCaracteres = analyzer.getCharacterCountExcludingSpaces(text);  /*para llamar a otra funcion, en este caso debe ir primero analyzer.*/
    const cantPalabras = analyzer.getWordCount(text); /*para llamar a otra funcion, en este caso debe ir primero analyzer.*/

    const promedioPalabras = (cantDeCaracteres / cantPalabras).toFixed(2) ;  /*.toFixed(2)..(numero): este metodo sirve para que solo aparezcan 2 decimales*/

    // console.log('Promedio:',promedioPalabras);

    return promedioPalabras;

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // 
    const cantnumeros = text.match(/\b\d+(\.\d+)?\b/g);  /* match:especifica la coincidencia de una expresión regular con una cadena*/

    // Contar el número total de números encontrados
    const contadorNumeros = cantnumeros ? cantnumeros.length : 0;

    // console.log('Números:', contadorNumeros);   

    return contadorNumeros; 
    
    // const soloNumeros = text.replace(/\D/g, ''); // \D coincide con caracteres que no son dígitos
    
    // console.log(soloNumeros); // Esto mostrará "123"

    // Mostrar el resultado en la consola o en otro lugar según tus necesidades
    // console.log('Números:', contadorNumeros);   
    
    
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const cantNumeros = text.match(/\b\d+(\.\d+)?\b/g);

    // Verifica si hay números
    if (!cantNumeros) {
      // console.log('No se encontraron números.');
      return 0;
    }
  
    // Inicializa la suma
    let sumaNumeros = 0;
  
    // Itera sobre cada número y agrégalo a la suma
    for (let i = 0; i < cantNumeros.length; i++) {
      // Convierte cada número de cadena a flotante y suma
      sumaNumeros += parseFloat(cantNumeros[i]);
    }
  
    // Limita la suma a dos decimales
    sumaNumeros = parseFloat(sumaNumeros.toFixed(2));
  
    // console.log('Suma de números:', sumaNumeros);
  
    return sumaNumeros;
  
  },
};

export default analyzer;
