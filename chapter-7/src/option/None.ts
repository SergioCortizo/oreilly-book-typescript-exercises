import { Option } from "./Option"

export class None implements Option<never> {
    flatMap(): None {
        return this
    }
    getOrElse<U>(value: U): U {
        return value
    }
}