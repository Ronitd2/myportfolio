import React from "react";
import thunder from "./images/thunderbolt.png"
import mypic from "./images/mypic.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function About()
{
    return(
        <>
            <div id="about" className="sm:mt-10  sm:h-screen flex items-center justify-center w-[100%]">
            <div className=" w-[80%]">
            <div className="flex gap-3">
                <img src={thunder} className="h-9 w-8 "/>
                <h2 className=" text-xl sm:text-2xl text-white font-bold ">About Me</h2>
            </div>
            <AnimationOnScroll animateIn="scale-up-top">
                <div className=" sm:mt-3 scale-up-top sm:flex sm:justify-between">
                    <div className=" sm:max-w-[60%]">
                    <p className="text-md sm:text-lg text2 text-justify">
                    Hello! I'm Ronit Das, currently pursuing a Master of Computer Applications (MCA) from Jadavpur University. My journey into the world of technology has been driven by a profound passion for full stack web development and data science.As a budding full stack developer, I thrive on creating seamless and engaging user experiences through both front-end and back-end development. My technical toolkit includes a range of languages and frameworks, enabling me to build robust, scalable applications. From crafting intuitive interfaces to implementing efficient server-side logic.Beyond my technical skills, I am an avid problem solver who loves solving new challenges.I believe in continuous learning and staying updated with the latest trends in technology.Thank you for taking the time to learn about me. I look forward to connecting with like-minded professionals, potential collaborators, and industry leaders. Feel free to explore my portfolio to see the projects I've worked on and the skills I've developed. Let's create something amazing together.
                    </p>
                    </div>
                    <img src={mypic} className="h-48 w-48 sm:h-60 sm:w-60 mt-5 sm:mt-0 mx-auto sm:mx-0 "/>
                </div>
            </AnimationOnScroll>    
                    
            </div>    
            </div>
        </>
    )
}