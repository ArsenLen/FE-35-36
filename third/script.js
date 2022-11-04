// запрос на сервер, ответ от сервера ______> user
// const user = {
//     name: "Arsen",
//     job: "Frontend Dev"
// }

// объект - JS, словарь - Python
// ключ-значение

// posts - массив объектов. такая структура данных в итоге приходит с сервера 
// posts - посты, которые хранятся в базе данных и нам нужно отобразить их пользователю
const posts = [
    {
        title : "My first title",
        descr : "My first description",
        author : "Arsen" 
    },
    {
        title : "My second title",
        descr : "My second description",
        author : "Ivan" 
    },
]

// const title = prompt("Введите заголовок")
// const descr = prompt("Введите описание")
// const author = prompt("Введите автора")

// const newPost = {
//     title, // title === title --> title
//     descr,
//     author
// }
// // {title : Title, descr : Мое описание, author: Я}
// // const newPosts = posts.concat({title, descr, author})
// const newPosts = posts.concat(newPost) // newPosts - массив, в котором содержатся данные
// console.table(newPosts)

// В консоли отобразить разметку(HTML) для каждого из постов
// 3 раза в консоли отобразить данные из массива newPosts по шаблону, используя цикл
// 

// for(let i = 0; i < newPosts.length; i++) {
//     console.log(`
//     <div class="post">
//         <p>Title : ${newPosts[i].title}</p>
//         <p>Descr: ${newPosts[i].descr}</p>
//         <p>Author: ${newPosts[i].author}</p>
//     </div>
//     `)
// }

// Каждый элемент массива arr отобразить в консоли в теге p
// const arr = ["Arsen", "Arsen 1", "Arsen 2"]
// for(let i = 0; i < arr.length; i++) {
//     console.log(`<p class="username">${arr[i]}</p>`)
// }




// const user = {
//     name : "Arsen",
//     age : 24
// }

// console.log(`<div>
//     <p class="user">${user.name}</p>
//     <p class="age">${user.age}</p>
// </div>`)


// в html не можем отобразить объекты и массивы
// <div>${user}</div> ===> <div>[Object object]</div>
// <div>${user.name}</div> ===> <div>Arsen</div>

// let num = 10
// console.log(`Сегодня ${num} градусов`)

// Вернуть новый массив с добавленными к первому массиву данными. 
// не с помощью push, а верните новый массив с добавленными данными.
// и отобразить в консоли как таблицу.

// 0 - title, 1 - descr, 2 - author


// const arr = ["Hello", "World"]

// const newArr = [...arr, "!"] // ...arr = "Hello", "World"
// // ["Hello", "World", "!"]


// const URL = "https://mysite.com/api"

// [{author, name, count}, {}, {}]
// const book = {
//     author : "Пушкин",
//     name : "Капитанская дочка",
//     count : "500"
// }
// // В консоли отобразить автора и название
// // book.author = "Пушкин"
// // В консоли отобразить данные о книге book
// console.log(`
//     Автор: ${book.author}
//     Название книги: ${book.name}
//     Количество страниц: ${book.count}
// `)
//let names =  ["Arsen", "Arsen1"]. names[0] - "Arsen"
const books = [
    {
        author : "Пушкин",
        name : "Капитанская дочка",
        count : "500"
    },
    {
        author : "Толстой",
        name : "Война и мир",
        count : "1000"
    },
    {
        author : "Достоевский",
        name : "Преступление и наказание",
        count : "700"
    },
]

const newAuthor = prompt("Введите автора книги") // Author
const newName = prompt("Введите название книги") // Name
const newCount = prompt("Введите количество страниц книги") // N

const newBook = {
    author: newAuthor,
    name : newName,
    count : newCount
}


// const newBooks = books.push(newBook). newBooks = 4. 
// const newBooks = books.concat(newBook)
// const newBooks = [...books, newBook] // ...books - все элементы, + newBook 
const newBooks = books.concat(newBook)  

for(let i = 0; i < newBooks.length; i++) {
    console.log(` // выведи в HTML
    <div class="book">
       <p> Автор: ${newBooks[i].author} </p>
       <p> Название книги: ${newBooks[i].name} </p>
       <p> Количество страниц: ${newBooks[i].count} </p>
    </div>
    `)
}

// Переписать на map()
// 1. На чем вызывать map()? 
// book = newBooks[i]
const logBooks = (book) => console.log(book.author, book.name, book.count)

newBooks.map(book => {
    (`
        <div class="book">
            <p>Автор: ${book.author}</p>
            <p>${book.name}</p>
            <p>${book.count}</p>
        </div>
    `)
})


let arr = [1, 2, 3, 4, 5]
let myArr = []
const newArr = arr.forEach(num => {
    
    arr.forEach(num => {
        myArr.push(num)
    })
    myArr =["elements"]
   
})

console.log(myArr)

console.log(newArr) // undefined

// forEach - может мутировать массив при определенных обстоятельствах(исключение)
// map - возвращает новый массив

// map - может выполнить все, что может сделать forEach
// forEach - не сможет выполнить задачи, которые может выполнить map

// map - быстрее обходит элементы массива.


// 1 итерация ---> book == {Пушкин, Капитанская дочка, 500}

// console.log(newBooks)


// console.log(books[0]) - первый объект, данные об одной книге
// console.log(`
//     Автор: ${books[0].author}
//     Название книги: ${books[0].name}
//     Количество страниц: ${books[0].count}
// `)
// console.log(`
//     Автор: ${books[1].author}
//     Название книги: ${books[1].name}
//     Количество страниц: ${books[1].count}
// `)
// console.log(`
//     Автор: ${books[2].author}
//     Название книги: ${books[2].name}
//     Количество страниц: ${books[2].count}
// `)


// 1. i = 0, books[0].author, books[0].name ...
// 2. i = 1, books[1].author, books[1].name
// 3. i = 2
// console.log()  - сделать такой же вывод данных для второй книги

// Создать новый массив, в который добавить элементы старого массива и еще одно имя Arsen 3
// const names = ["Arsen", "Arsen 1", "Arsen 2"] 
// const namesNew = ["Arsen3", "Arsen4"]
// const newNames = names.concat(namesNew)

// console.log(names) // ["Arsen", "Arsen 1", "Arsen 2"] 
// console.log(newNames) // ["Arsen", "Arsen 1", "Arsen 2", "Arsen 3", "Arsen 4"] 


// const user = {
//     name : "Arsen",
//     age : 24,
//     job: "Frontend Dev"
// }

// const user1 = {...user, name : "Arsen User1"} 
// console.log(user1)

// forEach(), map()