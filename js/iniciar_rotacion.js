imagenes = new Array (
    'imagenes/flor1.jpg',
    'imagenes/flor3.jpg',
    'imagenes/flor4.jpg',
    'imagenes/flor7.jpg',
	'imagenes/flor8.jpg',
	'imagenes/flor28.jpg',
    'imagenes/flor36.jpg');

// Tiempo de espera entre imagenes (en segundos)
espera = 5;

// Referencia a la imagen actual
imagen_actual = 0;



function cambiar_imagen ()
{
    elemento_img = document.getElementsByName('imagen_principal')[0];

    elemento_img.src = imagenes[imagen_actual++];

    if (imagen_actual >= imagenes.length)
        imagen_actual = 0;

    // Llamar esta misma funcion cada cierto tiempo
    self.setTimeout ('cambiar_imagen()', espera * 1000);
}


function iniciar_rotacion ()
{
    var aux, i, pos;


    // Mover aleatoriamente las imagenes en el array. No es un
    // algoritmo muy bueno, pero es suficiente para cosas simples.
    for (i = 0; i < imagenes.length; i++) {
        // Elegir una posicion pseudo-aleatoria en el array
        pos = Math.floor (Math.random () * imagenes.length);

        // Intercambiar la posicion actual con 'pos'
        if (pos != i) {
            aux = imagenes[i];
            imagenes[i] = imagenes[pos];
            imagenes[pos] = aux;
        }
    }

    // Cambiar la imagen por primera vez
    cambiar_imagen ();
}
