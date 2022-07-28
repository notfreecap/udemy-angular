

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anio: number;
}

const reproductor : Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'Mess',
    detalles: {
        autor: 'Ed Sheeran',
        anio: 2015
    }
}

const {volumen, segundo, cancion, detalles:{autor}} = reproductor;

console.log("dato: ", volumen);
console.log("dato: ", segundo);
console.log("dato: ", cancion);
console.log("dato: ", autor);

/*----------------------------------------------------*/

const dbz: string[] = ['Goku', 'Vegeta', 'Trunx'];

const [p1, p2, p3] = dbz;

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);