// После отправки формы добавлять продукт в корзину
// Переменные
const addForm = document.querySelector('.add-form') // форма добавления продукта
const productName = document.querySelector(".add-name") // input названия продукта
const productsWrapper = document.querySelector(".products-wrapper") // контейнер продуктов
const notification = document.querySelector(".notification") // уведомление

// Отображение при первой загрузке
const showProducts = () => {
    const products = localStorage.getItem("products") 
        ? JSON.parse(localStorage.getItem("products"))
        : []
    if(products.length > 0) {
        console.log("hello")
        products.forEach((product) => {
            createProducts(product.id, product.name)
        })
    }
}
showProducts()

// Добавить продукт
const addProduct = (e) => {
    e.preventDefault()
    const currProduct = productName.value
    const id = new Date().getTime().toString()

    if(currProduct) {
        // Создание элемента в html
        const element = document.createElement("div")
        element.setAttribute("id", id)
        element.classList.add("product")
        element.innerHTML = `
            <h5 class="product-name">${currProduct}</h5>
            <div class="product-actions">
                <button class="delete-btn">Удалить</button>
                <button class="edit-btn">Редактировать</button>
            </div>
        `
        // Добавить слушатели события
        const deleteBtn = element.querySelector(".delete-btn")
        deleteBtn.addEventListener("click", deleteProduct)
        // Добавить элемент в контейнер продуктов
        productsWrapper.appendChild(element)
        // Добавить в localStorage. id и currProduct - данные продукта, который хотим добавить
        addToLocalStorage(id, currProduct)
        // Отобразить уведомление
        showNotification()
        // Вызов функции сброса
        resetOptions()
    }
}

// Создание элемента
const createProducts = (id, name) => {
  const element = document.createElement("div");
  element.setAttribute("id", id);
  element.classList.add("product");
  element.innerHTML = `
                <h5 class="product-name">${currProduct}</h5>
                <div class="product-actions">
                    <button class="delete-btn">Удалить</button>
                    <button class="edit-btn">Редактировать</button>
                </div>
            `;
  // Добавить слушатели события
  const deleteBtn = element.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", deleteProduct);
  // Добавить элемент в контейнер продуктов
  productsWrapper.appendChild(element);
};

// Уведомление
const showNotification = () => {
    notification.style.display = "block"
    // через 3 секунды нужно скрывать обратно. none
    setTimeout(() => {
        notification.style.display = "none"
    }, 3000)
}

// Добавление в localStorage
const addToLocalStorage = (id, name) => {
    const products = localStorage.getItem("products") 
        ? JSON.parse(localStorage.getItem("products"))
        : []
    const newProduct = { id, name } 
    products.push(newProduct)
    localStorage.setItem('products', JSON.stringify(products))
}

// Очистка полей ввода и т.д 
const resetOptions = () => {
    // Очистка поля ввода
    productName.value = ''
}

// Удалить продукт
const deleteProduct = () => {

}

// слушаем событие сабмит у addForm
addForm.addEventListener("submit", addProduct)

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