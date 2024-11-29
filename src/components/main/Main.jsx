import React, { useContext } from 'react'
import "./Main.css";
import { FaRegUserCircle, FaRegLightbulb } from "react-icons/fa";
import { LiaCompass } from "react-icons/lia"; import { RiSendPlane2Line } from "react-icons/ri";
import { BsCodeSlash } from "react-icons/bs";
import { FaRegMessage } from "react-icons/fa6";
import { LuImagePlus } from "react-icons/lu";
import { GrMicrophone } from "react-icons/gr";
import { CgMenuGridO } from "react-icons/cg";
import { Context } from '../../context/Context';
import { GoPlus } from "react-icons/go";


const Main = () => {

    const { onSent, recentPrompt, showResult, loading, resultData, setInput, Input ,newChat} = useContext(Context);

    return (
        <>
            <div className="main flex-1 min-h-[100vh] pb-[15vh] relative">
                <div className="nav flex items-center justify-between text-[22px] p-[20px] mb-7 ">
                    <div>
                        <p className='text-[#585858]'>Gemini</p>
                        
                    </div>
                    <div className='flex gap-5'>
                    <div onClick={() => { newChat() }} className='md:hidden inline-flex text-[14px] items-center gap-[10px] 
                          p-[5px] bg-[#e6eaf1] rounded-[10px] text-gray-500 cursor-pointer '>
                            <GoPlus className='text-[25px]' />
                        </div>
                        <CgMenuGridO className='text-[30px]' />
                        <FaRegUserCircle className='text-[30px]' />
                       
                    </div>
                </div>

                <div className="main-container max-w-[900px] m-auto">

                    {!showResult ?
                        <>
                            <div className="greet flex items-center justify-center h-[400px] font-semibold  sm:text-[40px]  
                            mx-0 md:text-[32px] lg:text-[35px] text-[#c4c7c5]  ">

                                <p><span className=''>Hello,Vaibhav.</span></p>
                                {/* <p className='sm:hidden md:block'>How can I help you today?</p> */}
                            </div>
                        </>

                        // <div className="cards md:grid sm:hidden grid-cols-4 gap-5">

                        //     <div className="card  h-[200px] p-[15px] bg-[#f0f4f9]  rounded-[10px] relative cursor-pointer text-[16px] hover:bg-[#dfe4ea] ">
                        //         <p className='text-[#585858]'>Suggest Beautiful Places To travel Visa free</p>
                        //         <LiaCompass className='text-[28px] text-[#585858] absolute bottom-5 right-5 ' />
                        //     </div>
                        //     <div className="card   h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer text-[16px] hover:bg-[#dfe4ea] ">
                        //         <p className='text-[#585858]'>Briefly Summarise The Relative Velocity</p>
                        //         <FaRegLightbulb className='text-[24px] text-[#585858]  absolute bottom-5 right-5' />
                        //     </div>
                        //     <div className="card   h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer text-[16px] hover:bg-[#dfe4ea] ">
                        //         <p className='text-[#585858]'>Write An Essay About Ancient India </p>
                        //         <BsCodeSlash className='text-[25px] text-[#585858] absolute bottom-5 right-5 ' />
                        //     </div>
                        //     <div className="card   h-[200px] p-[15px] bg-[#f0f4f9] rounded-[10px] relative cursor-pointer text-[16px] hover:bg-[#dfe4ea] ">
                        //         <p className='text-[#585858]'> Suggest A List Of Best Sci-fi Movies </p>
                        //         <FaRegMessage className='text-[20px] text-[#585858] absolute bottom-5 right-5' />
                        //     </div>

                        // </div>

                        :

                        <div className='result items-start py-0 sm:mx-[20px]  sm:px-0  md:px-[5%] max-h-[70vh] overflow-y-scroll '>
                            <div className="result-title items-center  flex sm:my-6 my-10 gap-5">
                                <FaRegUserCircle className='sm:text-[27px]  md:text-[30px]' />
                                <p className='sm:text-[18px] md:text-[22px]'>{recentPrompt}</p>
                            </div>
                            <div className="result-data  relative">
                                <img className='sm:hidden '
                                    src="https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg" alt="##" />
                                {loading ?
                                    <div className='loader w-[100%] flex flex-col sm:gap-6 gap-3'>
                                        <hr />
                                        <hr />
                                        <hr />
                                    </div> :
                                    <p className='sm:mr-2 sm:text-[16px] md:text-[16px] sm:leading-[30px] leading-[30px]' dangerouslySetInnerHTML={{ __html: resultData }}></p>
                                }
                            </div>
                        </div>}


                    <div className="main-bottom absolute sm:bottom-[40px] md:bottom-[50px] w-[100%] max-w-[900px] py-0 sm:px-0  px-[20px] m-auto">
                        <div className="search flex items-center justify-between
                        bg-[#f0f4f9] py-[10px] px-[20px] rounded-[50px]  ">
                            <input type="text" onChange={(e) => { setInput(e.target.value) }} value={Input} placeholder='Ask Gemini'
                                className='border-none outline-none sm:py-[5px] bg-[#f0f4f9] sm:text-[14px] md:text-[18px] w-[100%] text-[#585858] ' />
                            <div className='flex justify-normal '>
                                <LuImagePlus className='cursor-pointer sm:mx-1 md:mx-2 text-[22px]' />
                                <GrMicrophone className='cursor-pointer sm:mx-1 md:mx-2 text-[20px]' />
                                {Input ? <RiSendPlane2Line onClick={() => onSent()} className='cursor-pointer sm:mx-1 md:mx-1 text-[20px]' /> : null}
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Main