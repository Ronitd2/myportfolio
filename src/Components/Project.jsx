import React from "react";
import link from "../assets/link.jpg"
import reactlogo from "./images/atom.png"
import node from "./images/node.png"
import expresslogo from "./images/express.png"
import mongo from "./images/mongodb.png"
import indianepic from "../assets/indianepic.png"
import codelab from "../assets/codelab.png"
import mllogo from "../assets/ml.jpg"
import diseaseprediction from "../assets/mlproject.png"
import firebase from "../assets/firebase.png"
import socket from "../assets/socket.png"
import thunder from "./images/thunderbolt.png"
import { AnimationOnScroll } from 'react-animation-on-scroll';
import './animation.css';
import { Link } from "react-router-dom";

export default function Project(){
    return(
        <>
            <div id="project" className="flex items-center justify-center  w-[100%] mt-20">
                <div class=" sm:grid sm:grid-rows-44 sm:grid-cols-2 sm:gap-8 w-[80%] ">
                    <div class="sm:h-80 sm:row-span-8  sm:w-[100%] rounded-xl " >
                        <div className="flex gap-3 items-center">
                        <img src={thunder} className="h-6 w-6 sm:h-9 sm:w-8"/>
                        <h2 className="text-2xl text-white font-bold">Projects</h2>
                        </div>
                        <AnimationOnScroll animateIn="fade-in">
                       <p className="text-2xl font-bold text-white font-display mt-3">All Creative Works.</p>
                       <p className="text-xl font-semibold text-gray-400">Here's some of my projects that I have worked on.</p> 
                       <p className="heading1 text-xl font-bold">Explore more </p>
                       </AnimationOnScroll>
                    </div>
                    
                    <div className=" sm:row-span-12  w-[100%] flex items-center justify-center  mt-5 ">
                    <AnimationOnScroll  animateIn="animate-slide-right">
                        <div className="bg-[#2C3639] w-full rounded-xl ">
                            <img className="w-[100%] sm:w-fit sm:h-fit rounded-xl rounded-b-none" src={indianepic}></img>
                            <div className="mt-2 p-3">
                                <div className="flex justify-between">
                                <p className="text-xl sm:text-2xl sm:font-bold text-white ">Indian Epic</p>
                                <a href="https://scintillating-frangollo-8a56ff.netlify.app/"><img className="h-6 w-6 sm:h-8 sm:w-8" src={link}/></a>
                                </div>
                                <div className="hidden  sm:flex flex-wrap sm:gap-3  sm:mt-2">
                                <div className="p-1  bg-[#3F4E4F] text-blue-400  flex sm:gap-2 gap-1 w-24 rounded-xl justify-center item center">
                                <img className="h-3 w-3 sm:h-5 sm:w-5" src={reactlogo}/>
                                <p className="text-sm sm:text-md">React</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-green-500  flex gap-2 w-24 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={node}/>
                                <p>NodeJs</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-white  flex gap-2 w-28 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={expresslogo}/>
                                <p>ExpressJs</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-green-500  flex gap-2 w-28 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={mongo}/>
                                <p>MongoDb</p>
                                </div>
                                </div>
                                <hr className="bg-gray-500 mt-2"/>
                                <p className="text-gray-400 text-sm sm:text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                        </AnimationOnScroll>
                    </div>
                   


                    <div className=" sm:row-span-12  w-[100%] flex items-center justify-center sm:h-[100%] sm:mt-0 mt-5">
                        <AnimationOnScroll animateIn="animate-slide-left">
                        <div className="bg-[#2C3639] w-full rounded-xl ">
                            <img className="w-[100%] sm:w-fit sm:h-fit rounded-xl rounded-b-none" src={codelab}></img>
                            <div className="mt-2 p-3">
                                <div className="flex justify-between">
                                <p className="text-xl sm:text-2xl sm:font-bold text-white ">CodeLab</p>
                                <a href="https://code-lab-eight.vercel.app/"><img className="h-6 w-6 sm:h-8 sm:w-8" src={link}/></a>
                                </div>
                                <div className="hidden  sm:flex sm:gap-3 flex-wrap sm:mt-2">
                                <div className="p-1  bg-[#3F4E4F] text-blue-400  flex sm:gap-2 gap-1 sm:w-18 md:w-24 rounded-xl justify-center item center">
                                <img className="h-4 w-4 md:h-5 md:w-5" src={reactlogo}/>
                                <p className="text-sm sm:text-md">React</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-green-500  flex gap-2 w-24 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={node}/>
                                <p>NodeJs</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-white  flex gap-2 w-28 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={expresslogo}/>
                                <p>ExpressJs</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-green-500  flex gap-2 w-28 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={mongo}/>
                                <p>MongoDb</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-white  flex gap-2 w-28 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={socket}/>
                                <p>Socket.io</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-yellow-300  flex gap-2 w-28 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={firebase}/>
                                <p>Firebase</p>
                                </div>
                                </div>
                                <hr className="bg-gray-500 mt-2"/>
                                <p className="text-gray-400 text-sm sm:text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                        </AnimationOnScroll>
                    </div>


                    <div className=" sm:row-span-12  w-[100%] flex items-center justify-center sm:h-[100%] sm:mt-0 mt-5 ">
                        <AnimationOnScroll  animateIn="animate-slide-right">
                        <div className="bg-[#2C3639] w-full rounded-xl ">
                            <img className="w-[100%] sm:w-full sm:h-full rounded-xl rounded-b-none" src={diseaseprediction}></img>
                            <div className="mt-2 p-3">
                                <div className="flex justify-between">
                                <p className="text-xl sm:text-2xl sm:font-bold text-white ">Coronary-Heart-Disease-Prediction</p>
                                <img className="h-6 w-6 sm:h-8 sm:w-8" src={link}/>
                                </div>
                                <div className="hidden  sm:flex sm:gap-3 flex-wrap sm:mt-2">
                                <div className="p-1  bg-[#3F4E4F] text-blue-400  flex  sm:gap-2 gap-1 w-24 rounded-xl justify-center item center">
                                <img className="h-3 w-3 sm:h-5 sm:w-5" src={reactlogo}/>
                                <p className="text-sm sm:text-md">React</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-green-500  flex gap-2 w-24 rounded-xl justify-center item center">
                                
                                <p>Pandas</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-white  flex gap-2 w-28 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={expresslogo}/>
                                <p>Numpy</p>
                                </div>
                                <div className="p-1  bg-[#3F4E4F] text-green-500  flex gap-2 w-28 rounded-xl justify-center item center">
                                <img className="h-5 w-5" src={mongo}/>
                                <p>Flask</p>
                                </div>
                                <div className="p-2  bg-[#3F4E4F] text-white  flex gap-2 w-auto rounded-xl justify-center item center">
                                <img className="h-7 w-8" src={mllogo}/>
                                <p>Scikit-Learn</p>
                                </div>
                                
                                </div>
                                <hr className="bg-gray-500 mt-2"/>
                                <p className="text-gray-400 text-sm sm:text-md">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                            </div>
                        </div>
                        </AnimationOnScroll>
                    </div>


                    
                </div>                
            </div>
            
        </>
    )
}