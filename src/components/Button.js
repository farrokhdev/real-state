import styled from "styled-components";
import { Link } from "react-router-dom";
import { colors ,fontSize, fontWeight } from "../styles/Variables";

const{color1 , color2 ,color3,color4}=colors;
const{font1,font2,font3,font4,font5,fontp,font6}=fontSize;

export const Button =styled(Link)`
    font-size: ${fontp};
    font-weight: ${fontWeight.fontBold};
    background: ${({primary})=>(primary ? color3 : color1)};
    color: ${({primary})=>(primary ? color1 : color4)};
    padding: ${({big})=>(big ? "5px 10px" : "10px 20px" )};
    border-radius:${({small})=>(small ? "10px" : "20px" )};
    outline: none;
    border: none;
    cursor: pointer;
    max-width: 160px;
    text-align:center;
    transition: 0.3s ease;
    font-family: "Raleway";
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;

    

    &:hover{
        background: ${color2} ;
        color: ${color4};
    }

    @media screen and (max-width: 736px) {
      display:${({show})=>(show ? "flex" : "none" )};
      font-size: ${fontSize.font7};
      max-width: 100%;
      width: fit-content;

   }
    


    
    
`;