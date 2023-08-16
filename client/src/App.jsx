import React from 'react'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Footer from './components/Footer'
import './App.css'
import Browse from './components/Browse'

const App = () => {
  return (
    <>
    <Navbar />
    <Content/>
    <Browse/>
    <Footer />
    </>
  )
}

export default App
