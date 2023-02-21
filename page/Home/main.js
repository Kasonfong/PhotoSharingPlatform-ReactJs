import { useState, useEffect } from 'react'
import './main.css'
import React from 'react'
import axios from "../../axios"


import Post from '../Post/post'

const Main = ({ isLogIn, logInUser }) => {


    const [posts, setPosts] = useState([])



    useEffect(() => {
        get_data()

    }, [])




    const get_data = async () => {

        try {
            const res = await axios.get("/posts");
            //console.log(axios_data.data)
            console.log(isLogIn)
            console.log(logInUser)


            console.log(res.data)
            setPosts(res.data)


        } catch (err) {
            alert(err.message);
        }


    }


    return <div>


        {
            posts.slice(0).reverse().map((posts) => {

                return <Post author={posts.author} time={posts.time} date={posts.date} description={posts.description} photo={posts.photo} />

            })


        }


    </div>

}

export default Main