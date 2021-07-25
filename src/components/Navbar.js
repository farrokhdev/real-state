import React,{useState,useEffect} from 'react';
import {Nav ,HamburgerMenu , Logo , Menu , MenuLinks} from '../styles/NavStyles';
import { menuData } from '../data/MenuData';
import { Button } from './Button';
import { useLocation } from 'react-router';




const Navbar = ({toggle,activeIndex,setActiveIndex}) => {

  const [navBg, setNavBg] = useState(false);
  

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/about") {
      setNavBg(true);
    } else {
      setNavBg(false)
    }
  }, [location]);

   
    return (
     
        <Nav navBg={navBg}>
           <Logo to="/">State</Logo>
           <Menu>
              {menuData.map((item , index)=>{
                 const{title,link}=item;
                 
                 return(
                    
                  <MenuLinks
                  to={link} key={index}
                  className={activeIndex===index && "active"}
                  onClick={()=>setActiveIndex(index)}
                  >
                  {title}
                  </MenuLinks>
                  
                 )
              })}
           </Menu>
           <HamburgerMenu onClick={toggle}/>
           <Button to="/contact" primary={true}>
              Contact Us
            </Button>
           
        </Nav>
       
    )
}

export default Navbar
