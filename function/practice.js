// 1. Write a function to check if a number is even or odd 

function oddEven(num){
    if(num%2===0){
        return `${num} is Even`
    }
    else{
        return `${num} is Odd`
    }
}
let res = oddEven(20)
console.log(res)

// 2. Create a function to convert temperature from celsius to fahrenheit

function celTof(temperature){
    res = (temperature*(9/5)+32).toFixed(1)
    console.log(res)
}

celTof(52)

// 3. Write a function that return the square of a number 

function square(num){
   console.log(num**2)
}
square(10)

// 4. Create a function that reverses a given string

function reverse(str){
    for(let i = 0; i < str.length;i++){
        console.log(str[str.length-i-1])
    }
}
reverse('koushik')

// 5. Build a function that returns the max of three numbers.

function max(num1,num2,num3){
    if(num1 > num2 && num1 >num3) return num1 
    if(num2>num1 && num2 > num3) return num2 
    else return num3 
}
let maxNum = max(100,500,50)
console.log(maxNum)