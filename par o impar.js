//Función par / impar
//se crea una constante ya dada en el ejercicio
const evenOrOdd = (n) => {
    // si n residuo 2 es igual a 0
    if (n % 2 === 0) {
        // retorna 0
        return 0;
        //de lo contrario que retorne 1
    } else {
        return 1;
    }

};

module.exports = evenOrOdd;