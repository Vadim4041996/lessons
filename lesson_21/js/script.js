// Строгий режим
"use strict"
                                                        // Значення
// let userAge = 39
// console.log(userAge)


// let userAge
// userAge = 28
// console.log(userAge)


// let userAge = 28
// console.log(userAge)
// userAge = 25
// console.log(userAge)
                        // або
// userAge = 'Vadym'
// console.log(userAge)


// let userAge = 18
// let otherUserAge
// otherUserAge = userAge
// console.log(otherUserAge)





                                                        // Область видимості
// let userAge = 28
// function someFunction() {
//     let userAge = 15
//     console.log(userAge)
//     if (userAge>0) {
//         let userAge = 10
//         console.log(userAge)
//     }
// }
// someFunction()
// console.log(userAge)


                        // приклад
// let user = 'admin'
// let userAge
// if(user === 'admin') {
//     userAge = 111
// }
// console.log(userAge)




                                                        // константи
// const COLOR_BLACK = "#000"
// console.log(COLOR_BLACK)




                                                        // Типи даних
    // undefined

// let userAge
// console.log(userAge)           //Значення
// console.log(typeof userAge)    // Типи даних

                        // Приклад
// let user = "admin1"
// let userAge
// if (user === "admin") {
//     userAge = 111
// }
// if (userAge === undefined) {
//     console.log("Error")
// } else {
//     console.log(userAge)
// }

    // null

// let userAge = null
// console.log(typeof userAge)
// console.log(userAge) 



                                                        // Лапки

// let userAge = 28
// let userName = `Vadym`
// let userInfo = `Name: ${userName}, Age: ${userAge}`
// console.log(userInfo)


// let blockStyle = `
//     wigth: 100px;
//     height: 100px;
//     color: #fff;
// `



                                                        // booleon
    // false-нуль, пустий рядок, undefined, NaN

// let someVar = ""
// console.log(someVar)
// console.log(typeof someVar) тип даних
// console.log(typeof Boolean(someVar)) тип даних
// console.log(Boolean(someVar))



                                                        // Довжина рядка

// let someString = `Привіт! Як справи?`
// console.log(someString.length)



                                                        // Рядок це масив

// let someString = `Привіт! Як справи?`
// console.log(someString[2])



                                                        // Регістр toUpperCase(), toLowerCase()

// let someString = `Привіт! Як справи?`
// console.log(someString.toLowerCase())
// console.log(someString.toUpperCase())



                                                        // Пошук-includs, startsWith. endsWith

// let someString = `Привіт! Як справи?`
// console.log(someString.includes("Як"))
// console.log(someString.startsWith('Пр'))
// console.log(someString.endsWith('?'))



                                                        // slice(start, end) отримання частини рядка

// let someString = `Привіт! Як справи?`
// let someNewString = someString.slice(2, 6)
// console.log(someNewString)



                                                        // replace пошук, заміна(що, на що)

// let someString = `Привіт! Як справи?`
// someString = someString.replace('Привіт!', '')
// console.log(someString)



                                                        // Основні методи чисел 

    // Math.floor - округлення в меньшу сторону

// let someNotRoundNum = 18.2
// console.log(Math.floor(someNotRoundNum))

    // Math.floor - округлення в меньшу сторону

// let someNotRoundNum = 25.1
// console.log(Math.ceil(someNotRoundNum))

    // Math.abs - модуль числа

// let someNotRoundNum = -20.2
// console.log(Math.abs(someNotRoundNum))

    // Math.random - рандом числа від 0 до 1

// console.log(Math.random())

    // Math.max(a,b,c...) / Math.min(a,b,c...)

// console.log(Math.max(1, 5, 1))
// console.log(Math.min(1, 2, -10))

    // patseInt / parseFloat

// let someVar = `35.5px`
// let someNum = parseFloat(someVar)
// console.log(someNum)




                                                        // Основні оператори

// let varOne = '10'
// let varTwo = '3'

    // Оператор віднімання(-)
// let varRes = varOne - varTwo
// console.log(typeof varRes)
// console.log (varRes)

    // Оператор ділення(/)
// let varRes = varOne / varTwo
// console.log(typeof varRes)
// console.log (varRes)

    // Оператор множення(*)
// let varRes = varOne * varTwo
// console.log(typeof varRes)
// console.log (varRes)

    // Взяття залишку від ділення(%)
// let varRes = varOne % varTwo
// console.log(typeof varRes)
// console.log (varRes)

    // Оператор додавання(+)
    // операнд(бінарний) не переводить рядок в число
// let varSum = varOne + varTwo
// console.log(typeof varSum)
// console.log(varSum)
    // операнд(унарний) переводить рядок в число
// let varOne = +"10"
// let varTwo = +"20"
// let varSum = varOne + varTwo
// console.log(typeof varSum)
// console.log(varSum)

    // Інкремент(збільшує на 1) Декремент(зменшує на 1) (працює дише зі зміними)
// let someNumOne = 5
// let someNumTwo = 3

// ++someNumOne
// --someNumTwo

// console.log(someNumOne)
// console.log(someNumTwo)

    // Комбінація операторів
// let someVar = 10
// someVar = someVar + 5
// console.log (someVar)
    // або
// someVar += 5
// console.log(someVar)

























    

















