import { useState } from 'react'
import './createAC.css'
import '../common.css'
import { v4 } from 'uuid'
import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


import axios from "../../axios"

const CreateAC = () => {

    const navigate = useNavigate();

    const [username, setUsername] = useState("")

    const [password, setPassword] = useState("")

    const [passwordConfirm, setPasswordConfirm] = useState("")

    function usernameChange(e) {
        setUsername(e.target.value)
    }

    function passwordChange(e) {
        setPassword(e.target.value)
    }

    function passwordConfirmChange(e) {
        setPasswordConfirm(e.target.value)
    }


    async function addData() {


        if (password === passwordConfirm) {


            // To-do : tackle if new user username same as old user 
            let id = v4();
            let acInfo = { username, password, id }

            const existing = await axios.get("/username")

            if ((existing.data.filter(user => user.username === username)).length === 1) {
                //exist already 

                alert("this username has been used for registeration")
            }
            else {

                axios.post("/username", acInfo);
                alert('success')
                //console.log(acInfo)
                navigate('/signIn')
            }

        }
        else {
            alert("password fields should be identical")
        }

    }



    return <div className='main' >




        <div className='infoArea'>

            <h1 className='info'>Create Account</h1>




            <div className='logInArea'>


                <input type="username" placeholder='username' onChange={usernameChange} />

            </div>

            <div className='logInArea'>


                <input type="password" placeholder='Password' onChange={passwordChange} />
            </div>


            <div className='logInArea'>


                <input type="password" placeholder='Password again please' onChange={passwordConfirmChange} />
            </div>



            <div className='newUserArea'>
                <button onClick={addData} > Sumbit</button>
            </div>
            <div className='newUserArea'>
                <NavLink className='button' to="/signIn"> Already have an account? Log in Now!</NavLink>
            </div>


        </div>


    </div>

}

export default CreateAC