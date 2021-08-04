import { None } from "./None";
import { Some } from "./Some";

export interface Option<T> {
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
}

export function Option<T>(value: null | undefined): None 
export function Option<T>(value: T): Some<T> 
export function Option<T>(value: T): Option<T> { 
  if (value == null) {
    return new None
  }
  return new Some(value)
}