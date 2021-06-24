// Exercise 1

let a = 1042 // It will infer 'number' type
let b = 'apples and oranges' // It will infer 'string' type
const c = 'pineapples' // It will infer 'string' type with the specified value 'pineapples'
let d = [true, true, false] // It will infer an array of 'boolean' type
let e = {type : 'ficus'} // It will infer an object structured with attribute 'type', which type is 'string'
let f = [1, false] // It will infer an array where values can be numbers or strings
const g = [3] // It will infer an specified array of numbers
let h = null // Value is null, but due to TypeScript's Type Widening feature, h's type is widened to 'any' type. Same results with 'undefined'

//Exercise 2

//a -> You're assigning a specific value of type 'number' to variable 'i', which cannot be changed
let i: 3 = 3
i = 4 // Error TS2322: Type '4' is not assignable to type '3'.

//b -> You cannot push 'string' values into an array of numbers
let j = [1, 2, 3]
j.push(4)
j.push('5') // Error TS2345: Argument of type '"5"' is not assignable to parameter of type 'number'.

//c -> 'never' type is a specific type for functions which never return a value or never stops executing,
//so you can't assign values of any type you try to assign
let k: never = 4 // Error TSTS2322: Type '4' is not assignable to type 'never'.

//d -> You're assigning to variable 'l' the type 'unknown', so when you're trying to create variable 'm',
//TypeScript throws an error because it doesn't know l's type
let l: unknown = 4
let m = l * 2 // Error TS2571: Object is of type 'unknown'.
