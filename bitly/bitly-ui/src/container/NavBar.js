import React from 'react';
import {Link} from 'react-router-dom'

const NavBar = () =>{
    return(
        <div style={{ display: 'flex', flexDirection: "column", justifyContent : "center"}}>
            <Link to= '/register'>Register</Link>
            <Link to= '/'>Home</Link>
            <Link to= '/signing'>Sign In</Link>
            
        </div>
    )
}

export default NavBar