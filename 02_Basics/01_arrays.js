// shallow copy and deep copy

const arr = [10,23,9,89,"one"]
const myarr = new Array(0,1,2,3,4,5,6)

console.log(arr);
console.log(myarr);

// OPERATIONS
myarr.push(10)
myarr.push(88)

console.log(myarr);

myarr.pop()
console.log(myarr);

// UNSHIFT() will put the element in the starting and SHIFT() will remove the element from the starting and shift the whole array elements.

myarr.unshift(1009)
console.log(myarr);

myarr.shift()
console.log(myarr);


// QUESTIONARRE METHODS in ARRAYS
console.log(myarr.includes(10));
console.log(myarr.indexOf(3));


const NewArr = myarr.join('*')
//Adds all the elements of an array into a string, separated by the specified separator string.
console.log(NewArr);

// slice() and splice()

console.log('A original ',myarr);

// slice will create a copy and then perform the operation on that copy 
const myn1 = myarr.slice(1,4)
console.log('B slice() ',myn1);
console.log(myarr);

// splice will perform the operation on the original array
const myn2 = myarr.splice(1,4)
console.log('C splice() ',myn1);
console.log(myarr);





