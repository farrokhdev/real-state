import styled,{css} from 'styled-components/macro';
import {colors,fontSize ,fontWeight,Padding} from './Variables';
import { Link, NavLink } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";



const{color1 , color2 ,color3,color4}=colors;
const{font1,font2,font3,font4,font5,fontp}=fontSize;
const{fontBlack,fontBold,fontSemi,fontNormal,fontLight,fontExLight}=fontWeight;
const{mobilePadding,descPadding}=Padding;







const Nav = styled.nav`
   height: 100px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
   padding:${descPadding};
   position:${({navBg})=>(navBg ? "block" : "fixed")};
 
   width: 100%;
   z-index: 100;
   background-color:${({navBg})=>(navBg ? color1 : "transparent")};
   @media screen and (max-width: 736px) {
      padding: ${mobilePadding};
   }

`;

    // const NavLink= css``


const Logo = styled(Link)`
   color:${color4};
   font-weight: ${fontSemi};
   font-size: ${font5};
   text-transform:uppercase;
   letter-spacing: 1px;
   cursor: pointer;
`;

const Menu = styled.div`
   display: flex;
   flex-wrap: wrap;
   gap: 20px;
   align-items: center;
   justify-content: center;

   @media screen and (max-width: 736px) {
      display: none;
   }
`;
const MenuLinks = styled(Link)`
   color: ${color4};
   font-size: ${fontp};
   z-index: 100;
   text-transform: capitalize;
   letter-spacing: 0.5px;
   cursor: pointer;
   position: relative;
   padding: 5px;
   transition: 0.3s ease;
`;

const HamburgerMenu =styled(HiMenuAlt3)`
   font-size: ${font4};
   color: ${color4};
   display: none;
   cursor: pointer;
   @media screen and (max-width: 736px) {
      display: block;
   }
`

export {Nav,HamburgerMenu , Logo , Menu , MenuLinks};