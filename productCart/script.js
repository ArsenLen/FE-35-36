// После отправки формы добавлять продукт в корзину
// Переменные
const addForm = document.querySelector('.add-form') // форма добавления продукта
const productName = document.querySelector(".add-name") // input названия продукта
const productsWrapper = document.querySelector(".products-wrapper") // контейнер продуктов
const notification = document.querySelector(".notification") // уведомление
const submitBtn = document.querySelector(".submit-btn") // кнопка сабмит


// состояние - данные, с которыми работает приложение
let editMode = false // начальное состояние приложения - данные с которыми приложение загрузится изначально 
let edittingProductName = "" // начальное состояние. название продукта, который мы сейчас редактируем

// Отображение при первой загрузке
const showProducts = () => {
    const products = localStorage.getItem("products")  // [{name: "milk", id: 3438540320}]
        ? JSON.parse(localStorage.getItem("products"))
        : []
    if(products.length > 0) {
        products.forEach((product) => {
            createProducts(product.id, product.name)
        })
    }
}

// Добавить продукт
const addProduct = (e) => {
    e.preventDefault()
    const currProduct = productName.value // то, что ввел пользователь в инпут
    const id = new Date().getTime().toString() // генерируем id

    // действие добавление продукта
    if(currProduct && !editMode) {
        // Создание элемента в html
        createProducts(id, currProduct)
        // Добавить в localStorage. id и currProduct - данные продукта, который хотим добавить
        addToLocalStorage(id, currProduct)
        // Отобразить уведомление
        showNotification("Продукт добавлен", "success")
        // Вызов функции сброса
        resetOptions()
    } else if(currProduct && editMode) {
        console.log("редактируем элемент")
        // старый id остается, изменяется название продукта, на то, что ввели в input
        // currProduct - это новое название продукта, который редактируем
        // у редактируемого элемента изменить его название на currProduct. 18:00 - 19:30. 
    }
}

// Создание элемента
const createProducts = (id, name) => {
  const element = document.createElement("div"); // создаем тег div
  element.setAttribute("id", id); // добавляем атрибут id со значением, полученным в функцию
  element.classList.add("product"); // добавляем класс product
  element.innerHTML = `
                <h5 class="product-name">${name}</h5>
                <div class="product-actions">
                    <button class="delete-btn">Удалить</button>
                    <button class="edit-btn">Редактировать</button>
                </div>
            `;
  // Добавить слушатель на кнопку удаления
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteProduct);
  // Добавить слушатель на кнопку редактирования
  const editBtn = element.querySelector(".edit-btn")
  editBtn.addEventListener("click", editProduct)
  // Добавить элемент в контейнер продуктов
  productsWrapper.appendChild(element);
};

// Уведомление. 
const showNotification = (text, className) => {
    // добавляем для div класс, который получили аргументом
    notification.classList.add(`${className}`)
    // для тега p внутри уведомления меняем текст на тот, что получили аргументом
    notification.querySelector(".notification-text").innerText = `${text}`
    // отображаем div
    notification.style.display = "block"
    // через 3 секунды скрываем его обратно
    setTimeout(() => {
        notification.style.display = "none"
    }, 3000)
}

// Добавление в localStorage
const addToLocalStorage = (id, name) => {
    const products = getLocalStorage()
    const newProduct = { id, name } 
    products.push(newProduct)
    localStorage.setItem('products', JSON.stringify(products))
}

// Удалить из localStorage
const removeFromLocalStorage = (id) => {
    // id - айди продукта на который нажали, который хотим удалить
    const products = getLocalStorage()
    // из массива products удалить элемент, id которого совпадает с id продукта, который мы получили аргуемтом
    // [{id : 1}, {id : 2}, {id : 3}, {id : 4}]. id = 3 - продукт который хотим удалить
    const newProducts = products.filter(product => product.id !== id)
    localStorage.setItem("products", JSON.stringify(newProducts))
}

