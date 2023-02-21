// import { useState, useEffect } from 'react'
import './header.css'
import React from 'react'

const Header = () => {



    return <div className='header' >


        <section>
            <h1 className='logoName'>PhotoSharing</h1>
        </section>

        <section>
            <input type={'email'}></input>
            <br></br>
            <br></br>
            <input type={'password'}></input>
            <br></br>
            <br></br>
            <button> Log in! </button>
        </section>


        <section>

            <button> create account</button>

        </section>



    </div>

}

export default Header