//find the largest between two variables
const findLargest= (a,b) =>{
   if(a>b){
       return a +"is larger";
    }else{
       return b +"is larger";
    }

}
var a = parseInt(prompt('please enter the first number'));
var b= parseInt(prompt("please enter the second number"));
document.write(findLargest(a,b));


//function that checks even or odd  numbers
const compareEven = (x) =>{
  if(x %2==0){
     return "number is even";
  }else{
      return "number is odd";
  }

}
var x =parseInt(prompt("please enter the number to determine even or odd"));
document.write(compareEven(x));


//function that checks if a triangle is equilateral, scalene or isoseleces
const findTriangleType = (f,m,n) =>{
  if(m==n && f===n && n==f){
    return "equilateral triangle";
  }else if(m==n || n==f){
    return "isosceles triangle";
  }else{
    return "scalene triangle";
  }
}
var m =parseInt(prompt('please enter the number for side1'));
var n =parseInt(prompt('please enter the value for side2'));
var f = parseInt(prompt('please enter the value for side3'));
document.write(findTriangleType(f,m,n));

let day;
switch(day){
  case 0:console.log("sunday");
  break;
  case 1:console.log("monday");
  break;
  case 2:console.log("tuesday");
  break;
  case 3:console.log("wednesday");
  break;
  case 4:console.log("thursday");
  break;
  case 5: console.log("friday");
  break;
  case 6 :console.log("saturday");
  default:console.log("please enter from 0-6");
}