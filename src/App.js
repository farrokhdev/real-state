import React,{useState} from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { SlidesData as slides } from './data/SlidesData'
import Dropdown from './components/Dropdown'
import About from './components/About'


const App = () => {
  const[isopen , setIsopen]=useState(false);
  const toggle =()=>{
    setIsopen(!isopen);
    console.log(isopen);
  }
  return (
    <>
      <Navbar toggle={toggle} />
      <Dropdown isopen={isopen} toggle={toggle}/>
      <Hero slides={slides} />
      <About/>
    </>
  )
}

export default App

