import { createGlobalStyle } from "styled-components";


const GlobalStyle =createGlobalStyle`

* ,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* font raleway */


body{
    font-family:"Raleway"  , sans-serif ;
    background-color: beige;
}

a{
  text-decoration:none;
}





`;

export default GlobalStyle;