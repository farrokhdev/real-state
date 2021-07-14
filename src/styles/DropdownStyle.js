import styled,{css} from "styled-components/macro";
import { Link } from "react-router-dom";
import {RiCloseFill} from "react-icons/ri";
import { fontSize,colors, Padding, fontWeight } from "./Variables";



const Drop = styled.section`
    width: 100%;
    height: 100vh;
    min-height: 700px;
    position: fixed;
    z-index: 120;
    background-color:${colors.color1};
    top:0;
    left:0;
    transition:0.3s ease;
    opacity: ${({isopen})=>(isopen ? 1 : 0)};
    transform: ${({isopen})=>(isopen ? "translateX(0)":"translateX(100%)")};
    /* display:flex; */
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    display: none;

    @media screen and (max-width: 736px) {
      display: flex;
   }

    
`;

const DropWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding: ${Padding.mobilePadding};
    position: relative;
`;

const DropNav = styled.nav`
   width: 100%; 
   height: 100px;
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   align-items: center;
   margin-bottom: 50px;
   position: absolute;
   top: 0;
   left: 0;
   padding: ${Padding.mobilePadding};

`;

const DropLogo = styled(Link)`
   color:${colors.color4};
   font-weight: ${fontSize.fontSemi};
   font-size: ${fontSize.font5};
   text-transform:uppercase;
   letter-spacing: 1px;
   cursor: pointer;

`;

const Icon =styled(RiCloseFill)`
   font-size: ${fontSize.font4};
   color: ${colors.color4};
   cursor: pointer;
   /* display: none; */
   

   @media screen and (max-width: 736px) {
      display: block;
   }
`;

const MenuLinksWrap = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    row-gap: 70px;

`;
const DropMenuLinks = styled(Link)`
   color: ${colors.color4};
   font-size: ${fontSize.font4};
   text-transform: capitalize;
   letter-spacing: 0.5px;
   cursor: pointer;
   display: block;
   transition: 0.3s ease;
   font-weight: ${fontWeight.fontLight};
   position: relative;
   width: fit-content;
   padding-bottom: 10px;

   &::before{
       content: "";
       width: 0%;
       height: 1px;
       background-color: ${colors.color3};
       position: absolute;
       bottom: 0;
       transition: 0.2s ease;
   }

   &:hover{
       color: ${colors.color3};
   }
   &:hover::before{
       width: 50%;
   }
`;

const SocialsWrapper = styled.div`
    width: 100%;
    position: absolute;
    /* background-color: ${colors.color2}; */
    bottom: 0;
    left: 0;
    min-height: 100px;
    display: flex;
    flex-direction: column;
    padding: ${Padding.mobilePadding};
    margin-bottom: 10px;
`;
const FollowUs = styled.div`

   position: relative;
   padding-bottom: 10px;
   width: fit-content;
   h3{
       font-size: ${fontSize.font5};
       color: ${colors.color4};
       font-weight: ${fontWeight.fontLight};
       letter-spacing: 1px;
   }

   &::before{
       content: "";
       width: 100%;
       height: 1px;
       background-color: ${colors.color4};
       position: absolute;
       bottom: 0;
   }

`;

const Socials = styled.div`
    width: 100%;
    padding:10px 0px;
    display: flex;
    align-items: center;
    column-gap: 20px;

    .social-icons{
        font-size: ${fontSize.font4};
        color: ${colors.color4};
        transition: 0.3s ease;
        cursor: pointer;


        &:hover{
            color: ${colors.color3};
        }   
    }

    .social-btn{
        margin-left: auto;
    }
`;



export {Drop,DropWrapper,DropNav,DropLogo,Icon,MenuLinksWrap,DropMenuLinks,SocialsWrapper,FollowUs,Socials};