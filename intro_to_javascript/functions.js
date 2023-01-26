// coverts the first letter into capital

let capitalize = (letter) =>{
    let str = letter.split(' ');
    for( let i=0; i<str.length; i++){
       str[i]= str[i][0].toUpperCase() + str[i].substring(1);
    }
    return  str.join(" ");
}
console.log(capitalize('the quick brown fox'));


//A function that accepts  a number and checks it if its even or not

let AcceptsNumber = (number) =>{
    if(number %2 ===0){
        return "number is even";
    }else{
        return "number is odd";
    }
}
console.log(AcceptsNumber(2));



// A function that accepts an array as a parameter

let Arr = ["dog","cats","monkey"];

let AcceptArray = (item)=>{
    for(let p=0; p < item.length; p++){
        return item[p];
    }
}
console.log(AcceptArray(Arr));