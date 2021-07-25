import styled,{css} from 'styled-components/macro';
import {colors,fontSize ,fontWeight , Padding,overlay} from './Variables';
import { Link, NavLink } from 'react-router-dom';
import { BsArrowRight,BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

const{color1 , color2 ,color3,color4}=colors;
const{font1,font2,font3,font4,font5,fontp}=fontSize;
const{fontBlack,fontBold,fontSemi,fontNormal,fontLight,fontExLight}=fontWeight;
const{mobilePadding,descPadding}=Padding;

const HeroSec=styled.section`
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    background: ${color1};
    position: relative;
    overflow: hidden;
`;


const HeroWrapper=styled.div`
    width: 100%;
    height: 100%;
    /* background: ${color1}; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: relative;
`;
const Slides=styled.div`
    width: 100%;
    height: 100%;
    z-index: 1;
    
`;
const Slide=styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`;

const SlideImgWrap=styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;

    &::before{
        content: '';
        width: 100%;
        height: 100%;
        z-index: 2;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0.5;
        background: linear-gradient(90deg, rgba(0,0,0,0.8) 0%, rgba(0,0,0,5) 100%);
        overflow: hidden;
        pointer-events: none;
        -webkit-user-select: none; /* Safari */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* IE10+/Edge */
        user-select: none; /* Standard */
        
    }

`;
const SlideImg=styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    pointer-events: none;
    -webkit-user-select: none; /* Safari */
    -moz-user-select: none; /* Firefox */
    -ms-user-select: none; /* IE10+/Edge */
    user-select: none; /* Standard */
`;

const SlideContent=styled.div`
    width: 100%;
    height: 100%;
    /* position: relative; */
    z-index: 2;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    justify-content: center;
    gap: 30px;
    padding:${descPadding};


    @media screen and (max-width: 736px) {
      padding: ${mobilePadding};
   }
`;
const Title=styled.h1`
    font-size: ${font1};
    font-weight: ${fontBold};
    color: ${color4};
    text-transform: uppercase;
    letter-spacing: 1px;

    @media screen and (max-width: 736px) {
      font-size: ${font2};
   }
    @media screen and (max-width: 500px) {
      font-size: ${font3};
   }
    
`;
const Price=styled.h3`
    font-size: ${font4};
    font-weight: ${fontSemi};
    color: ${color4};

    @media screen and (max-width: 736px) {
      font-size: ${font5};
   }
   @media screen and (max-width: 500px) {
      font-size: ${fontp};
   }
    

`;



const Arrow=styled(BsArrowRight)`
    font-size: ${fontp};
    margin-left: 5px;
    width: 20px;
    height: 20px;
`;


const SliderButtons = styled.div`
    position: absolute;
    bottom: 80px;
    right: 80px;
    z-index: 3;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    @media screen and (max-width: 736px) {
        right: 40px;
        bottom: 40px;
   }
`;

const slidebtn = css`
    margin-left: 5px;
    width: 50px;
    height: 50px;
    color: ${color4};
    background: ${color1};
    border-radius: 50%;
    transition: 0.3s ease;
    cursor: pointer;

    &:hover{
    color: ${color1};
    background: ${color4};
    }

    @media screen and (max-width: 736px) {
        width: 35px;
        height: 35px;
   }

    
`;

const NextBtn=styled(BsArrowRightShort)`
   ${slidebtn};
`;
const PrevBtn=styled(BsArrowLeftShort)`
   ${slidebtn}
`;


export {HeroSec,HeroWrapper,Slides,Slide,SlideImg,SlideImgWrap,SlideContent,Title,Price,Arrow,SliderButtons,NextBtn,PrevBtn};