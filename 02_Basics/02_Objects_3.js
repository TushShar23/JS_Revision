// Destructuring objects

const Course = {
    name:"JS mastery",
    price:999,
    CourseInstructor:"Hitesh"
}

// DESTRUCTURING 
const {CourseInstructor} = Course
console.log(CourseInstructor)
// i am taking the specified value from the object

// we can give our own name to the property/we can define the alias
const {CourseInstructor: instructor} = Course
console.log(instructor)

// we use this concept in react and express and other backend development and frontend development
