// import React from 'react'
import { Nav } from "react-bootstrap"
import '../Blog/blog.css'

const Blog=() =>{
  return (
    <div>
       <div className="about-banner">
        <div className='about'>
          <div className='about-content'>
            <h1 >BLOG</h1>
            <Nav.Link href="/">Home </Nav.Link>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <p>Blog & Article</p>
        <h2>Read Our Latest <br />
    Blog & Article</h2>
      </div>
      <div className="blog-post">
        <div className="blog-article">
          <div className="blog-image"></div>
          <div>
          <a href="/">
  <h4>How To Create An Organized Cleaning Schedule That Works</h4>
</a>
            <p>Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. 
Ut elit tellus, luctus nec 
ullamcorper mattis, </p></div>
        </div>
        <div className="blog-article">
        <div className="blog-image"></div>
          <div>
          <a href="/">
            <h4>Green Cleaning, Eco-Friendly Solutions For A Healthier Home</h4>
            </a>
            <p>Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. 
Ut elit tellus, luctus nec 
ullamcorper mattis, </p>
</div>
        </div>
        <div className="blog-article">
        <div className="blog-image"></div>
          <div>
          <a href="/">
            <h4>Removing Stubborn Stains, A Comprehensive Guide</h4>
            </a>
            <p>Lorem ipsum dolor sit amet,
 consectetur adipiscing elit. 
Ut elit tellus, luctus nec 
ullamcorper mattis, </p></div>
        </div>
      </div>
    </div>
  )
}

export default Blog