// callback - функция обратного вызова; функция, которую мы передаем 
// в другую функцию в качестве аргумента

// function sum(a, b) {
//     return a + b
// }

// sum(10, 15) // мы являемся инициаторами вызова функции. вызываем сразу. 

// function fn(anotherFn, param1, param2) {
//     // another fn - () => sum(10, 15). another()
//     console.log(anotherFn(10, 15)) // 25 // не мы являемся инициаторами вызова, а функция fn()
// } 

// fn(sum, 10, 15) //  another fn is not a function
// fn()
// sum(10, 15) - синтаксис немедленного вызова

// В примере выше fn - называется функцией высшего порядка, потому что
// она вызывает другую функцию. high ordered function

// а anotherFn - функция обратного вызова. callback


// function greeting(name) {
//     return `Hello, ${name}`
// }

// greeting("Arsen") // передача строку в качестве аргумента

// // В js функция - это объект


function sum(a, b) {
    return a + b
}

function min(a, b) {
    return a - b
}

// lib(min, 20, 10)

// Задача. Создать функцию add, которая принимает аргумент num(число) и добавляет к нему 2

function add(num) {
    return num + 2
}

// console.log(add(10)) // 12

//  Задача. С помощью метода .map(), добавить к каждому числу внутри массива 3
// [1, 2, 3, 4, 5]
// function addThree(num) {
//     return num + 3
// }

// Реализовать функцию, которая аргументами принимает массив и коллбэк. || ВХОДНЫЕ ДАННЫЕ - INPUt
// Функция должна вызвать коллбэк для каждого элемента массива. || ДЕЙСТВИЕ - FUNC
// функция map возвращает новый массив с изменеменными значениями || ВЫХОД - OUTPUT

// функция просто записывает все элементы в новый массив без изменения. метод push и цикл
// myMap - должна выполнять коллбэк для каждого элемента, если индекс четный, то прибавляем 3
let nums = [1, 2, 3, 4, 5] // [4, 5, 6, 7, 8]

let addThree = (num) => num + 3

let addThreeEven = (num, index) => {
    return index % 2 === 0 ? num + 3 : num
}


let addFive = num => num + 5 

myMap(nums, addThreeEven) // myMap - вызвать сейчас fn()


// с помощью метода forEach() возвратить в переменную sum сумму всех элементов массива

// Задание: к каждому из имен добавить строку "Hello, {name}". arr = ["Ivan", "Andrey", "Arsen"].
// возратить каждое имя со строкой в консоль

// Добавить в нашу библиотеку метод forEach.
// let nums = ["a", "b", "c", "d"] Input - входные данные
// В выходных данных result = "abcd"
// Написать коллбэк, который принимает каждый элемент массива и добавляет его в новую строку


let names = ["Ivan", "Andrey", "Arsen"] 
// map - возвращает новый массив с измененными элементами
let newNames =  names.map(name => name + "hello")
console.log(names)
console.log(newNames)
// forEach - возвращает ничего (undefined)
let myNewNames = names.forEach(name => name + 'hello')
console.log(names)
console.log(myNewNames)




// sync callback. 
// stack, queue. стек и очеред. в стеке первый вошел первый вышел 

// function hello() {
//     console.log("hello")
// }

// function hello2() {
//     console.log("hello2")
// }

// function hello3() {
//     // допустим здесь операция запроса на сервер
//     setTimeout(() => console.log("hello 3"), 1000)
// }
// hello() // hello
// hello3() // hello3
// hello2() // hello2

// hello
// hello2
// hello3

// Вариант с индексами чет/нечет с помощью map 
// console.log(nums.map((num, index) => index % 2 === 0 ? num + 3 : num))

// [1, 2, 3, 4, 5] 
// [4, 2, 6, 4, 8]

// 1. myMap принимает массив array и коллбэк(функция addThree)

// 2. Создаем newArr - пустой массив, который в итоге должен возвратиться

// 3. Перебираем массив array и для каждого элемента вызываем функцию addThree. 
// функция addThree принимает текущий элемент:
// 1 итерация. array[i] = array[0] = 1. Для 1 вызываем функцию addThree. addThree(1) // 4
// 2 итерация. array[i] = array[1] = 2. Для 2 вызываем функцию addThree. addThree(2) // 5
// 3 итерация. array[i] = array[2] = 3. Для 3 вызываем функцию addThree. addThree(3) // 6
// 4 итерация. array[i] = array[3] = 4. Для 4 вызываем функцию addThree. addThree(4) // 7
// 5 итерация. array[i] = array[4] = 5. Для 5 вызываем функцию addThree. addThree(3) // 8

// 4. Каждый элемент, после того, как мы вызвали для него функцию пушится в новый массив.
// newArray = [4, 5, 6, 7, 8]

// 5. Возвращаем массив newArray.  [4, 5, 6, 7, 8]

// let newNums = nums.map(addThree)
// console.log(newNums)

// Метод map принимает callback, который выполняет действие для каджого элемента массива
//
// addThree(10) // 13

// let myNum = 10

// let result = 20 + myNum

// метод .map() используется для итерации по массиву и выполнения функции для каждого из них
// метод .map() не мутирует массив,а возвращает новый массив, в котором произведены изменения
// callback в map принимает текущий элемент (item) (name) (n) (a) (b) 
// let names = ["Ivan", "Andrey", "Arsen"] // к каждому из имен добавить строку "Hello, {name}"
// let newNames = names.map(name => `Hello, ${name}`)

// 1 итерация, текущим элементом или name будет "Ivan" ["Hello, Ivan"]
// 2 итерация, текущим элементом или name будет "Andrey" ["Hello, Ivan", "Hello, Andrey"]
// 3 итерация, будет "Arsen" ["Hello, Ivan", "Hello, Andrey", "Hello, Arsen"]

// метод .map(), .forEach()

// Когда используем коллбэки. Наша функция lib ничего не знает о них.
// коллбэк не зависит от lib.


// Вызывайте функцию lib для того, чтобы в консоли отобразить результат
// выполнения функции. Функция lib получает callback функцию и вызывает ее
// отображая результат ее выполнения в консоли

