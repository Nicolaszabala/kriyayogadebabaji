imagenes = new Array (
    'imagenes/badri1.jpg',
    'imagenes/badri2.jpg',
    'imagenes/badri3.jpg',
    'imagenes/badri4.jpg',
	'imagenes/badri5.jpg',
	'imagenes/badri6.jpg',
    'imagenes/badri7.jpg');

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
