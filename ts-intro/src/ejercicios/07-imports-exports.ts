/**
 * 
 * ALELELELE!!!
 * 
 */

import { calculaISV, Producto } from "./06-desestructuracion-funcion";


const carritoCompras: Producto[] = [
    {
        desc: 'Telefono 1',
        precio: 100
    },
    {
        desc: 'Telefono 2',
        precio: 156
    }
];

const [total, iva] = calculaISV(carritoCompras);

console.log('Total: ', total);
console.log('Iva: ', iva);
