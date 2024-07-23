const user = JSON.parse(localStorage.getItem('login_success')) || false

if (!user) {
    Swal.fire({
        icon: 'info',
        title: 'Iniciar Sesión',
        text: 'Debes iniciar sesión para acceder a esta página.',
        confirmButtonText: 'Ir a Iniciar Sesión',
        showCancelButton: false,
        allowOutsideClick: false
    })
}
 const loginForm = document.querySelector('#loginForm')

    loginForm.addEventListener('submit', (e) =>{
        e.preventDefault()

        const email = document.querySelector ('#email').value
        const password = document.querySelector ('#password').value

    const Users = JSON.parse(localStorage.getItem('Users')) || []

    const validUser = Users.find(user => user.email === email && user.password === password)

    if(!validUser){
        Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Usuario y/o contraseñas incorrectos'
        })
        return
    }

        Swal.fire ({
            icon: 'success',
            title: '!Bienvenido¡',
            text: '¡Bienvenido, conoce nuestra pasarela de pagos'
        })

         // Almacena el usuario válido en el almacenamiento local
        localStorage.setItem('login_sucess', JSON.stringify(validUser))

        window.location.href = 'https://buy.stripe.com/test_7sIdTH7Ivd4M0ZG289'
    })