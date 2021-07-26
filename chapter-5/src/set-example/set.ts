export class Set {

    protected numbers: number[] = [];

    has(value: number): boolean {
        return this.numbers.includes(value);
    }

    add(value: number): this {
        this.numbers.push(value);
        return this;
    }

    constructor() {}
}