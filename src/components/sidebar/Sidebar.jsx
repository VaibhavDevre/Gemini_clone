import React, { useContext, useState } from 'react'
import "./Sidebar.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { RiHistoryFill } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import { Context } from '../../context/Context';


const Sidebar = () => {

    const [extend, setExtned] = useState(false);
    const { onSent, prevPro, setRecentPrompt,newChat } = useContext(Context);

    const loadPrompt = async (prompt) => {
       // setRecentPrompt(prompt)
         onSent(prompt)
    }

    return (
        <div className='min-h-[100vh] sm:hidden md:flex inline-flex flex-col justify-between  sm:py-6 sm:px-0 md:px-[15px] md:py-[25px] bg-[#f0f4f9]'>
            <div className='top'>
                <GiHamburgerMenu onClick={() => {setExtned(prev => !prev)}} className='w-[20px] ml-[10px] cursor-pointer block' />

                <div onClick={()=>{newChat()}} className='mt-[50px] inline-flex text-[14px] items-center gap-[10px] 
            py-[10px]  px-[15px] bg-[#e6eaf1] rounded-[70px] text-gray-500 cursor-pointer '>
                    <GoPlus className=' sm:text-[15px] md:text-[20px]' />
                    {extend ? <p>New Chat</p> : null}
                </div>
                {extend ? <div className="flex flex-col ">
                    <p className="mt-[30px] mb-[20px]">Recent</p>

                    {prevPro &&  prevPro.map((item, index) => {
                        return (
                            <div className="flex items-center  cursor-pointer  gap-[10px] p-[10px] pr-[40px] rounded-[50px] text-[#282828]
                            hover:bg-[#e6eaf1] " onClick={()=>loadPrompt(item)}  key={index}>
                                <FaRegMessage />
                                <p className='text-[14px]'>{item.slice(0,14)}...</p>
                            </div>
                        )
                    })}
                </div> : null}

            </div>

            <div className='flex flex-col'>
                <div className="bottom-item  flex items-center cursor-pointer  gap-[10px] sm:p-[5px]  md:p-[10px] pr-[40px] rounded-[50px] text-[#282828]
                hover:bg-[#e6eaf1] text-[14px] ">
                    < IoIosHelpCircleOutline className='text-[23px]' />
                    {extend ? <p>Help</p> : null}
                </div>
                <div className="bottom-item flex items-center cursor-pointer  gap-[10px] sm:p-[5px] md:p-[10px] pr-[40px] rounded-[50px] text-[#282828]
                hover:bg-[#e6eaf1] text-[14px]">
                    <RiHistoryFill className='text-[20px]' />
                    {extend ? <p>Activity</p> : null}
                </div><div className="bottom-item flex items-center cursor-pointer  gap-[10px] sm:p-[5px] md:p-[10px] pr-[40px] rounded-[50px] text-[#282828]
                hover:bg-[#e6eaf1] text-[14px]">
                    <IoSettingsOutline className='text-[20px]' />
                    {extend ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    )
}

export default Sidebar