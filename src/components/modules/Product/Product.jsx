"use client"

import React, { useState } from 'react'
import Image from 'next/image';
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { VscGitCompare } from "react-icons/vsc";
import { IoIosSearch } from "react-icons/io";
import { Tooltip } from 'react-tooltip'
function Product() {

    const [isShowDetail, setIsShowDetail] = useState(false);

    return (
        <div className=' flex flex-col items-center justify-center bg-white rounded-md p-4 z-10' onMouseEnter={() => setIsShowDetail(true)} onMouseLeave={() => setIsShowDetail(false)}>
            <div className='w-full relative'>
                <Image src="/images/product.png" width="500" height="0" alt='logo' className='w-[100%] h-auto' />
                {isShowDetail &&
                    <div className='absolute top-0 bottom-0 right-0 left-0 bg-slate-50  opacity-80 rounded-md'>
                        <div className='absolute top-4 right-4 space-y-4 text-black font-iranyekan z-10'>
                            <MdFavoriteBorder className='cursor-pointer'
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="علاقه مندی ها"
                                data-tooltip-place="left" />
                            <VscGitCompare className='cursor-pointer'
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="مقایسه"
                                data-tooltip-place="left" />
                            <IoIosSearch className='cursor-pointer'
                                data-tooltip-id="my-tooltip"
                                data-tooltip-content="جستجو"
                                data-tooltip-place="left" />
                            <Tooltip id="my-tooltip" />
                        </div>
                        <div className='absolute top-0 w-full h-full flex items-center justify-center opacity-100 '>
                            <button className='bg-green-800 rounded-lg font-iranyekanMedium px-8 py-2 text-white'>افزودن به خرید</button>

                        </div>
                    </div>
                }
            </div>
            <div className='w-full flex flex-col items-center justify-center gap-y-8 my-4'>
                <span className='font-iranyekanBold text-center'>کپسول قهوه SETPresso سازگار با دستگاه مسپرسو 10 عددی </span>
                <span className='flex text-yellow-400'>
                    <FaStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                    <FaRegStar />
                </span>
                <span className='font-iranyekanMedium'>825,000  تومان</span>
            </div>


        </div>
    )
}

export default Product