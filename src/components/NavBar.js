import * as React from 'react';
import Button from '@mui/material/Button';
import '../App.css';




function NavBar() {
  return(
    <header className='navbarHeader'>
      <div className='navHeader'>
        <img src="logo.png" className="logoHeader" alt='Logo'/>
        <div><Button variant="contained" color="success">HOME</Button></div>
        <div><Button variant="contained" color="success">PRODUCTOS</Button></div>
        <div><Button variant="contained" color="success">NOSOTROS</Button></div>
        <div><Button variant="contained" color="success">CONTACTO</Button></div> 
        <img src="cart.png" className="logoCarrito" alt='Carrito' />     
      </div>

    </header>
  )
}  
export default NavBar;