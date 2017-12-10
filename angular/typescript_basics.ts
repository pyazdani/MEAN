// Variable Types (TypeScript Specific)
// Strings
var myString: string = "This is a string";

// Numbers
var myNumber: number = 7;

// Boolean
var myBoolean: boolean = true;

// Array of  Numbers 
var arrayOfNumbers: number[];
// (alternative way)
var arrayOfNumbers: Array<number>
// any (assign to any type, and change to any type, anytime)
var anything: any = 7;

// Variable Declarations 
//var - is used when we want to define the scope, and this will be scoped within functions only.

function testing() {
    var x = 10;
    console.log(x) // ok
}
console.log(x) // Error, undefined

//let - is used when we want to define the scope, within blocks { }, this includes loops, a variable declared as a let within an if block, or for loop block, will not be defined outside of the if block, or the for loop block.

if (true) {
    let x = 10;
    console.log(x) // ok
}
console.log(x) // Error, undefined

//const - is similar to let, in that it's scoped within blocks, but we are unable to change its type, or value once set. Note: if an object is const, we can't change the object's structure (such as adding, or replacing keys), but we can change the object's values.

const myobj = {
    a: 1, b:2
}
myobj.a = 5 // ok
myobj.abc = 3 // Error
myobj = {x:1, y:2, z:3} // Error

// Functions 
// Never type (will never reach the end of the function)
function errorHandler(message: string): never{
	throw new Error(message);
}
// Void (returns nothing)
function printValue(val: string): void{
	console.log(val);
	return;
}

// Classes
class SLNode {
	val: number;
	
	constructor(valueP: number){
		this.val = valueP;
	}
	doSomethingFun(){
		console.log("This is FUN!");
	}
}
let firstSLNode = new SLNode(1);