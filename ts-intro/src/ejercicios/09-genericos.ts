/**
 * 
 * 
 * 
 */

function queTipoSoy<T>(argumento: T){
    return argumento;
}

let soyString = queTipoSoy('Hola Mundo');
let soyNumero = queTipoSoy(10);

let soyExplicito = queTipoSoy<number>(5);