// THIS = current context
// IN NODE,current context = empty object {}
// IN BROWSER,current context = Window
// THIS(contenxt) IS WORKING IN OBJECTS BUT NOT IN FUNCTIONS not in just ARROW functions BUT IN NORMAL functions too


const obj = {
    name: "Tushar",
    age: 22,

    welcomeMsge: function(){
        console.log(`${this.name}, welcome to the site`)
        console.log(this)// 1st current context is this object with name:"tushar" and 2nd is with name:"naman"
    }
}

obj.welcomeMsge // only reference
obj.welcomeMsge()

obj.name = "Naman"
obj.welcomeMsge()


console.log(this)
// this is node environment so our current context is an empty object.


function temp(){
    let username = "Anon" 
    // if we use only Username then it will print it
    console.log(this) // here this is referring to something
    console.log(this.username) // will print undefined no reference to the current object
}
temp()

// Arrow Function

// EXPLICIT RETURN
const addTwo = (num1,num2)=>{
    return num1+num2
}

const addTwoImplicit = (num1,num2) => num1 + num2
const addTwoImplicitanother = (num1) => (num1 * 2)

console.log(addTwo(3,2))
console.log(addTwoImplicit(2,6))
console.log(addTwoImplicitanother(3))

// how we return object using arrow functions
const retObj = () => {username:"Tushar"}
const retObj2 = () => ({username:"Tushar"}) // we have to use paranthesis first then the curly braces for object
console.log(retObj())
console.log(retObj2())

// context is more about the environment
