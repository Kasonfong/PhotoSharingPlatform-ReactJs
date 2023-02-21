import './post.css'
import React from 'react'


const Post = ({ author, date, time, description, photo }) => {



    let image = require('../../pictures/' + photo)

    return <div className='main' >




        <div className='postArea'>

            <section className='postDetailsArea'>
                <p className='postByWho'> By {author}</p>
                <p className='postDateAndTime'> {time} {date}</p>
            </section>
            <section className='postDescriptionArea'>
                <p className='postDescription'> {description}</p>
            </section>
            <section className='photoArea'>
                <img src={image} alt="testing " className='photoItself'></img>
            </section>


        </div>

    </div>



}

export default Post 