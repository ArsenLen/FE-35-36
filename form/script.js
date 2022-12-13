const form = document.querySelector('form')
const email = document.querySelector('input')
const pass = document.querySelector('input[type="password"]')

const users = [
    {
        email: "laurie10@mail.ru",
        password: "123"
    },
    {
        email: "lauri10@mail.ru",
        password: "123"
    },
    {
        email: "laur10@mail.ru",
        password: "123"
    }
]

const auth = ({email, password}) => {
    return users.some(user => user.email === email && user.password === password)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    const currentUser = {
        email : email.value,
        password : pass.value
    }
    if(auth(currentUser)) {
        localStorage.setItem('user', JSON.stringify(currentUser))
        window.location.replace("./profilePage.html")
    } else {
        console.log('логин или пароль неверный')
    }
})