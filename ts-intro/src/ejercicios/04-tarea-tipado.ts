

//console.log('Hola Mundo!');

/*
    ===== Código de TypeScript =====
*/
interface SuperHeroe {
    nombre: string;
    edad: number;
    direccion: SuperDireccion;
    mostrarDireccion: () => string;
}

interface SuperDireccion {
    calle: string;
    pais: string;
    ciudad: string;
}

const superHeroe = {
    nombre: 'Spiderman',
    edad: 30,
    direccion: {
        calle: 'Main St',
        pais: 'USA',
        ciudad: 'NY'
    },
    mostrarDireccion(){
        return this.nombre + ' ' + this.direccion.ciudad + ' ' + this.direccion.pais;
    }
}

const direccion = superHeroe.mostrarDireccion();

console.log(direccion);
