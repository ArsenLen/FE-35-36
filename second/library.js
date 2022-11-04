// функция lib позволяет в консоли отобразить результат выполнения функции
// которую в нее передаем

// сюда доступа нет. то есть функция lib не может быть изменена. 
// lib - high ordered function
function lib(callback, a, b) {
    console.log(callback(a, b))
}


// функция myMap - принмает массив и коллбек. Для каждого элемента array вызываем коллбэк
// и возвращаем новый массив, с измененными значениям
function myMap(array, callback) {
    let newArr = []
    
    for(let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], i)) // 1, 2, 3, 4 ,5
    }

    return newArr
}

function forEach(array, callback) {
    for(let i = 0; i < array.length; i++) {
        newArr.push(callback(array[i], i)) // 1, 2, 3, 4 ,5
    }
}
