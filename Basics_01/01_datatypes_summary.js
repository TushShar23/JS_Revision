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


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//STACK AND HEAP MEMORY

let username = "funkin"
anothername = username
anothername = "king"
console.log(username,anothername)
// there are copies of the same object

let user = {
    name:"Tushar",
    upi:"user@123ybl"
}

let userone = user
userone.upi = "Google23@cnb"
console.log(user,userone);
// see because it is a reference type both will point to the same location thatswhy changes are reflecting in both 


