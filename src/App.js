import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import { SlidesData as slides } from './data/SlidesData'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero slides={slides} />
    </>
  )
}

export default App

