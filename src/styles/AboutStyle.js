import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";
import { fontSize, colors, Padding, fontWeight } from "./Variables";

const AboutSec = styled.section`
  width: 100%;
  /* min-height: 500px; */
  background-color: ${colors.colorWhite};
  padding: ${Padding.descSecPadding};
  max-width: 1200px;
  margin: 0 auto;

  @media screen and (max-width: 736px) {
    padding: ${Padding.mobileSecPadding};
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

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;
const AboutParagraph = styled.div`
  p {
    line-height: 1.5rem;
    font-size: ${fontSize.fontp};
    font-weight: ${fontWeight.fontSemi};
    margin-bottom: 40px;
  }

  @media screen and (max-width: 700px) {
    p {
      font-size: ${fontSize.font7};
      font-weight: ${fontWeight.fontNormal};
    }
  }

  @media screen and (max-width: 500px) {
    p {
      font-size: ${fontSize.font8};
      font-weight: ${fontWeight.fontNormal};
    }  
  }
`;
const AboutImage = styled.div`
  img {
    object-fit: cover;
    object-position: center;
    width: 100%;
    height: 100%;
    display: block;
    z-index: 2;
    position: relative;
    /* transform: translateX(-20px); */
    box-shadow: 20px 20px 0px 0px #3e50a475;
  }

  @media screen and (max-width: 736px) {
    img {
      box-shadow: none;
    }
  }
`;

export { AboutSec, AboutWrapper, AboutContent, AboutParagraph, AboutImage };
