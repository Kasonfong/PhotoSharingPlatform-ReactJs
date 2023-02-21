// import { useState, useEffect } from 'react'
import './uploadPhoto.css'
import '../common.css'
import axios from "../../axios"
import { v4 } from 'uuid'

import { useState } from 'react'

import React from 'react'
const UploadPhoto = ({ isLogIn, logInUser }) => {


    const [image, setImage] = useState('')
    // const [photoName, setPhotoNamee] = useState('Choose File')
    // const [uploadedPhoto, setUploadedPhoto] = useState({})

    const [desciption, setDesciption] = useState('')

    function handleImage(e) {
        console.log(e.target.files)
        setImage(e.target.files[0])
    }

    function handleDesciption(e) {

        setDesciption(e.target.value)
    }


    function upload() {
        // console.log(desciption)
        console.log(image.name)



        var today = new Date()


        let day = today.getDate()

        if (day < 10) {
            day = '0' + day
        }

        let month = today.getMonth() + 1

        if (month < 10) {
            month = '0' + month
        }

        const date = today.getFullYear() + '-' + month + '-' + day;

        let minutes = today.getMinutes()

        if (minutes < 10) {
            minutes = '0' + minutes
        }

        const time = today.getHours() + ':' + minutes


        const photoDirectory = image.name
        // record time and date

        //formData? useful?

        const formData = new FormData()
        formData.append('image', image)

        let id = v4()

        axios.post('/posts', {
            "id": id,
            "author": logInUser,
            "date": date,
            "time": time,
            "description": desciption,
            "photo": photoDirectory
            // here photo upload name ? .then can use this name to get the jpeg from express database

        })


        // try {
        //     const res = axios.post('./upload,formData', {
        //         headers: {
        //             'Content-Type': 'multipart/form-data'
        //         }
        //     })


        //     const { fileName, filePath } = res.data

        //     setUploadedPhoto({ fileName, filePath })
        // } catch (err) {
        //     if (err.response.status === 500) {
        //         console.log('problem with server')
        //     } else {
        //         console.log(err.response.data.msg)
        //     }
        // }





    }

    return <div className='main' >


        <div className='infoArea'>




            <h1 className='info'>upload Photo</h1>

            <p className='info'> Please enter your photo description </p>

            <div className='buttonArea'>
                <input type='text' className='input' placeholder='description' onChange={handleDesciption} />
            </div>

            <p className='info'>Please select the photo you would like to post</p>

            <div className='buttonArea'>

                <input type="file" onChange={handleImage}></input>

                <button className='button' onClick={upload}> Confirm </button>
            </div>

        </div>

    </div>

}

export default UploadPhoto