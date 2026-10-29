// THIS = current context
// IN NODE,current context = empty object {}
// IN BROWSER,current context = Window
// THIS IS WORKING IN OBJECTS BUT NOT IN FUNCTIONS


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




