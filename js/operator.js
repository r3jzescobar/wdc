/*console.log(2-1);
var diff = 3-2;
console.log("diff:" + diff);
diff ++;
var product = 7*9;
console.log("product:" +product);
var mod =54%3;
console.log("mod :" + mod)
var s =9;
s+=8;
console.log(s);

var num = 6;
var num2  = 8;
if(num == num2){
    console.log("equal");
} else {
    console.log("not equal");
}*/


// var weight = parseFloat(prompt('Enter your weight'))
// switch (weight){

//     case 1: document.write("weight is 1");
//              break;

//     case 2: document.write("weight is 2");
//             break;
//     case 3: document.write("weight is 3");
//             break;
//     default: document.write("weight is not in 1,2,3");
// }

var subjects = ["maths", "physics"];
var marks = new Array();
var num1;

for(var j=0; j<subjects.length;j++){
    num1 = parseFloat(prompt("Enter marks for subject" + subjects[j]));
    marks[j]=num1;
}

