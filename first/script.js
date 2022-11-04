// console.log('Hello World')
// alert('Hello')
// prompt("Как у вас дела?")

// Запросить у пользователя имя, и в уведомлении вывести "Hello" и имя, которое запросили
// let name = prompt("Как вас зовут")
// alert("Hello " + name)

// Сделать так, чтобы имя пользователя всегда начиналось с буквы верхнего регистра
// арсен
// let name = prompt("Как вас зовут")
// let newName = name[0].toUpperCase() + name.slice(1);

// Если в массиве arr уже существует имя newName, то в alerte возвращаем "Такое имя уже существует!"
// иначе добавляем имя newName в конец массива 

// let arr = ["Ivan Ivanov", "Andrey", "Anna", "Veronika"]
// let newName = prompt("Какое имя вы хотите добавить?") // 

// function checkName(name) {
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i].toLowerCase() == name.toLowerCase()) {
//             return alert("Такое имя сущесвует")
//         }
//     }
//     arr.push(name)
// }
// checkName(newName)

// function checkNameIncudes(name) {
//     if(arr.includes(name)) {
//         return alert("Такое имя существует")
//     }
//     arr.push(name)
// }

// let nums = [2, 4, 6, 8] // Добавить в массив 10
// let arrTen = [10]
// let newArr = arrTen.concat(nums) // [2,4,6,8] + [10] = [2, 4, 6, 8, 10]
// console.log(newArr)

// nums.forEach(num => num + 1)


// let myName = "Arsen"
// let myName1 = "arsen"
// console.log(myName === myName1) // false
// console.log(myName.toLowerCase() === myName1.toLowerCase()) // true


// Удалить буквы b, c, d, используя метод splice. Вместо букв были цифры 2,3,4
// let arr = ["a", "b", "c", "d", "e"]
// let deleted = arr.splice(0, 2, "10", "11")
// console.log(deleted)
// console.log(arr)

// Выводить пользователю строку из массива. Спрашивать какое слово по очереди он хочет удалить.
// Спрашивать какое слово он хочет добавить вместо удаленного и в итоге выводить полученную строку из массива.
// Из элементов массива собрать предложение. Вместо текущего имени в массиве, добавьте ваше,
// используя splice
// let message = ["Hello!", "My", "name", "is", "Arsen"]

// let index = +prompt("Какое слово из message.length по очереди хотите удалить " + message.join(" ")) // prompt - string
// index-- // позиция удаленного слова
// // "2", 2
// let str = prompt("Какое слово вы хотите использовать вместо удаленного")

// message.splice(index, 1, str)

// console.log(message.join(" "))
