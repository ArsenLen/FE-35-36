// ****** select items **********
const form = document.querySelector(".add-form");
const productName = document.querySelector(".product-name");
const submitBtn = document.querySelector(".submit-btn");
const productList = document.querySelector(".products-wrapper")
// // edit option
// let editElement;
// let editFlag = false;
// let editID = "";
// ****** event listeners **********

// submit form
form.addEventListener("submit", addItem);

// add item
function addItem(e) {
    e.preventDefault();
    const currProduct = productName.value;
    const id = new Date().getTime().toString();
  
    if (currProduct) {
      const element = document.createElement("div");
      element.setAttribute("id", id);
      element.classList.add("product");
      element.innerHTML = `
                <h5>${currProduct}</h5>
                <div class="product-actions">
                    <button class="delete-btn">Удалить</button>
                    <button class="edit-btn">Редактировать</button>
                </div>
            `;
      // add event listeners to both buttons;
      const deleteBtn = element.querySelector(".delete-btn");
      deleteBtn.addEventListener("click", deleteItem);
      const editBtn = element.querySelector(".edit-btn");
      editBtn.addEventListener("click", editItem);
  
      // добавить в список
      productList.appendChild(element);
      // показать уведомление
    //   displayAlert("item added to the list", "success");
      // добавляем в локал сторедж
    //   addToLocalStorage(id, value); 
      // возвращаем пустые инпуты
    //   setBackToDefault();
    } 
}

function deleteItem(e) {

}

function editItem(e) {

}

function addToLocalStorage(id, value) {
    
}

function removeFromLocalStorage(id) {
    
}