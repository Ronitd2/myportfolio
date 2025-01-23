import React from "react";
import linked from "./images/linkedin.png"
import github from "./images/ggg.png"
import insta from "./images/instagram.png"
import facebook from "./images/facebook.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
export default function Contact()
{
    return(
        <>
            <div id="contact" className="h-screen mt-16">
            
                <div className="text-center mt-13 p-5">
                <AnimationOnScroll animateIn="fade-in">
                    <h1 className=" text-4xl sm:text-6xl text-white font-bold">Keep In Touch</h1>
                    </AnimationOnScroll>
                    <AnimationOnScroll animateIn="fade-in">
                    <p className="text-lg text-gray-400 mt-8">I'm currently specializing in <span className="block sm:inline  text-lg text-[#59CE8F]">Full Stack Web Development</span></p>
                    <p className=" text-gray-400 mt-5 text-lg">Feel free to get in touch and talk about any job recruitment ao projects</p>
                    </AnimationOnScroll>
                </div>
               
                <div className="mx-5">
                    
                    
                <AnimationOnScroll animateIn="fade-in">
                    <div class="relative mb-6 ">
                    {/* <label for="input-group-1" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">Your Email</label> */}
                    <input type="text" id="input-group-1" class="bg-transparent  border-gray-300 text-white text-sm  border  border-b-1 border-t-0 border-l-0 border-r-0 focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[50%] mx-auto  p-2.5 placeholder-gray-400 placeholder:font-bold " placeholder="Email"/>
                    </div>
                    {/* <label for="website-admin" class="block mb-2 text-sm font-medium text-gray-400 dark:text-white">Username</label> */}
                    <div >
                    
                    <input type="text" id="website-admin" class="bg-transparent  border-gray-300 text-white text-sm  border  border-b-1 border-t-0 border-l-0 border-r-0 focus:ring-blue-500 focus:border-blue-500 block w-full sm:w-[50%] mx-auto  p-2.5 placeholder-gray-400 placeholder:font-bold " placeholder="Name"/>

                    <textarea id="message" rows="4" class=" mt-4 block p-2.5 w-full sm:w-[50%] mx-auto text-sm text-white bg-transparent rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  placeholder-gray-400 placeholder:font-bold " placeholder="Write your thoughts here..."></textarea>

                    <div className="flex justify-center mt-4">
                    <button  className="  p-2 bg-[#59CE8F] rounded-lg text-md font-semibold text-white ">Submit</button>
                    </div>
                    </div>
                    </AnimationOnScroll>
                </div>
                
                <div className="flex gap-6 mt-6 item-center justify-center">
                    <img  className="h-8 w-8" src={linked}/>
                    <img  className="h-8 w-8" src={insta}/>
                    <img  className="h-8 w-8" src={facebook}/>
                    <img  className="h-9 w-9" src={github}/>
                </div>
            </div>
        </>
    )
}