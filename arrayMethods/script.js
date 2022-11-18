// const randomColor = getRandomColor2();
// function getRandomColor2() {
//   const rndByte = () => Math.floor(Math.random() * 256);
//   return `rgb(${rndByte()},${rndByte()},${rndByte()})`;
// }

/*
    rgb([0-256], [0-256], [0-256])
    Math.random - (0, 1] * 256 - [0, 256)
    Math.floor() - округляет до меньшего

    HEX - 16ричное. 16*16

    "16000" - parseInt("16000") - 16000
    "string" - method String->Int - integer
*/


const cars = [
    { mark : "Mercedes-Benz", model : "S600", year : "1999", price : 15000 },
    { mark : "BMW", model : "M3", year : "2002", price : 18000 },
    { mark : "Audi", model : "Q3", year : "2006", price : 14000 },
    { mark : "VW", model : "Golf-4", year : "1998", price : 8000 },
    { mark : "Toyota", model : "MarkX", year : "2005", price : 13000 },
    { mark : "Lexus", model : "RX300", year : "2007", price : 20000 },
    { mark : "Mercedes-Benz", model : "S500", year : "1995", price : 12000 },
]

// 1. Вернуть массив с маркой и моделью машины. ["Mercedes-Benz S600", "BMW M3"]

// const newCars = cars.map(car => {markModel : car.mark + " " + car.model, year : 1990}) 
// const newCars = cars.map(car => `${car.mark} ${car.model}`)
// const newCars = cars.map(({mark, model}) => `${mark} ${model}`)

// 1*. Вернуть массив, в котором вместо марки и модели по отдельности будет 
// объединенная строка `Марка Модель` и все остальные свойства 
// [{ markModel : "Mercedes-Benz S600", year : "1999", price : 15000 },
//   { markModel : "BMW M3", year : "2002", price : 18000 }   ]

// const newCars = cars.map(car => {
//     return {
//         markModel : `${car.mark} ${car.model}`,
//         price : car.price,
//         year : car.year
//     }  
// })

// const newCars = cars.map(({mark, model, price, year}) => {
//     return {
//         markModel : `${mark} ${model}`,
//         price,
//         year 
//     }
// })

// const newCars = cars.map(({mark, model, ...rest}) => {
//     return {
//         markModel : `${mark} ${model}`,
//         ...rest
//     }
// })

// Задача2. Посчитать среднюю цену всех автомобилей
// средняя цена = сумма всех цен / количество автомобилей. 

// const avgPrice = cars.reduce((sum, car) => sum + car.price, 0) / cars.length 
// console.log(avgPrice)
// console.log(Math.round(avgPrice))

// console.log(avgPrice.toFixed(2))
// Math.floor

// Math.pow(5, 2) // 25
// 

// let sum = 0; // initialValue - начальное значение, accumulator 
// for(let i = 0; i < cars.length; i++) {
//     sum += cars[i].price
//     // sum = sum + cars[i].price
// }
// console.log(sum)

// 1. i = 0, 0 < 7, sum = 0 + 15000 = 15000, i++
// 2. i = 1, 1 < 7, sum = 15000 + 18000 = 33000, i++
// 3. i = 2, 2 < 7, sum = 33000 + 14000 = 47000, i++
//  i = 6, 6 < 7, sum = 88000 + 12000 = 100000.

// Задача 3. Вернуть массив машин, которым меньше 20 лет.
// year = 2005 < 20. 2022 - "1998"

// 1998 > 2002 - false. машина старше 20 лет
// 2005 > 2002 - true. машина младше 20 лет
// let newCars = cars.filter(({year}) => year > 2002)

// const newCars = cars.filter(({year}) => year > new Date().getFullYear() - 20)
// const newCars = cars.filter(({year}) => new Date().getFullYear() - year < 20)
// console.log(newCars)

/*
 1995 - 27 ЛЕТ. FALSE
 2005 - 17 ЛЕТ. TRUE

 1995 > 2022 - 20
 1995 > 2002 - FALSE

*/

// Сделать так, чтобы 
// объект Date
// moment.js - библиотека. 
// const date = new Date().getFullYear() // UTC
// const today = Date.now() // сегодня // количество секунд, которые прошли с 1 янв 1970
// console.log(date)
// console.log(today) 

// Работает с датой рождения пользователя
// const users = [
//     { name : "Arsen", bDay : "03/03/1998" },
//     { name : "Ivan", bDay : "10/25/1990" },
//     { name : "Alex", bDay : "07/05/1995" },
//     { name : "Kostya", bDay : "02/12/2005" },
//     { name : "Max", bDay : "05/07/2001" },
//     { name : "Ann", bDay : "01/15/2002" },
//     { name : "Julia", bDay : "09/13/2003" },
//     { name : "Oksana", bDay : "10/25/2001" },
// ]

// // Кто из пользователей старше 20? Для след. года тоже должно работать
// // new Date(user.bday).getFullYear()

// const olderTwenty = users.filter(({bDay}) => {
//     return new Date().getFullYear() - new Date(bDay).getFullYear() > 20
// })

// // const user = {
// //     name : "Arsen",
// //     age : 24
// // }

// // const name = {user} // const name = "Arsen"

// // 

// Задача4. Отсортировать массив с машинами по цене (от меньшей к большей)
const sortedCars = cars.sort((a, b) => a.price - b.price)
console.log(sortedCars)

/*
    sort(cb) - позволяет отсортировать массив
    если вызывать без коллбэка, отсортирует по лингвистическим правилам 
*/

// const names = ["Max", "Arsen", "Julia", "Andrey"]

// const sortedNames = names.sort() //
// console.log(sortedNames) // 

// const nums = [1, 20, 5, 15, 32]

// const sortedNums = nums.sort((a, b) => a - b) // если хотим отсортировать числа от меньшего к большему a -b
// // const sortedNums = nums.sort((a, b) => b - a) // если хотим отсортировать от большего к меньшему b - a
// сonsole.log(sortedNums)

// const nums1 = [5, 3, 4]
// const sortedNums1 = nums1.sort((a, b) => {
//     console.log(`Сравнение ${a} ${b}`)
// })
// console.log(sortedNums1)
/*
    1. a = 5, b = 3
    if(a > b) - меняем местами a и b
    if(a == b) - все остается на своих местах
    if(a < b) - 
    2. a = 3, b = 1
    if(a > b) - меняем местами b и a 
*/

/*
 nums.sort((a,b) => {
    if(a > b) - b встает на первое место, иначе все остается так же //  1 > 20
    if(a == b) - порядок не меняется
    if(a < b) - a встает на первое место, 1 < 20 [1, 20]

    a - b // > 0  
 })
*/

// [100, 200, 5, 300, 400]

// [1, 15, 20, 32, 5]

// 1 > 15. 
// 2 >
// 3 > 
// 4
// 5
