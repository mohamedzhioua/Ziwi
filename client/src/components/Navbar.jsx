import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <nav class="topnav">
                <a className="navbar-brand" > ziwi hight-tech company</a>

                <Link to="/Home">Home</Link>


                {/* <Link className='login' to="/login"> login / Register</Link> */}
                <Link className='logout' to="/logout"> logout</Link>


            </nav>
        </div>
    )
}

export default Navbar