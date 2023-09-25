import React from 'react'
import { Link, Outlet } from 'react-router-dom'

import pic from './down.png'

import './style.css'


const Navbar = () => {
    return (
        <div>


            <ul style={{border:"solid green "}} className='d-flex bg-info justify-content-between m-4 p-5' >

                <li> <img style={{width:"100px"}} src={pic} alt='' /></li>
                <li style={{marginTop:"20px"}} >  <Link className='mrgn' to='/users' >USERS</Link></li>

            </ul>





            <Outlet />


        </div>
    )
}

export default Navbar
