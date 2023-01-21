// fetch() - метод, который предоставляет возможность работать с http запросами
// fetch() - возвращает промис

// const promise = new Promise((resolve, reject) => {
//     // описываем работу или алгоритм асинхронной операции
//     // и в конце, когда асинхронная операция закончилась, мы вызываем resolve, прокидывая данные
//     setTimeout(() => {
//         // вытаскиваем данные из БД
//         let num = 15 // curl - метод, который реализует HTTP запрос
//         if(num > 15) {
//             resolve("data") // resolve выполнится, вызовется тогда, когда результат асинхр. операции готов           
//         } else {
//             reject("операция закончилась с ошибкой")
//         }
//     }, 500)
// })

// console.log(promise)

// promise
//     .then((value) => {
//         console.log(value)
//         // res.ok === true ? doSmth : ErorrNotification
//         // 404 
//         // редиректим пользователя на его страницу 
//         return value.json()
//     })
//     .catch((err) => {
//         console.log(err)
//         // отображаем уведомлении об ошибке
//         // сервер упал
//         // throw Error()
//     })

// 1. pending - ожидание
// 2. fulfilled - выполнено
// 3. rejected - отказано

// статус ответа, код ответа - 404, 501, 500, 200 - успешно

// .json() 


/* 
    fetch()
    Получает два аргумента: 
    1. ссылка на ресурс, эндпоинт
    2. options - свойства запроса, в котором лежит метод, заголовки, тело и т д.
         Если GET, то options можно опустить.
*/

// Переменные
const container = document.querySelector('.container')
const form = document.querySelector('form')
const title = document.querySelector("input[name='title']")
const descr = document.querySelector("input[name='descr']")
const URL = "http://localhost:3000/posts"
// функия получения данных с сервера, посредством GET-запроса
const fetchData = () => {
    fetch(URL, {
        method: "GET"
    }) // возвращает промис
    .then((response) => {
        // информация об ответе, status, ok, headers, body([{}])
       return response.json()
    })
    .then(data => {
        showData(data)
        // saveToLocalStorage(data)
        // filterData(data)
    })
}
fetchData()

// функция рендеринга данных с сервера в html
const showData = (arr) => {
    // отобразить данные о посте, которые получили с сервера, в html.
    container.innerHTML = '' 
    arr.map(el => {
        showNewPost(el) // функция отрисовки html разметки с данными объекта el (el = {title: "Title", descr: "Descr"})
    })
}

// слушаем отправку формы 
form.addEventListener("submit", (e) => {
    e.preventDefault()
    // введенные пользователем значения
    const newTitle = title.value
    const newDescr = descr.value
    // объединяем в объект перед отправкой на сервер
    const newPost = {
        title : newTitle,
        descr : newDescr
    }
    addPost(newPost) // требует времени выполнения
})

// функция отправки POST запроса на сервер с телом, получаемым в аргумент
const addPost = (post) => {
    fetch(URL, {
        method : "POST",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(post)
    })
    .then((res) => {
        return res.json()
    })
    .then((data) => {
        // console.log(data) // приходит записанный в бд ресурс, то есть записанный объект
        showNewPost(data)
        clearInputs()
    })
}
// функция отрисовки добавленного элемента после POST-запроса в HTML.
const showNewPost = (post) => {
    container.innerHTML += `
        <div class="post">
            <h5>${post.title}</h5>
            <p class="post-descr">${post.descr}</p>
            <button class="delete-btn" id=${post.id}>Удалить</button>
        </div>
    `
}
// функция очистки поля
const clearInputs = () => {
    title.value = ''
    descr.value = ''
}

// вешаем слушатель события на document
document.addEventListener("click", (e) => {
    if(e.target.className === "delete-btn") { // includes()
        deletePost(e.target)
    }
})

const deletePost = (btn) => {
    fetch(`${URL}/${btn.id}` , {
        method : "DELETE"
    })
    .then(() => {
        // в ответе на DELETE приходить пустой объект {}
        // из HTML удалить элемент,на кнопку которого мы нажали
        // 404/ response.ok === false. 200/ response.ok === true
        if(response.ok) {
            btn.parentElement.remove()
        }
    })
    .catch()
}
/*
    ... 
    UPDATE - (PUT)
    1. Создать кнопку "Редактировать"
    2. Вешаем слушатель события
    3. При нажатии, вызываем фукнцию, которая меняет в карточке элемента теги 
        h5, p на input[type="text"]
        вывести кнопку сохранить 
        UI 
    4. По нажатию на "сохранить" вызывать функцию, которая будет отправлять на сервер обновленные данные,
        введенные в инпуты из п.3
    5. В функции из п4. реализовать fetch(method: "PUT"), в теле передать данные из п4
*/
/*
    ctrl+shift+R - обновить с обновлением кэша

    При отправке DELETE нам нужно обратиться к конкретному документу по его id. 
    const URL = http://localhost:3000/posts
    `${URL}/${id}`
    http://localhost:3000/posts/{id} 
*/

// при нажатии на кнопку удалить, отображать "console.log("удалено")"
// для того, чтобы отличать клики, можно заглянуть в e.target. Если в объекте события
// target имеет класс delete-btn, то делаем что-то

// const Main = () => {
//     const [title, setTitle] = useState('')
//     // title = "e"
//     // title = "et"
//     return (
//         <div>
//             <input 
//                 value={title}
//                 onChange={e => setTitle(e.target.value)} // e // et
//             />
//         </div>
//     )
// }

/*
    
*/

/* 
let obj = {
    innerHMTL : "<div>Hello 3 posts</div>"
}

obj.innerHMTL = "<div></div>"

let obj = {
    innerHTML : "Arsen"
}
*/ 

// let obj = {
//     innerHMTL : "Hello"
// }

// obj.innerHMTL += "Arsen"

// let obj = {
//     innerHMTL : "HelloArsen"
// }



/* 
    fetch("http://localhost:3000/posts", {
        method : "GET",
        headers : {
            "Content-Type" : "application/json"
        }
    })
*/ 

// axios.get("http://localhost:3000/posts")
//     .then(data => console.log(data))

//     async function fetchData() {
//         const data = await axios.get("http://lolalhost:3000/posts") 
//     }
/*
    request - запрос на серва
    response - ответ от сервера на запрос
*/


