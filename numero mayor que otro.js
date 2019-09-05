//Número mayor que otro
// se declara una constante  donde se indica los valores de A, B y C
const max = (A = 10, B = 30, C = 5) => {
    //si A es mayor que B
    if (A > B)
    // y si A es mayor que C
        if (A > C)
        //Retorna A (porque es mayor que B y C)
            return A;

        //si B es mayor que A
    if (B > A)
    // y B es mayor que C
        if (B > C)
        //Retorna B (porque es mayor que A y C)
            return B;

        // de lo contrario si no es ninguna de las anteriores por descarte retorna C porque es el de menor valor 
        else {
            return C;
        }
};

module.exports = max;