// HIGH ORDER LOOPS

// for of (simple and can be used on array as well as on strings as well as on objects)
const arr = [1,2,3,4,5,6,7,8,9,10]
for (const elm of arr) {
    console.log(elm)   
}

const greetings = "Hello World!!"
for (const greet of greetings) {
    console.log(greet)
}


// MAP AND OBJECT
// MAP stores key value pairs
// MAP preserve the order of insertion of data
// MAPs are simply iterable,using forof loop we can iterate like [key,val]
// MAP can have any type of key(primitive,functions or objects..)

const myMap = new Map()
myMap.set("IN","India")
myMap.set("USA","United states of America")
myMap.set("DXB","Dubai")
myMap.set("UAE","United arab emirates")

console.log(myMap)

//using loops
for (const [key,val] of myMap) {
    console.log(`${key} :- ${val}`)
}

// FORIN 
// ForIn gives the keys in result

// forin MAINLY USED FOR OBJECTS
// OBJECTS ARE DIFFERENT FROM MAPS when it comes to storing and accessing

const myLangObj = {
    cpp:"C++",
    js:"Javascript",
    rs:"Rust",
    py:"Python"
}

for (const key in myLangObj) {
    console.log(`${key} shortcut for ${myLangObj[key]}`)
}

// THIS is how we use forIn with objects
// There are ways to use ForOf with objects

// ForIn with arrays

const myLangArr = ["js","rs","cpp","py"]
for (const key in myLangArr) {
    console.log(`${key} - ${myLangArr[key]}`)
}
// By default Arrays have keys too.

// Using forIn with map 
for (const key in myMap) {
   console.log(`${key} - ${myMap[key]}`)
}
// This will not give any error BUT WILL NOT GOING TO PRINT ANY THING because MAPS are not iterable


// ForEach is a high order function/loop
// ForEach loop is already an array's property

// 1 defining callback function inside forEach
myLangArr.forEach((item)=>{
    console.log(item)
})

// 2 Passing a user generated predefined function to ForEach
function PrintItems(item){
    console.log(item)
}
arr.forEach(PrintItems)

