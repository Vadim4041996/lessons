// Строгий режим
"use strict"


// #1
let someVar = 0
++someVar
console.log(someVar)


// #2
for (let i = 1; i <= 10; i++) {
    console.log(`Пункт №${i}`)
}


// #3
if (2 * 20 <= 10 || 30 / 2 < 5 && 10 <= "10" || 20 === "20") {
    console.log("000")
}
//  false || false && true || false
// false || false || false
// flase


// #4
function calcDiv(a, b) {
    const result = a / b
    if (typeof a === "undefined" || typeof b === "undefined") {
        return "Введіть дані!!!"
    } else if (typeof a !== "number" || typeof b !== "number") {
        return "Аргумент повинен бути числом!!!"
    } else if (b === 0) {
        return "На нуль не ділиться!!!"
    } else {
        return `Результат ділення: ${result}`
    }
}
console.log(calcDiv())
console.log(calcDiv(1, 0))
console.log(calcDiv('one', 2))
console.log(calcDiv(10, 2))




// #5 
let someArray = ["white", "black", 10, "silver", "red"]
if (Array.isArray(someArray)) {
    someArray.forEach((item) => {
        item === 10 ? console.log("число:", item) : null
    })
} else {
    console.log("Змінна не є масивом")
}


// АБО
// someArray.forEach((item) => {
//     if(item === 10 ) {
//         console.log("число:", item)
//     }
// })



























































