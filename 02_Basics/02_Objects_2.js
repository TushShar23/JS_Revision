// singleton method

const tinderUser = new Object()
console.log(tinderUser) // gives an empty object

// adding properties

tinderUser.name = "Khushal"
tinderUser.age = "28"
tinderUser.email = "KSM12@gmail.com"
tinderUser.IsLoggedIn = false

console.log(tinderUser)
console.log(tinderUser["name"])

// nesting of objects
let NewUser = {
    "email":"newU22@gmail.com",
    fullname:{
        userfullName:{
            firstName:"Anon",
            MiddleName:"jos",
            LastName:"User"
        }
    }
}

console.log(NewUser)
// we can use [] and dot(.) notation for accessing
console.log(NewUser["fullname"])
console.log(NewUser.fullname)

console.log(NewUser["fullname"]["userfullName"])
console.log(NewUser.fullname.userfullName)

console.log(NewUser["fullname"]["userfullName"]["firstName"])
console.log(NewUser["fullname"]["userfullName"]["MiddleName"])
console.log(NewUser["fullname"]["userfullName"]["LastName"])

// joining objects

let obj1 = {1:"a",2:"b"}
let obj2 = {3:"c",4:"d"}

// MOSTLY USED
let obj3 = {...obj1,...obj2}
// CAN USE
let obj4 = Object.assign({},obj1,obj2)
console.log(obj3)
console.log(obj4)


// array of objects
const myObj = [
    {
        id:1,
        name:"a"
    },
     {
        id:2,
        name:"b"
    },
     {
        id:3,
        name:"c"
    },
     {
        id:4,
        name:"d"
    },
     {
        id:5,
        name:"e"
    },
     {
        id:6,
        name:"f"
    },
]
// we can loop through the object's keys and values
console.log(myObj)

console.log(myObj[0])

// getting KEYS OF AN OBJECT,THIS PUT THE KEYS OR VALUES INSIDE AN ARRAY AND RETURN THAT ARRAY.

console.log(Object.keys(tinderUser))
console.log(Object.values(tinderUser))

// has property or not
console.log(tinderUser.hasOwnProperty("name"))

// enumerable/can loop through it or not
console.log(tinderUser.propertyIsEnumerable("name"))