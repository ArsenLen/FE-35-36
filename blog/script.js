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
//         // редиректим пользователя на его страницу 
//         return value.json()
//     })
//     .catch((err) => {
//         console.log(err)
//         // отображаем уведомлении об ошибке
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

fetch("http://localhost:3000/posts") // возвращает промис
    .then((response) => {
       return response.json()
    })
    .then(data => console.log(data))

const showData = (arr) => {
    // отобразить данные о посте, которые получили с сервера, в html. 
}
 
// axios.get("http://localhost:3000/posts")
//     .then(data => console.log(data))

//     async function fetchData() {
//         const data = await axios.get("http://lolalhost:3000/posts") 
//     }
/*
    request - запрос на серва
    response - ответ от сервера на запрос
*/


