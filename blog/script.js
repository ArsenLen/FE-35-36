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
// функия получения данных с сервера, посредством GET-запроса
const fetchData = () => {
    fetch("http://localhost:3000/posts", {
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
        container.innerHTML += `
            <div class="post">
                <h5>${el.title}</h5>
                <p class="post-descr">${el.descr}</p>
            </div>
        `
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
    fetch("http://localhost:3000/posts", {
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
        </div>
    `
}
// функция очистки поля
const clearInputs = () => {
    title.value = ''
    descr.value = ''
}


const Main = () => {
    const [title, setTitle] = useState('')
    // title = "e"
    // title = "et"
    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)} // e // et
            />
        </div>
    )
}

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


