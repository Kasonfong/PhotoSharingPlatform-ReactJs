// import { useState, useEffect } from 'react'
import './footer.css'

import React from 'react';

import { Link } from 'react-router-dom'


const Footer = () => {



    return <div className='footer'>



        <p className='by'> By Kason Fong</p>

        <Link to="/contactMe" className='footerLink'>Contact Me</Link>



    </div>

}

export default Footer