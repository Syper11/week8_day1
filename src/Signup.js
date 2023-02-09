import React from 'react'
import SignUp from './components/SignUpPage';

export default function SignUpForSite() {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const first_name = e.target.first_name.value;
        const last_name = e.target.last_name.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const reqBody = {
            first_name: first_name,
            last_name: last_name,
            username: username,
            email: email,
            password: password
        }

        const url = 'http://localhost:5000/api/signup'
        const options = {
            method: "POST",
            body: JSON.stringify(reqBody),
            headers: {
                "Content-Type": 'application/json'
            }
        }
        if (password!== confirmPassword) {
            console.log('oops password dont match')
        }

        const res = await fetch(url, options);
        const data = await res.json();
        console.log(data)

    };




    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name='first_name' />
                <input name='last_name' />
                <input name='username' />
                <input name='email' />
                <input name='password' type='password'/>
                <input name='confirmPassword' type='password'/>
                <button type='submit'>Sign Up</button>

                {/* <SignUp/> */}
            </form>



        </div>
    )
}