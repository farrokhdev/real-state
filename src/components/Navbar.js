import React from 'react';
import {Nav ,HamburgerMenu , Logo , Menu , MenuLinks} from '../styles/NavStyles';
import { menuData } from '../data/MenuData';
import { Button } from './Button';


const Navbar = () => {
    return (
     
        <Nav>
           <Logo to="/">State</Logo>
           <Menu>
              {menuData.map((item , index)=>{
                 const{title,link}=item;
                 return(
                  <MenuLinks to={link} key={index}>{title}</MenuLinks>
                 )
              })}
           </Menu>
           <HamburgerMenu/>
           <Button to="/contact" primary="true">
              Contact Us
            </Button>
           
        </Nav>
       
    )
}

export default Navbar
