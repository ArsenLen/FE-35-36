

// const book = {
//     author : "Пушкин А.С.",
//     name : "Капитанская дочка",
//     count : 500  
// }

// // innerHTML - позволяет добавить HTML в элемент

// main.innerHTML = `
//     <div class="book">
//         <h1>Название: ${book.name}</h1>
//         <p>Автор: ${book.author}</p>
//         <p>Количество страниц: ${book.count}</p>
//     </div>
// `


const main = document.querySelector("main")

const books = [
    {   
        id : 1,
        author : "Пушкин А.С.",
        name : "Капитанская дочка",
        count : 500  
    },
    {
        id : 2,
        author : "Толстой",
        name : "Война и мир",
        count : 1000
    },
    {
        id : 3,
        author : "Достоевский",
        name : "Преступление и наказание",
        count : 700
    }
]
// Вывести все объекты из массива с соотв-й разметкой
// Вывести только те книги, количество страниц которых > 600
// books.filter(book => {
//     return book.count > 600
// }).map(book => {
    // main.innerHTML += `
    // <div class="book">
    //     <h1>Название: ${book.name}</h1>
    //     <p>Автор: ${book.author}</p>
    //     <p>Количество страниц: ${book.count}</p>
    //     <button>Удалить</button>
    // </div>
    // `
// })

function showBooks(arr) {
    arr.map(book => {
        main.innerHTML += `
        <div class="book book-${book.id}">
            <h1>Название: ${book.name}</h1>
            <p>Автор: ${book.author}</p>
            <p>Количество страниц: ${book.count}</p>
            <button class="delete-btn" id="${book.id}">Удалить</button>
        </div>
        `
    })
}
showBooks(books)

// Удаление 
const buttons = document.querySelectorAll(".delete-btn")
// console.log(buttons) // список

buttons.forEach(button => {
    button.addEventListener("click", () => {
        console.log(button.parentElement)
        button.parentElement.remove()
        // const idAtr = button.getAttribute("id") // узнаем какой из 3х постов юзер хочет удалить
        // const delBook = document.querySelector(".book-" + idAtr)  // .book-3
        // delBook.remove() // позволяет удалить html элемент из DOM
    })
})

/*
    1. При нажатии на кнопку удалить, удалять элемент из массива books. Отфильтровать books, чтобы
        там не было элемента с id элемента, который мы хотим удалить
    2. showBooks()

    1. Понять какой элемент удалять. При клике вытаскивать id кнопки.
    2. Удалять родителя кнопки, по которой мы нажали. .parentElement().remove()
*/


// Вручную. Так не делать
// main.innerHTML = `
//     <div class="book">
//         <h1>Название: ${books[0].name}</h1>
//         <p>Автор: ${books[0].author}</p>
//         <p>Количество страниц: ${books[0].count}</p>
//     </div>
//     <div class="book">
//         <h1>Название: ${books[1].name}</h1>
//         <p>Автор: ${books[1].author}</p>
//         <p>Количество страниц: ${books[1].count}</p>
//     </div>
//     <div class="book">
//         <h1>Название: ${books[2].name}</h1>
//         <p>Автор: ${books[2].author}</p>
//         <p>Количество страниц: ${books[2].count}</p>
//     </div>
// `

// let main = {
//     innerHTML : '',
//     fn : function() {
        
//     },
//     innerText : '',
//     style : {
//         width: "100%",
//         height: "auto"
//     }
// }
// main.innerHTML
// main.fn()


// let user = {
//     name : "Arsen"
// }
// // user.name += "Arsen 2"
// user.name = user.name + " Arsen2"
// // user.name += "Arsen"

// console.log(user.name) // "Arsen Arsen2"


