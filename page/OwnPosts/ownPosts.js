import { useState, useEffect } from 'react'
import './ownPosts.css'
import axios from "../../axios"
import Post from '../Post/post'

import React from 'react'
const OwnPosts = ({ isLogIn, logInUser }) => {
    const [posts, setPosts] = useState([])


    useEffect(() => {
        get_data()

    }, [])



    const get_data = async () => {

        try {
            const res = await axios.get("/posts");

            const ownPost = res.data.filter(post => post.author === logInUser)
            //console.log(axios_data.data)
            console.log(isLogIn)
            console.log(logInUser)


            console.log(ownPost)



            setPosts(ownPost)


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

export default OwnPosts