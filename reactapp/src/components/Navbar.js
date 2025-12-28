import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'
function Navbar(){
    return(
        <nav className='navbar'>
            <Link className='navbar a' to="/">Dashboard</Link>
            <Link className='navbar a' to="/add">Add Patient</Link>
        </nav>
    )
}
export default Navbar