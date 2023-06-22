const myObj = {}
console.log(myObj) // {}

myObj.x = 1
console.log(myObj) // { x: 1 }

myObj.y = 2 // Dynamically changing the type
console.log(myObj) // { x: 1, y: 2 }
