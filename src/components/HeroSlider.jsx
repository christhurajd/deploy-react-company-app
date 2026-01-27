import { useEffect, useState } from "react";
import "./HeroSlider.css";
import { useNavigate } from "react-router-dom";

import { Link } from "react-router-dom";

const slides = [
  {
    title: "Building Modern Software Solutions",
    desc: "We help businesses grow with scalable digital products",
    image: "/images/slide1.jpg"
  },
  {
    title: "Web & Mobile App Development",
    desc: "High-performance applications using modern technologies",
    image: "/images/slide2.jpg"
  },
  {
    title: "Cloud & Enterprise Solutions",
    desc: "Secure, scalable, and reliable cloud platforms",
    image: "/images/slide3.jpg"
  }
];

function HeroSlider() {
  const [current, setCurrent] = useState(0);
const navigate = useNavigate();
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const handleBlog = () => {   
      navigate("/blog");   
  };
  
  return (
    <div className="hero-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="overlay">
            <h1>{slide.title}</h1>
            <p>{slide.desc}</p>
            {/* <Link to="/blog"> */}
            <button onClick={handleBlog} className="hero-btn">Get Free Consultation</button>
            {/* </Link> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeroSlider;