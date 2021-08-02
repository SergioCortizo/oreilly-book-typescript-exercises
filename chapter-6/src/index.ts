/*

1. For each of the following pairs of types, decide if the first type is assignable to the
second  type,  and  why  or  why  not.  Think  about  these  in  terms  of  subtyping  and
variance,  and  refer  to  the  rules  at  the  start  of  the  chapter  if  you’re  unsure  (if
you’re still unsure, just type it into your code editor to check!):

*/

// a. 1 and number

let a: number = 1

/*
    Yes, you can. 1 is a subtype of number.
*/

// b. number and 1

let b: 1 = 3;

/*
    No, you can't do it because variables of type '1' can't be assigned with values of type number.
*/

// c. string and number | string

let c: number | string = "string";

/*
    Yes, you can because string is a subtype of number | string.
*/

// d. boolean and number

let d: number = true;

/*
    No, you can't because you can't assign a boolean value to a variable of type number.
*/

// e. number[] and (number | string)[]

let e: (number | string)[] = [1, 2, 3, 4, 5];

/*
    Yes, you can because number[] is a subtype of (number | string)[]
*/

// f. (number | string)[] and number[]

let f1: number[] = [1, 2, 3, 4, 5];
let f2: number[] = [1, 2, 3, 4, "5"];

/*
    You can do it if the array has only numbers, but you can't if the array also has strings because (number | string)[] is a supertype of number[].
*/

// g. {a: true} and {a: boolean}

let g: {a: boolean} = {a: true};

/*
    You can do it because {a: true} is a subtype of {a: boolean}.
*/

// h. {a: {b: [string]}} and {a: {b: [number | string]}}

let h: {a: {b: [number | string]}} = {a: {b: ["string"]}};

/*
    Yes, you can because {a: {b: [string]}} is a subtype of {a: {b: [number | string]}}.
*/

// i. (a: number) => string and (b: number) => string

const parseNumberToString = (a: number) => a.toString();

let i: (b: number) => string = parseNumberToString;

/*
    Yes, you can because (a: number) => string and (b: number) => string have the same type although having different parameter's variables.
*/

// j. (a: number) => string and (a: string) => string

let j: (b: string) => string = parseNumberToString;

/*
    No, you can't because both types have the same number of parameters but different types for them.
*/

// k. (a: number | string) => string and (a: string) => string

const parseToString = (a: number | string) => a.toString();

let k: (a: string) => string = parseToString;

k(1);
k("1");

/*
    Yes, you can but you shouldn't if you want to use it with numbers and strings, because 
    (a: string) => string is a subtype of (a: number | string) => string, but in this case for example
    when you assign to a variable of type (a: string) => string a function of type (a: number | string) => string,
    it will compile but that variable will only accept strings although the original function accepts numbers.
*/

// l. E.X  (defined  in  an  enum  enum E {X = 'X'})  and  F.X  (defined  in  an  enum enum F {X = 'X'})

enum F {X = 'X'}
enum E {X = 'X'}

F.X = E.X

/*
    You can't assign values to enums already defined.
*/

/*

2. If you have an object type type O = {a: {b: {c: string}}}, 

1) What’s the type of keyof O? 

"keyof O" returns 'a', which is a string indicating the set of direct keys in the object.

2) What about O['a']['b']?

"keyof O['a']['b']" returns 'c', which is a string indicating the set of direct keys in the object.

In both cases it returns an union of their direct keys in a string.

*/

/*

3. Write an Exclusive<T, U> type that computes the types that are in either T or U,
but not both. For example, Exclusive<1 | 2 | 3, 2 | 3 | 4> should resolve
to  1 | 4.  Write  out  step  by  step  how  the  typechecker  evaluates  Exclusive<1 | 2, 2 | 4>.

*/

type Exclusive<T, U> = (T extends U ? never : T) | (U extends T ? never : U);
type result = Exclusive<1 | 2 | 3, 2 | 3 | 4>;
type result2 = Exclusive<1 | 2, 2 | 4>;

/*

4. Rewrite  the  example  (from  “Definite  Assignment  Assertions”  on  page  151)  to
avoid the definite assignment assertion.

*/

let userId: string = globalCache.get('userId');

userId.toUpperCase() 
