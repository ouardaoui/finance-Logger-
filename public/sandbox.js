"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var char = "mario";
console.log(char);
var inputs = document.querySelectorAll("input");
inputs.forEach(function (input) {
    console.log(input);
});
// fonction
var cir = function (diameter) {
    return diameter * Math.PI;
};
// array and object depend of itial value
// array
var mixed = ["lugui", 15, "santa"];
console.log(mixed);
//obj 
var obj = {
    name: "ayoub",
    age: 15,
    belt: "black"
};
obj = {
    name: "ayoub",
    age: 27,
    belt: "none"
};
//explicit types 
var character;
var age;
var isLoggedIn;
// arrays
var arr = [];
arr.push("hello");
// union types 
var uid;
uid = true ? "hello" : 45;
var mixed_arr = [];
//object
var obj1;
obj1 = {
    name: "issam",
    arr: [],
    boolean: false
};
var object;
// any like javascript behieve 
var obje2;
//or
var obj3;
// function 
var fct;
fct = function () {
    console.log("hello");
};
// in function when we have ptional params using question maark or default value .
var fct1 = function (a, b, c) {
    console.log(a + b);
    console.log(c);
};
fct1(4, 5);
var fct2 = function (a, b, c) {
    if (c === void 0) { c = "something"; }
    console.log(a + b);
    console.log(c);
};
var fct3 = function (user) {
    console.log("hello " + user.name);
};
// Function Signatures
var fct4;
fct4 = function (user) {
    console.log("" + user.name);
};
fct4({ name: "ahmed", age: 45 });
