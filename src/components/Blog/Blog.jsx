import "../Blog/blog.css";

const Blog = () => {
  return (
    <div>
      <div className="about-banner">
        <div className="about">
          <div className="about-content">
            <h1>BLOG</h1>
          </div>
        </div>
      </div>
      <div className="blog-section">
        <p>Blog & Article</p>
        <h2>
          Read Our Latest <br />
          Blog & Article
        </h2>
      </div>
      <div className="blog-post">
        <div className="blog-article">
          <div className="blog-image"></div>
          <div>
            <a href="/">
              <h4>How To Create An Organized Cleaning Schedule That Works</h4>
            </a>
            <p>
              Crafting an effective and organized cleaning schedule involves
              prioritizing tasks, setting realistic goals, and maintaining
              consistency to ensure a consistently tidy and welcoming space,{" "}
            </p>
          </div>
        </div>
        <div className="blog-article">
          <div className="blog-image1"></div>
          <div>
            <a href="/">
              <h4>
                Green Cleaning, Eco-Friendly Solutions For A Healthier Home
              </h4>
            </a>
            <p>
              Embrace a healthier home with our green cleaning approach,
              offering eco-friendly solutions that prioritize the well-being of
              your living environment.
            </p>
          </div>
        </div>
        <div className="blog-article">
          <div className="blog-image2"></div>
          <div>
            <a href="/">
              <h4>Removing Stubborn Stains, A Comprehensive Guide</h4>
            </a>
            <p>
              Dive into our comprehensive guide on removing stubborn stains,
              where we share expert tips and effective techniques to tackle even
              the most challenging blemishes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
