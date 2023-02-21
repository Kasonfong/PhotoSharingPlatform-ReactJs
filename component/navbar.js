import './navbar.css'



import React from 'react';

import { Link, useNavigate } from 'react-router-dom'

const Navbar = ({ isLogIn, logInUser, setIsLogIn, setlogInUser }) => {

    const navigate = useNavigate()

    function logOut() {
        alert('log out luuuu byeeeeee')
        setIsLogIn('false')
        setlogInUser("")
        navigate('/')

    }

    return <nav className='navBarItem'>
        <h1>

            <Link className="navBarLogo" to="/"> PhotoSharing~~~</Link>
        </h1>



        <ul className='navMenu'>



            {logInUser
                ?
                (<>
                    <Link className="navLinks" to="/"> Home</Link>
                    <Link className="navLinks" to="/ownPosts"> Your Own Posts</Link>
                    <Link className="navLinks" to="/uploadPhoto"> Upload photos</Link>
                    <Link className="navLinks" to="/settings"> Settings</Link>
                    <button className='button' onClick={logOut}> Sign Out</button>
                </>)
                : (<>

                    <Link className="navLinks" to="/"> Home</Link>
                    <Link className="navLinks" to="/signIn" > Sign in</Link>
                </>)

            }







        </ul>






    </nav>

}
export default Navbar