const getLocalStorage = () => {
    // получаем то, что уже хранится в локалсторедже. Если что-то есть - то строку в массив и возвращаем
    // если ничего нет, то возвращаем пустой массив
    return localStorage.getItem("products") 
    ? JSON.parse(localStorage.getItem("products"))
    : []  
}

// Очистка полей ввода и т.д 
const resetOptions = () => {
    // Очистка поля ввода
    productName.value = ''
}

// Удалить продукт
const deleteProduct = (e) => {
    // e.target - кнопка на которую мы нажали
    const productElement = e.target.parentElement.parentElement
    // находим id элемента, кнопку "удалить" которого мы нажали
    const id = productElement.id
    // удаляю элемент из html
    productsWrapper.removeChild(productElement)
    // удалим из localStorage, передаем id элемента, который хотим удалить, на который нажали
    removeFromLocalStorage(id)
    // показывать уведомление
    showNotification("Продукт удален", "danger")
}

// Редактировать продукт
const editProduct = (e) => {
    // переводим приложение в режим редактирования
    editMode = true
    // получаем название старого продукта
    const oldProductName = e.target.parentElement.previousElementSibling // <h5 class="product-name">молоко</h5>
    // в режиме редактирования кнопка называется не "добавить", а "редактировать"
    submitBtn.value = "Сохранить"
    // название редактируемого продукта переходит в input. 
    productName.value = oldProductName.innerText
}

// слушаем событие сабмит у addForm
// событие сабмит вызывается и при нажатии на кнопку и при нажатии enter
addForm.addEventListener("submit", addProduct)

// Вызов функции для первого рендеринга. Получаем данные из локалстореджа и отображаем юзеру
showProducts() // immediately invoke

/*
1. Один продукт уже добавлен
    [
        {
            id: 342,
            name: "Молоко"
        }
    ]
    Получить имейющийся массив и к нему добавлять объект, который содержит id и name
2. Пусто 
    []
    Создаем пустой массив, в который хотим добавить объект, содержащий id и name

*/
/*
<div class="product">
    <h5 class="product-name">Название продукта</h5>
    <div class="product-actions">
        <button class="delete-btn">Удалить</button>
        <button class="edit-btn">Редактировать</button>
    </div>
</div>

let element = <div></div>
element.querySelector('.delete-btn')
*/

// greeting()

// function greeting() {

// }

// greeting1()

// const greeting1 = () => {

// }

// greeting2()
// const greeting2 = function() {

// }

// Хойстинг - hoisting. Принцип, когда все переменные и функции отправляются вверх

/*
Методы планирования. Они не вляются частью js
    setInterval(cb, time) - позволяет сделать действие несколько раз через определенный промежуток времени
    setTimeout(cb, time) - позволяет выполнить действие единожды через определенный опреденный промежуток времени
*/


/* 

1. Сделать универсальное уведомление. (принимать текст кнопки и цвет кнопки)
2. Сейчас данные сохраняются в локалсторедж, но при первой загрузке не отображаются,
    нужно отображать данные из локалстореджа при первой загрузке.

*/

/*

    classList - свойтсво объекта html, с помощью которого можно получить список классов элемента
    у него есть несколько методов:
    .add() - добавялет класс
    .remove() - удаляет класс
    .toggle() - переключатель. добавляет класс, если его не было и наоборот.
*/

/*
    ДЗ. При удалении продукта уведомление должно быть красным
        При добавлении продукта уведомление должно быть зеленым

    ДЗ. Закончить процедуру редактирование. Редактировать UI - html. Редактировать localStorage()(map).
*/


/* 
let element

const clickHandler = (name) => {
    console.log('hello')
}

element.addEventListener("click", () => clickHandler("Arsen"))

*/

/*
    C - create - создание
    R - read - чтение
    U - update - обновление, редактирование
    D - delete - удаление
*/

/*
const element = <div class="product" id="234525146"> 
        <h5>Name</h5>
        <div class="product-actions">
            button
            button
        </div>
    </div>

*/