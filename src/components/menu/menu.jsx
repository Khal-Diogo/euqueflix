import React from 'react'
import './menu.css'
import logo from '../../assets/img/euqflix-logo.png'
import Button from '../Button/Button'


function Menu(){
    return (
        <nav className='Menu'>
            <a href='/'> 
                <img className='Logo' src={logo} alt='' />
            </a>

            <Button className='ButtonLink' href='/'>Novo Video</Button>
        </nav>
    )
}

export default Menu