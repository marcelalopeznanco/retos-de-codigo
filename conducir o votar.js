//Conducir y votar 
//Se declara una constante ya dada en el ejercicio
const canDriveAndVote = (edad) => {
    //si la edad es mayor o igual a 16 && la edad es mayor o igual a 18
    if (edad >= 16 && edad >= 18) {
        //retorna verdadero, osea que si es mayor a 16 puede conducir y si es mayor a 18 puede votar
        return true;
        // de lo contrario retorna falso, no puede ni conducir ni votar
    } else {
        return false;
    }




};

module.exports = canDriveAndVote;