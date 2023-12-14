import React, { useState } from 'react'
import { Button, ButtonGroup, Dropdown, DropdownButton } from 'react-bootstrap';
import { BiSolidDownArrow, BiSolidDownArrowSquare, BiSolidLeftArrowSquare, BiSolidPencil } from 'react-icons/bi'
import { IoIosArrowDropdownCircle } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import DropdownMenu from '../../../helper/Dropdown/dropdown-menu';
import { MdPhotoCamera } from 'react-icons/md';
import { TfiCommentsSmiley } from "react-icons/tfi";
// import Dropdown from '../../../helper/dropdown-menu';




const MyStatus = () => {
    const navigate = useNavigate();
    const [dropdown, setDropdown] = useState(false)
    const [isVisible, setIsVisible] = useState(true);
  

    const handleNavigete = () => {
        navigate(-1)
    }

    const handleDorpdown = () => {
        setDropdown(!dropdown)

    }

    const handleHover = () => {
        setDropdown(true);
    };

    const handleLeave = () => {
        setDropdown(false);
    };

    const handleToggleVisibility = () => {
      setIsVisible(!isVisible);
    }
    return (
        <div className='h-full w-full flex'>
            {/* left bar */}
            <div className='w-[40%] h-full lg:w-[25%] sm: rounded-l-lg  bg-slate-200 '>
                <div className=' flex justify-between rounded-tl-lg h-[14%] border-b w-[full]  bg-blue-950 border-slate-100 border'>

                    <div className='flex items-center justify-center w-[50%] -ml-3' >
                        <BiSolidLeftArrowSquare className='  text-gray-400 w-14 h-14 p-3 hover:opacity-30 hover:bg-slate-100 hover:text-blue-950 cursor-pointer rounded-full' />
                        <p className='text-gray-400 mt-3'>Groups</p>
                    </div>
                    <DropdownMenu />

                </div>
                <div>
                    <div>

                        <div className=' w-full  h-full top-0 flex flex-col justify-center rounded-b-lg'>

                            <label htmlFor="imgInput">
                                <div className=' w-full h-full flex items-center justify-center'>
                                    <img className='rounded-full cursor-pointer w-36 h-36 my-5 ' src="https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg" alt="" />
                                    <MdPhotoCamera className='absolute ml-20 text-gray-400 w-14 h-14 p-3 hover:opacity-30 hover:bg-slate-100 hover:text-blue-950 cursor-pointer rounded-full' />
                                </div>

                            </label>
                            <input type="file" id='imgInput' className='hidden' />
                            <div className='w-full  h-full rounded-bl-lg'>
                                <div className='w-[94%] flex   border-slate-400 border-b mx-[3%] '>
                                    <div className='w-full flex flex-col  '>
                                        <h5 className="ml-3  text-lg w-[20vw] " > Group Name </h5>
                                        <input id='imgInput' className=' ml-3  text-slate-800 bottom-0 w-[80%] bg-slate-200  focus:outline-none' type="text" alt='' />

                                    </div>

                                    <div className=' w-[50%] flex right-0 justify-end items-end'>
                                        <BiSolidPencil id='imgInput' className='text-lg text-slate-600 hover:text-red-800 cursor-pointer' />
                                    </div>
                                </div>
                                <div className='w-[94%] h-[20vh] bg-slate-400 flex mt-20 mx-[3%]  '>
                                    <div className='w-[82%] h[50%] flex flex-col '>
                                        <p  className=" text-gray-300 ml-3 text-sm" > Group Description </p>
                                        {isVisible && 
                                        <p onClick={handleToggleVisibility} id="textarea"  className=" text-gray-300 ml-3 text-sm" > ! click on and write something...  You can add rules for your group member to see</p>
                                        }
                                        {!isVisible && <textarea id="textarea" className='border bg-slate-400 ml-3 mb-2 text-gray-300 bottom-0 w-[80%] focus:outline-none' type="textarea" alt=''/>}
                                    </div>

                                    <div className=' w-[18%] flex justify-end items-start'>

                                        <TfiCommentsSmiley className='mt-6 mr-3 text-2xl text-gray-300  hover:text-red-800 cursor-pointer' />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='h-[86%] w-[60%]  rounded-bl-lg  '>

                {/* Right Bar */}
                <div className='h-full w-[60%] lg:w-[75%]'><div className='w-full h-full flex items-center justify-center'>

                    <div>
                        <div className=' w-full  flex items-center justify-center '>
                        </div>
                        <p>Click on contact to view up date</p>
                    </div>




                </div>
                </div>


            </div>


        </div>
    )
}

export default MyStatus