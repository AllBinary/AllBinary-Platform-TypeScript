import { Integer } from '../lang/Integer';
//import Prando from 'prando';

export class Random {
    //private rng: Prando;

    constructor(seed: number) {
        //TWB - maybe better to use Prando PRNG project
        //this.rng = new Prando(seed);
    }

    public nextInt(): number {
        //const num: number = this.rng.next();
        let num: number = Math.random();
        return num * Integer.MAX_VALUE;
    }
}