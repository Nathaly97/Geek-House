const signupForm = document.querySelector('#signupForm')

signupForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    const name = document.querySelector('#name').value 
    const email = document.querySelector('#email').value
    const password = document.querySelector('#password').value

    const Users = JSON.parse(localStorage.getItem('Users')) || []

    const isUserRegistered = Users.find(user => user.email ===email)

    if (isUserRegistered) {
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'El usuario ingresado ya se encuentra registrado'

        })
        return
    }

    Users.push ({ name, email, password})

    localStorage.setItem('Users', JSON.stringify(Users))

    Swal.fire({
        icon: 'success',
        title: 'Registro Exitoso',
        text: 'Tu registro ha sido exitoso'

    }).then (() => {
        window.location.href = 'Login.html'

    })


})