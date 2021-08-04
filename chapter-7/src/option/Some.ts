import { None } from "./None"
import { Option } from "./Option"

export class Some<T> implements Option<T> {
    constructor(private value: T) { }

    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Some<U>): Some<U>
    flatMap<U>(f: (value: T) => Option<U>): Option<U> {
        return f(this.value)
    }

    getOrElse(): T {
        return this.value
    }

}