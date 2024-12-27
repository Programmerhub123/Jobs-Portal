import React from "react";
import "./CarrierAdvice.css"; 

const CarrierAdvice = () => {
  return (
    <div>
     
      <section id="carrier-advice" className="section carrier-advice">
        <h2>Career Advice</h2>
        <p className="intro">
          Our expertise are available 24/7 to guide you about your carrier advice.
        </p>
        <div className="blog-grid">
          <div className="blog-card">
            <img
              src="https://tinyurl.com/mv6f68tn"
              alt="Web Development"
            />
            <div className="blog-content">
              <h3>5 Tips to Start a Career in Web Development</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque
                natus facilis sequi esse minima quo. Quia cumque tenetur, aut
                animi iste accusantium laborum, laudantium hic illo, aspernatur
                velit inventore iure.
              </p>
              <a href="#read-more" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="https://tinyurl.com/5ekz6dwy"
              alt="Data Science"
            />
            <div className="blog-content">
              <h3>How to Excel in Data Science</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                voluptas. Ea repellat corporis amet, debitis ipsa maxime. Ex
                deleniti nesciunt, nobis fugit vero ullam cumque nisi a,
                reiciendis nemo beatae.
              </p>
              <a href="#read-more" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="blog-card">
            <img
              src="https://tinyurl.com/2vmpt7ht"
              alt="Cloud Computing"
            />
            <div className="blog-content">
              <h3>The Future of Cloud Computing</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Animi,
                voluptas. Ea repellat corporis amet, debitis ipsa maxime. Ex
                deleniti nesciunt, nobis fugit vero ullam cumque nisi a,
                reiciendis nemo beatae.
              </p>
              <a href="#read-more" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CarrierAdvice;
