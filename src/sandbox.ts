import { match } from "assert"

const char = "mario"
console.log(char)

const inputs = document.querySelectorAll("input")


inputs.forEach(input => {
  console.log(input)
})
// fonction
const cir = (diameter: number) => {
  return diameter * Math.PI
}


// array and object depend of itial value

// array
let mixed = ["lugui", 15, "santa"]
console.log(mixed)
//obj 
let obj = {
  name: "ayoub",
  age: 15,
  belt: "black"
}
obj = {
  name: "ayoub",
  age: 27,
  belt: "none"
}


//explicit types 
let character: string;
let age: number;
let isLoggedIn: boolean;

// arrays

let arr: string[] = [];
arr.push("hello")

// union types 
let uid: (string | number)
uid = true ? "hello" : 45;

let mixed_arr: (string | number)[] = [];
//object
let obj1: object
obj1 = {
  name: "issam",
  arr: [],
  boolean: false
}

let object: {
  name: string,
  age: number,
  beltColour: string
}

// any like javascript behieve 

let obje2: any
//or
let obj3: { key1: any, key2: any, key3: any }

// function 
let fct: Function;

fct = () => {
  console.log("hello")
}

// in function when we have ptional params using question maark or default value .

const fct1 = (a: number, b: number, c?: number | string) => {
  console.log(a + b)
  console.log(c)
}
fct1(4, 5)
const fct2 = (a: number, b: number, c: number | string = "something") => {
  console.log(a + b)
  console.log(c)
}


// alias 
type stringOrNum = string | number;
type objWithNmae = { name: string, uid: stringOrNum }
const fct3 = (user: objWithNmae) => {
  console.log(`hello ${user.name}`)
}

// Function Signatures
let fct4: (option: { name: string, age: number }) => void;
type obj = { name: string, age: number }
fct4 = (user: obj) => {
  console.log(`${user.name}`)
}

fct4({ name: "ahmed", age: 45 })