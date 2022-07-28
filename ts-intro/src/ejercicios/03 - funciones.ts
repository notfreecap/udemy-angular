

function sumar(a: number, b: number): number{
    return a + b;
}

const sumarArrow = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base:number = 2): number {
    return numero * base;
}

const resultado = sumar(1, 1);
const resultado2 = sumarArrow(1, 1);
const resultado3: number = multiplicar(5);

/*-----------------------------------------*/
interface personajeLOR {
    nombre: string;
    hp: number;
    mostrarHp: () => void;
}

function curar(personaje: personajeLOR, curarX: number): void{
    personaje.hp += curarX;
    console.table(personaje);
}

const nuevoPersonaje: personajeLOR = {
    nombre: 'Strider',
    hp: 1,
    mostrarHp() {
        console.log("Puntos de vida", this.hp)
    }
}

curar(nuevoPersonaje, 8);