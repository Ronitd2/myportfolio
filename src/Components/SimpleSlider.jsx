import React from 'react';
import Slider from "react-slick";
import htmllogo from "./images/html-5.png";
import csslogo from "./images/css-3.png";
import jslogo from "./images/js.png";
import nodelogo from "./images/nodejs.png";
import reactlogo from "./images/atom.png";
import expresslogo from "./images/express.png";
import mongologo from "./images/mongodb.png";
import gitlogo from "./images/git.png";
import githublogo from "./images/github.png";
import javalogo from "./images/java.png";
import clogo from "./images/c.png";
import telwindlogo from "./images/telwind.png";
import thunder from "./images/thunderbolt.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function SimpleSlider(){
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 10,
    slidesToScroll: 1,
    
  };
  
  return(
  <>
  
  <Slider {...settings}>
    <div>
    <img  src={htmllogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={csslogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={jslogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={reactlogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={nodelogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={expresslogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={mongologo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={javalogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={clogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={gitlogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={githublogo} className="h-16 w-14"/>
    </div>
    <div>
    <img  src={telwindlogo} className="h-16 w-14"/>
    </div>
    </Slider>
  </>
  )
  }

