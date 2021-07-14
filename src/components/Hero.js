import React,{useState,useEffect,useRef} from 'react'
import { HeroSec , HeroWrapper, Slide, SlideContent, SlideImg , SlideImgWrap, Slides,Title ,Price ,Arrow,SliderButtons,NextBtn,PrevBtn} from '../styles/Herostyle'
import { Button } from './Button';





const Hero = ({slides}) => {
    const[index,setIndex]=useState(0);
    const length=slides.length;
    const timeout = useRef(null);

    const checkIndex=(indexNum)=>{
        if(indexNum > length-1){
            return 0
        }
        if(indexNum < 0){
            return length -1
          }
        
          return indexNum;

    }

    // useEffect(() => {
    //     const nextSlide =()=>{
    //      setIndex((index)=>{
    //          let newIndex =index + 1;
    //          return(checkIndex(newIndex))
    //      });
    //     }

    //    timeout.current = setTimeout(nextSlide,3000);
    //    return function (){
    //        if(timeout.current){
    //            clearTimeout(timeout.current);
    //        }
    //    }

    //  }, [index , length])

    const nextSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }

        setIndex((index)=>{
            let newIndex =index + 1;
            return(checkIndex(newIndex))
        });

        // console.log(index);
    }
    const prevSlide=()=>{
        if(timeout.current){
            clearTimeout(timeout.current);
        }

        setIndex((index)=>{
            let newIndex =index - 1;
            return(checkIndex(newIndex))
        });

        // console.log(index);
    }
    
    if(!Array.isArray(slides) || slides.length <= 0){
        return false;
    }


    return (
        <>
        <HeroSec>
            <HeroWrapper>
            <Slides>
                {slides.map((slide,k)=>{
                   const{image,title,price,path,alt,label}=slide;
                    return(
                        <Slide key={k}>
                            {k===index && (
                                <>
                                <SlideImgWrap>
                                <SlideImg src={image} alt={alt} />
                                </SlideImgWrap>
                                <SlideContent>
                                    <Title>
                                        {title}
                                    </Title>
                                    <Price>
                                        {price}
                                    </Price>
                                    <Button to={path} primary="true"
                                    show="true">
                                        {label}
                                        <Arrow/>
                                    </Button>
                                </SlideContent>
                                </>
                            )}

                        </Slide>
                    )
                   
                })}
            </Slides>
            <SliderButtons>
                <PrevBtn onClick={prevSlide}/>
                <NextBtn onClick={nextSlide}/>
            </SliderButtons>
            </HeroWrapper>
        </HeroSec>
        </>
    )
};

export default Hero
