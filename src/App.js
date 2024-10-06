import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faHouse, faRightToBracket } from "@fortawesome/free-solid-svg-icons"; 
import "./App.css";

function App() {
  const [isUserScrolling, setIsUserScrolling] = useState(false);

  useEffect(() => {
    const scrollContainer = document.querySelector(".scroll-container");
    let scrollTimeout;

    // Track user scroll activity
    const handleScroll = () => {
      setIsUserScrolling(true);
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => setIsUserScrolling(false), 500);
    };

    scrollContainer.addEventListener("scroll", handleScroll);

    // Continuous scroll every 3 seconds
    const interval = setInterval(() => {
      if (!isUserScrolling) {
        scrollContainer.scrollLeft += scrollContainer.offsetWidth / 3;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth - scrollContainer.clientWidth) {
          scrollContainer.scrollLeft = 0;
        }
      }
    }, 3000);

    // Cleanup
    return () => {
      scrollContainer.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
    };
  }, [isUserScrolling]);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">Jewellery</a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
            <a className="nav-link" to="/"><FontAwesomeIcon icon={faHouse} className="icon-gap"/>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="indexq.html"><FontAwesomeIcon icon={faRightToBracket} className="icon-gap"/>Login</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="contact.html"><FontAwesomeIcon icon={faPhone} className="icon-gap"/>Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>

      <div className="started">
        <h1>Visualize Your Jewelry Designs Like Never Before</h1>
        <p>Bring your designs to life with realistic imagery, offering diverse enhancements.<br />Our platform seamlessly refines your creations with precision, giving you a true-to-life preview of the final piece</p>
      </div>

      <div className="scroll-container">
        {["img1.jpeg", "imag2.jpeg", "img3.png", "img4.jpg", "img5.jpg", "img6.jpg", "image copy 4.png", "image copy 3.png", "img9.jpg", "image copy.png"].map((src, index) => (
          <div key={index} className="scroll-item">
            <img src={src} alt={`Image ${index}`} className="image" />
          </div>
        ))}
      </div>

          <h1>Services we offer</h1>
    <div className="container mt-5">
      <div id="textCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">

        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="text-center">
              <h3>From Text to Visuals</h3>
              <p>Transform your ideas into vivid visuals by simply providing
                descriptive text and we'll generate images that capture your
                vision</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="text-center">
              <h3>Sketches to Reality</h3>
              <p>Turn your rough sketches into fully rendered, realistic images,
              making your designs look professional and refined.</p>
            </div>
          </div>
          <div className="carousel-item">
            <div className="text-center">
              <h3>From Monochrome to Multicolor</h3>
              <p>Reimagine grayscale images with vibrant colors, breathing new
              life into them with our advanced colorization service.</p>
            </div>
          </div>
        </div>

      </div>
    </div>

      <footer style={{ marginTop: "50px", textAlign: "center" }}>
        Copyright &copy; Halsvar 2024
      </footer>
    </div>
  );
}

export default App;
