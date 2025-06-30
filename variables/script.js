console.log(username) // output : undefined

var username = 'koushik' 

console.log(username) // output : ReferenceError

let username = 'koushik' 

console.log(username) // output : ReferenceError

const username = 'koushik' 

// SCOPE

var x = 12

{
   var x = 20
}
console.log(x) // output : 20  scope - functional & global


let a = 12 

{
   let a = 20
}
console.log(a) //output : 12  scope - block & global