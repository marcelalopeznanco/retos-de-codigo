//Contar vocales
//constante contar vocales ya dada en el ejercicio
const countVowels = (str) => {
    // se declara la variable vocales para "aeiou"
    const vowels = 'aeiou';

    // se declara la variable let para que el contador comience en 0
    let counter = 0;

    // para esto se crea un for donde contenga la variable let 
    //que diga que (i=0) donde i va a ser menor a la longitud del texto de la variable inicial (str) 
    // y que i se recorra 1 por 1 (letra por letra)
    for (let i = 0; i < str.length; i += 1) {

        // se vuelve a crear otro for donde contiene una variable let 
        // que dice que m=0 y m es menor al conteo de las vocales una por una
        for (let m = 0; m < vowels.length; m += 1) {
            // si str que es la palabra inicial (i) es igual a vocales(m) 
            if (str[i] === vowels[m]) {
                // entonces ira uno por uno
                counter += 1;
            }
        }
    }
    // y si no es asi retornara al contador
    return counter;

};

module.exports = countVowels;