import { useState } from 'react'
import './signIn.css'
import '../common.css'


import axios from "../../axios"

import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const SignIn = ({ setIsLogIn, setlogInUser }) => {


    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const navigate = useNavigate()


    function usernameChange(e) {
        setUsername(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)
    }

    async function login() {
        console.log(username, password)


        const axios_data = await axios.get("/username");

        if ((axios_data.data.filter(user => user.username === username && user.password === password)).length === 1) {
            alert('log in !')
            setIsLogIn('true')
            setlogInUser(username)
            navigate('/')

        }
        else {

            alert("fail to log in !")
        }




    }

    return <div className='main' >


        <div className='infoArea'>

            <h1 className='info'>sign in </h1>




            <div className='logInArea'>

                <input type="text" className='input' placeholder='username' onChange={usernameChange} />

            </div>

            <div className='logInArea'>


                <input type="password" className='input' placeholder='Password' onChange={passwordChange} />
            </div>

            <div className='logInArea'>
                <button onClick={login} className='button'> Log In </button>
            </div>

            <div className='newUserArea'>
                <p className='info'> New user?</p>
            </div>


            <div className='newUserArea'>




                <NavLink className='button' to="/createAC"> Create Account</NavLink>





            </div>
        </div>




    </div>

}

export default SignIn