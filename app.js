import {auth, app, db,createUserWithEmailAndPassword} from './firebaseConfig.js'



const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#inputPassword')

const signupBtn = document.querySelector('#signup')

signupBtn.addEventListener('click', signupHandler)

async function signupHandler() {
    try {
        const response = await createUserWithEmailAndPassword(auth, email.value, password.value)

        console.log(response, "==>>response")

        if (response.user) {
            addUserHandler(response.user.uid)
        }
    } catch (error) {
        console.log(error)
    }
    window.location.href = './login/login.html'
}

