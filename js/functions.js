// function addingNum(a,b){
//     console.log("I am from shinetsu");
//     return a + b;
// }

// console.log(addingNum(2,3))
// var sum = addingNum(2,3);
// console.log(sum);

// var anon = function(a,b){
//     console.log("I am from shinetsu");
//     return a+b

// }
// anon(5,6);

// setTimeout(function(){console.log("anonymous function call in setTimout")},3000);

// var cons =new Function("a","b"," console.log('in function');return a+b;");
// console.log(cons(3,5));


//1) Write a function which has no name to calculate cube of a number

// var cube = function(a){

//     console.log("the cube answer");
//     return a*a*a;
// }

// cube(3);

// setTimeout(function(){console.log("anonymous function call ins set Timout")},3000);


//2) Define a function to convert Fahrenheit to Degree and vice versa

// function getFarenheight(f){
//     console.log('Fahrenheit_to_Celsius');


//     return (f - 32) * 5/9; 

// }
// console.log(getFarenheight(30));
// getFarenheight(-20);

// 3) Write a self-invoking function to print Hello JavaScript in an alert box

(function(){

    alert("Hello Java Script");
})();