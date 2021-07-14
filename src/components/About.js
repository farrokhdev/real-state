import React from 'react'
import { AboutContent, AboutImage, AboutParagraph, AboutSec, AboutWrapper } from '../styles/AboutStyle'
import imageOne from '../images/hero/1.jpg'
import { Button } from './Button';


const About = () => {
    return (
        <>
            <AboutSec>
                <AboutWrapper>
                    
                    <AboutContent>
                    <AboutParagraph>
                    <div className="section-title">
                        <h2>About Real State</h2>
                    </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eum non porro amet, et praesentium, ipsa totam deserunt ab neque, aliquid blanditiis debitis qui. Eligendi nihil asperiores minima, architecto ducimus labore molestiae. Inventore ad quaerat pariatur in accusantium corrupti aliquid, recusandae, repudiandae nihil quis facere perspiciatis dolor, alias dolore. Ullam, enim?
                        </p>
                    <Button to="/About" primary="true">
                        Read more
                    </Button>
                    </AboutParagraph>
                    <AboutImage>
                        <img src={imageOne} alt="" />
                    </AboutImage>
                    </AboutContent>
                </AboutWrapper>
            </AboutSec>
        </>
    )
}

export default About
