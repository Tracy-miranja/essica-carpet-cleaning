// eslint-disable-next-line no-unused-vars
import React from 'react'
import Header from './components/header/header'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './components/Home/Home'
import About from './components/About/About'
import Services from './components/Services/Services'
import Blog from './components/Blog/Blog'
import Contact from './components/Contact/Contact'
import 'bootstrap/dist/css/bootstrap.min.css'

const App= () =>{

  return (
    <>
      <Header />
      <div className='app'>
      <Router>
        <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Blog" element={<Blog />} />
        <Route exact path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      </div>
      
    </>
  )
}

export default App
