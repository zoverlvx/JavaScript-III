/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
* 1. global this refers to the window
* 2. implicit means the this corresponds to the props within the object
* 3. new binding means the params passed through a constructor function will be the values of the
    properties of 'this'
* 4. explicit means that you are using a method like 'call' or 'apply' to pass the values of this from an object into another object or function.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

// this 'this' will refer to the window object because it's in global scope
// console.log(this);

// Principle 2

// code example for Implicit Binding
const implicit = {
    age: 29,
    name: "Zach",
    speak: function() {
        console.log(`My name is ${this.name} and I am ${this.age} years of age.`)
    }
}
implicit.speak();


// Principle 3

// code example for New Binding
function Person(attrs) {
    this.age = attrs.age;
    this.name = attrs.name; 
}

const zach = new Person({age: 29, name: "Zach"})
console.log(zach)

// Principle 4

// code example for Explicit Binding
function introduce () {
    console.log(`Hi! This is still ${this.name} and I am still ${this.age}`);
}
const fred = {
    age: 24,
    name: "Fred"
}
introduce.call(zach);
introduce.apply(zach);
introduce.call(fred);
introduce.apply(fred);
