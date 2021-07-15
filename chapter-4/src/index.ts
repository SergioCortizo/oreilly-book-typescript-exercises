//Chapter 4 exercises

// 1) Which parts of a function's type signature does TypeScript infer:
// the parameters, the return type or both?

// TypeScript infers in both type signatures.

// 2) Is JavaScript's 'arguments' object typesafe? If not, what can you use instead?

// 'arguments' is not a typesafe object, so you should use TypeScript's type signature for parameters.

/* 3) You want the ability to book a vacation that starts immediately. Update the over‐loaded 
   reserve  function  from  earlier  in  this  chapter  (“Overloaded  FunctionTypes”  on  page  58)  
   with  a  third  call  signature  that  takes  just  a  destination, without  an  explicit  start  date.  
   Update  reserve’s  implementation  to  support  thisnew overloaded signature. */

type Reservation = {
    from: Date,
    to?: Date,
    destination: string
}

type Reserve = {
    //(destination: string): Reservation
    (from: Date, to: Date, destination: string): Reservation
    (from: Date, destination: string): Reservation
}

let reserve: Reserve = (fromOrDestination: Date | string, toOrDestination: Date | string, destination?: string) => {
    if (toOrDestination instanceof Date && destination !== undefined) {
        // Book a one-way trip
    } else if (typeof toOrDestination === 'string') {
        // Book a round trip  
    } else if (typeof fromOrDestination === 'string') {
        // Book a immediate trip  
    }
}

/* 4) [Hard]  Update  our  call  implementation  from  earlier  in  the  chapter  (“Usingbounded  polymorphism  to  model  arity”  on  page  77)  
   to  only  work  for  functions whose  second  argument  is  a  string.  For  all  other  functions,  your  implementation should fail at 
   compile time. */

function call<T extends unknown, R>(
    f: (arg1: T, arg2: string) => R,
    arg1: T, arg2: string): R {
    return f(arg1, arg2)
}

function fill(length: number, value: string): string[] {
    return Array.from({length}, () => value)
}

call(fill, 10, 'a') // evaluates to an array of 10 'a's
let b = call(fill, 10) // Error TS2554: Expected 3 arguments; got 2.
let c = call(fill, 10, 'a', 'z') // Error TS2554: Expected 3 arguments; got 4.

/* 5) Implement  a  small  typesafe  assertion  library,  'is'.  Start  by  sketching  out  your types.
      When you’re done, you should be able to use it like this*/

function is<T extends unknown>(arg1: T, arg2: T, ...args: T[]): boolean {

    if (arg1 != arg2) {
        return false;
    } else {
        for (let arg in args) {
            if (arg != arg1) return false;
        }

        return true;
    }

}

// Compare a string and a string
is('string', 'otherstring') // false
// Compare a boolean and a boolean
is(true, false) // false
// Compare a number and a number
is(42, 42) // true
// Comparing two different types should give a compile-time error
is(10, 'foo') // Error TS2345: Argument of type '"foo"' is not assignable to parameter of type 'number'.
// [Hard] I should be able to pass any number of arguments
is([1], [1, 2], [1, 2, 3]) // false