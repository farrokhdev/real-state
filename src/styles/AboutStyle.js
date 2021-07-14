import styled,{css} from "styled-components/macro";
import { Link } from "react-router-dom";
import { fontSize,colors, Padding, fontWeight } from "./Variables";

const AboutSec = styled.section`
    width: 100%;
    min-height: 500px;
    background-color: ${colors.colorWhite};
    padding: ${Padding.descSecPadding};



    @media screen and (max-width: 736px) {
      padding:${Padding.mobileSecPadding};
   }
`;

const AboutWrapper = styled.div`
    width: 100%;
    height: 100%;
    
`;

const AboutContent = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 50px;
    

`;
const AboutParagraph = styled.div`
    
    p{
        line-height: 1.5rem;
        font-size: ${fontSize.fontp};
        font-weight: ${fontWeight.fontSemi};
        margin-bottom: 40px;
    }
`;
const AboutImage = styled.div`
    height: 300px;
    width: 300px;
    /* overflow: hidden; */
    position: relative;
    z-index: 2;
    transform: translateX(-20px);
    


    &::before{
        content: "";
        position: absolute;
        top: 20px;
        left: 20px;
        background-color: ${colors.color1};
        opacity: 0.5;
        width: 100%;
        height: 100%;
        z-index:-1;

    }
    
    img{
        object-fit:cover;
        object-position: center;
        width: 100%;
        height: 100%;
        display: block;
        
    }
`;

export {AboutSec,AboutWrapper,AboutContent ,AboutParagraph, AboutImage}