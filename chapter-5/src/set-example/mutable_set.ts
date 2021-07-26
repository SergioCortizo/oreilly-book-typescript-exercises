import {Set} from './set';

export class MutableSet extends Set {

    delete(value: number) : boolean {

        if(!this.has(value)) return false;

        const index: number = this.numbers.indexOf(value);
        this.numbers.splice(index, 1);

        return true;
    }

}