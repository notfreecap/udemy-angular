/**
 * 
 * 
 */


class PersonaNormal {
    constructor(
        private nombre: string,
        private direccion: string
    ){}
}

class Herore extends PersonaNormal{
    /*private alterEgo: string;
    public edad: number;
    static nombreReal: string;*/

    constructor(
        private alterEgo: string,
        private edad: number,
        private nombreReal: string
    ){
        super(nombreReal, 'NEW YORK, USA');
    };
}

const ironman = new Herore('Ironman', 45, 'Tony Stark');

console.log(ironman);