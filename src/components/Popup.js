import React, { useState } from 'react'
import Account from '../components/Account'


const Pop = () => {
    const [login, setLogin] = useState(true)

    const remove = (e) => {
        e.preventDefault();
        document.querySelector('.add').classList.remove("main");
        e.target.parentElement.parentElement.style.display = 'none'
    }

    if (!login) {
        return (
            <div className="pop-up sign-up">
                <Account />
            </div>
        )
    }

    return (
        <div className="pop-up">
            <h3>Login to your account<i className="fas fa-times" onClick={remove} /></h3>
            <p>Email</p>
            <input type="text" placeholder="Enter Your Email Address" />
            <p>Password</p>
            <input type="text" placeholder="Enter Your Password" />
            <button>Login</button>
            <div id="create" onClick={() => setLogin(false)}>
                <p>Dont have an account? <a href>Create one</a></p>
            </div>
        </div>
    )
}

export default Pop
