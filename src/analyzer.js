const analyzer = {  
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const palabras = text.split(/\s+/);      /*split: divide un objeto de tipo String en un array, en este caso split(separador)  /\s+/:encuentra todos los espacios*/
    const palabrasFiltradas = palabras.filter(palabra => palabra !== '');
    return palabrasFiltradas.length;         /* length:length de un objeto String representa la longitud de una cadena*/

    
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const caracteres = text.trim();    /*trim:elimina los espacio de adelante y atras*/
    return caracteres.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const caracteresexcluidos = text.trim().replace(/\W/g,'').length;         /*/\W/g:esta expresion regular obtiene signos de puntuacion(menos _)*/
    return caracteresexcluidos;                                               /*replace: reemplaza una concidencia por un valor(concidencia, valor al cual cambiará)*/
  },
  getAverageWordLength: (text) => {    
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    
    const cantDeCaracteres = text.replace(/\s/g, "").length;
    const cantPalabras = analyzer.getWordCount(text); /*para llamar a otra funcion, en este caso debe ir primero analyzer.*/

    const promedioPalabras = parseFloat((cantDeCaracteres / cantPalabras).toFixed(2)) ;  /*.toFixed(2)..(numero): este metodo sirve para que solo aparezcan 2 decimales*/
                                                                                          
    return promedioPalabras;                                                            /*parseFloat: aqui se utiliza para convertir la cadena a un número decimal*/

  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    // 
    const cantnumeros = text.match(/\b\d+(\.\d+)?\b/g);  /* match:especifica la coincidencia de una expresión regular con una cadena*/
    const contadorNumeros = cantnumeros ? cantnumeros.length : 0;      /*?: operador condicional*/

    return contadorNumeros; 
    
    // const soloNumeros = text.replace(/\D/g, ''); // \D coincide con caracteres que no son dígitos 
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const cantNumeros = text.match(/\b\d+(\.\d+)?\b/g);

    // Verifica si hay números
    if (!cantNumeros) {
    
      return 0;
    }
  
    // Inicia la suma
    let sumaNumeros = 0;
  
    // Itera sobre cada número y agrégalo a la suma            /* i++: aumenta uno c/u */
    for (let i = 0; i < cantNumeros.length; i++) {             /*i=0,1,2  i=0,1,2 < 1,2,3 (es un ejemplo)*/
      
      sumaNumeros += parseFloat(cantNumeros[i]);              /*parseFloat: usamos esto por que queremos que tambien validen los decimales*/
    }

    sumaNumeros = parseFloat(sumaNumeros.toFixed(2));
  
    // console.log('Suma de números:', sumaNumeros);
  
    return sumaNumeros;
  
  },
};

export default analyzer;
