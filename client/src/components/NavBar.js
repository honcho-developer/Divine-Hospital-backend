import React, {} from 'react'
import {NavLink} from 'react-router-dom'
import '../App.css'

const NavBar =()=>  {
    
        return(
            <div>
                <nav className="nav">
                    <ul className="ul">
                        <NavLink to="/">  <li className="li" >Home</li></NavLink>
                        <NavLink to="/doctor">  <li className="li" >Doctor</li></NavLink>
                        <NavLink to="/patient-page">  <li className="li" >Patient Page</li></NavLink>
                       

                        
                    </ul>
                </nav>
            </div>
        )
    
}

export default NavBar