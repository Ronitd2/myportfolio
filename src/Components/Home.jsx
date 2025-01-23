import React from "react";
import './animation.css';
// import Skill from "./Skill";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useTypewriter} from 'react-simple-typewriter'
import github from "./images/ggg.png"
import resume from "../assets/resume.jpg"
import resumepdf from "../assets/RonitDas_Resume.pdf"
export default function Home()
{
    const [text] = useTypewriter({
        words: ['Ronit Das'],
        typeSpeed:200
  })
    return(
        <>
        <div id="home" className="flex justify-center  h-screen w-[100%]">
            <div  className="mt-7 sm:mt-20  w-[80%] ">
                <div className="relative">
                    <h1 className=" text-3xl sm:text-4xl font-semibold heading1 scale-up-tl">Hey there !,I'm-</h1>
                    <h1 className=" text-6xl mt-5 sm:text-9xl bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient font-bold  sm:mt-0 letter-by-letter-text">{text}</h1>
                    
                <div className="mt-8 sm:w-[75%] scale-up-right">
                    <p className=" text-2xl sm:text-4xl text-white font-semibold inline">Software Engineer.</p>
                    <p className="inline  text-2xl sm:text-4xl text2 font-semibold">A self-taught developer with an
                        interest in Computer Science.</p>
                    <div className="flex gap-4 mt-8">
                        <a href={resumepdf}>
                        <div className="bg-[#3F4E4F] rounded-lg  hover:bg-[#389f68]  w-auto p-2 text-center flex gap-2 items-center justify-center">
                        
                            <img className="w-5 h-6 " src={resume}></img>
                           <p className="text-white font-semibold">View CV</p>
                           
                        </div>
                        </a>

                        <a href="https://github.com/Ronitd2">
                        <div className="bg-[#3F4E4F] rounded-lg hover:bg-[#389f68]  w-auto p-2 text-center  flex gap-2 items-center justify-center">
                            <img className="w-6 h-6 " src={github}></img>
                           <p className="text-white font-semibold"> Github</p>
                        </div>
                        </a>
                    </div> 
                </div>
                </div>

                
                {/* <div className="mt-20 flex justify-between">
                
                <AnimationOnScroll animateIn="scale-up-top">
                <div className="max-w-[60%] ">
                <img src={thunder} className="h-9 w-8 inline"/>
                <h2 className="ml-4 text-2xl text-white font-bold inline">About Me</h2>
                    <p className="text-lg text2">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
                </AnimationOnScroll>
                    <img src={mypic} className="h-60 w-60 mr-36"/>
                
                </div> */}

               {/* <div className="mt-20">
                 <Skill />
               </div>  */}
                
        
            </div>
            </div>
        </>
    )
}