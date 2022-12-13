const user = localStorage.getItem('user')
const greetingText = document.querySelector('h1')

user ? greetingText.textContent += userName : window.location.replace("./index.html");