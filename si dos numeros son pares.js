//Determinar si 2 números son pares
// se crea una constante para en y m ya dada en el ejercicio
const areOdd = (n, m) => {
    // si n residuo de 2 es igual a 0 && m residuo de 2 es igual a 0
    if (n % 2 === 0 && m % 2 === 0) {
        //Retorna verdadero porque las dos son iguales al mismo valor 
        return true;
        // de lo contrario qe resorne falso (todo lo contrario)
    } else {
        return false;
    }

};

module.exports = areOdd;