import { useState } from 'react'
import './settings.css'

import axios from "../../axios"
import '../common.css'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Settings = ({ isLogIn, logInUser, setIsLogIn, setlogInUser }) => {


    const [oldPassword, setOldPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [newPasswordConfirm, setNewPasswordConfirm] = useState("")


    const navigate = useNavigate()

    function oldPasswordInput(e) {
        setOldPassword(e.target.value)
    }

    function newPasswordInput(e) {
        setNewPassword(e.target.value)
    }

    function newPasswordConfirmInput(e) {
        setNewPasswordConfirm(e.target.value)
    }


    function logOut() {
        alert('Please log in again ')
        setIsLogIn('false')
        setlogInUser("")
        navigate('/')

    }




    async function updatePassword() {

        if (newPassword === newPasswordConfirm) {

            const res = await axios.get("/username")
            if ((res.data.filter(user => user.username === logInUser && user.password === oldPassword)).length === 1) {

                const info = (res.data.filter(user => user.username === logInUser && user.password === oldPassword))


                const id = info[0].id


                axios.put(`/username/${id}`, {

                    username: logInUser,
                    password: newPassword,
                    id: id

                })

                alert('updated!')
                logOut()

            }
            else {
                alert('wrong password ')
            }

        }
        else {
            alert("New password fields should be identical")
        }
    }


    return <div className='main' >


        <div className='infoArea'>


            <h1 className='info'>Change Password</h1>

            <div className='logInArea'>
                <input type="password" placeholder='please enter your password' className='input' onChange={oldPasswordInput}></input>
            </div>

            <div className='logInArea'>
                <input type="password" placeholder='please enter your new password' className='input' onChange={newPasswordInput}></input>
            </div>

            <div className='logInArea'>
                <input type="password" placeholder='please enter your new password again' className='input' onChange={newPasswordConfirmInput}></input>

            </div>

            <div className='newUserArea'>
                <button className='button' onClick={updatePassword}>Submit</button>

            </div>



        </div>




    </div>

}

export default Settings