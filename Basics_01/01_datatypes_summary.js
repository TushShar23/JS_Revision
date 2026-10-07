let myvar;
console.log(myvar);

let myArr = ['Ironman','spiderman','antman','hulk']
console.log(myArr)

let myObj = {
    name:"Tushar",
    age:22
}
console.log(myObj)

let BigNum = 23456995890234565n
console.log(BigNum);

let myFunc = ()=>{
    console.log("Hello World");
    
}

console.log(typeof myvar); // its type is undefined.

console.table([typeof myArr,typeof myObj,typeof BigNum,typeof myFunc])
// myFunc original datatype is "OBJECT FUNCTION"

