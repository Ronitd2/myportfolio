import React from "react";
import htmllogo from "./images/html-5.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export default function Element()
{
    return(
        <>
        
            <div className="bg-[#2C3639]  rounded-2xl flex justify-center items-center gap-2 sm:h-20 sm:w-[23%] h-18 w-[45%] p-2 hover:bg-gray-500 hover:slide-fwd-center">
                        <img className="h-10 w-10 sm:h-14 sm:w-14" src={htmllogo}></img>
                        <p className="text-lg sm:text-xl font-semibold text-white">HTML</p>
            </div>
        
        </>
    )
}