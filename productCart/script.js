// После отправки формы добавлять продукт в корзину
// Переменные
const addForm = document.querySelector('.add-form') // форма добавления продукта
const productName = document.querySelector(".add-name") // input названия продукта
const productsWrapper = document.querySelector(".products-wrapper") // контейнер продуктов

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
    }
}

// Удалить продукт
const deleteProduct = () => {

}

// слушаем событие сабмит у addForm
addForm.addEventListener("submit", addProduct)

/*
    [
        {
            id: 342,
            name: "Молоко"
        },
        {
            id: 332,
            name: "Мука"
        }
    ]
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