// 1. What are the differences between a class and an interface?

/*
    -An interface is a contract for properties and methods that a set of classes must have.

    -A class can implement a constructor, a set of properties (with default value) and methos which can be used from there,
     while an interface can only define properties and methods' types.

    -An interface exists only in TypeScript context, while classes exist since JavaScript in ES6.

    -A class can be instantiated in objects and be used in inheritance cases, while an interface can only be used to be implemented
     by classes. A class can inherit only one class, but it can implement many interfaces as the programmer may need.
*/

// 2. When you mark a class’s constructor as private, that means you can’t instantiate
// or extend the class. What happens when you mark it as protected instead? Play
// around with this in your code editor, and see if you can figure it out.

/*
    When you declare a constructor as protected, that constructor can't be used to instantiate objects of that class, but the class
    that implements the constructor can be instantiated in its declaration or inside classes' declarations that extends the class.    
*/

class A {

    protected constructor () {

    }

    method(): A {
        return new A();
    }

}

class B extends A {

    anotherMethod(): A {
        return new A();
    }

}

let a: A = new A(); // Compilation error

// 3. Extend the implementation we developed “Factory Pattern” on page 108 to make
// it safer, at the expense of breaking the abstraction a bit. Update the implementa‐
// tion so that a consumer knows at compile time that calling Shoe.cre
// ate('boot')  returns  a  Boot  and  calling  Shoe.create('balletFlat')  returns  a
// BalletFlat (rather than both returning a Shoe). Hint: think back to “Overloaded
// Function Types” on page 58.

/*
    See 'shoe-example' code
*/

// 4. [Hard] As an exercise, think about how you might design a typesafe builder pat‐
// tern. Extend the Builder pattern “Builder Pattern” on page 109 to:
//      a. Guarantee at compile time that someone can’t call .send before setting at least
//         a  URL  and  a  method.  Would  it  be  easier  to  make  this  guarantee  if  you  also
//         force the user to call methods in a specific order? (Hint: what can you return
//         instead of this?)

import { createRequestBuider } from "./request-builder-example/request_builder";

const request = createRequestBuider();

request.setURL("http://www.google.com").setMethod('post').send();
request.setURL("http://www.google.com").setMethod('post').setData({data: "data"}).send();

//Compilation errors
request.send();
request.setMethod("post").send();
request.setURL("http://www.google.com").send();

//      b. [Harder]  How  would  you  change  your  design  if  you  wanted  to  make  this
//         guarantee,  but  still  let  people  call  methods  in  any  order?  (Hint:  what  Type‐
//         Script  feature  can  you  use  to  make  each  method’s  return  type  “add”  to  the
//         'this' type after each method call?)

/*
    Incomplete. Check "src/request-builder-example/request_builder_with_mixins"
*/
