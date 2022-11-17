// При нажатии на кнопки менять цвет body на соотв-й

/*
    1. Ищем каждую кнопку по ее id. querySelector. 
    2. На каждую вешаем слушатель события - клика. addEventListener "click"
    3. В обработчике события создаем действие, которое позволит изменить цвет.
         document.body.style.backgroundColor = "red"
    4. При нажатии на кнопку img, нужно менять фон на картинку
        document.body.style.backgroundImage = "url(./img1.jpg)"
*/

// const redBtn = document.querySelector("#red")
// const greenBtn = document.querySelector("#green")
// const blueBtn = document.querySelector("#blue")
// const imgBtn = document.querySelector("#img")

// redBtn.addEventListener("click", () => {
//     document.body.style.background = "red"
// })

// greenBtn.addEventListener("click", () => {
//     document.body.style.background = "green"
// })

// blueBtn.addEventListener("click", () => {
//     document.body.style.background = "blue"
// })

// imgBtn.addEventListener("click", () => {
//     document.body.style.background = "url(./img1.jpg)"
// })

const buttons = document.querySelectorAll(".item")
// console.log(buttons) // массивоподобным списком узлов

const buttonsArr = Array.from(buttons)  // Array.from() - позволяет создать массив из массивоподобных структур данных

buttonsArr.map(button => {
    button.addEventListener("click", () => {
        const idAtr = button.getAttribute("id") // red, green, blue
        document.body.style.background = idAtr
    })
})

// ДЗ. При нажатии на кнопку случайный цвет, менять цвет фона на случайный.
// 

/*
    1. Получить атрибут id у кнопки, на которую кликнули. .getAttribute('id')
    2. Менять свойство background на строку, которую получили из атрибута id
*/



/* 
    body {
        background-color: red;
        background-image: url(./img1.jpg);
    }

    body {
        background: red;
    }
*/ 

