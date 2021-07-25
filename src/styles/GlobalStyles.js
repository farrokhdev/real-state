import { createGlobalStyle } from "styled-components";
import { fontSize, colors, Padding, fontWeight } from "./Variables";

const GlobalStyle = createGlobalStyle`

* ,
*::before,
*::after{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*::selection{
  background-color:#3E50A4 ;
}


/* font raleway */


body{
    font-family:"Raleway"  , sans-serif ;
}

a{
  text-decoration:none;
}

.section-title{
  width:fit-content;
  position: relative;
  padding: 0px 0px 10px 0px;
  margin-bottom: 40px;
}

.section-title::before{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: ${colors.colorBlack};
  width: 50%;
  height: 1px;
}

.section-title h2{
  font-size: ${fontSize.font3};
  font-weight: ${fontWeight.fontSemi};
  color:${colors.colorBlack}
}

@media screen and (max-width:700px){
  .section-title h2{
  font-size: ${fontSize.font4};
}
}
@media screen and (max-width:500px){
  .section-title h2{
  font-size: ${fontSize.font5};
}
}




`;

export default GlobalStyle;
