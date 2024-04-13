import React from 'react'
import { IoIosArrowBack } from "react-icons/io";
import Link from 'next/link'
import Product from '@/components/modules/Product/Product';


function Latest() {
    return (
        <div className='w-full container mx-auto'>
            <div className='flex items-center justify-between mt-8'>
                <span className='font-shabnamBold'>آخرین محصولات</span>
                <div className='h-full flex items-center justify-center gap-x-4'>
                    <Link href='/shop' className='font-shabnam'>مشاهده همه</Link>
                    <IoIosArrowBack />
                </div>
            </div>

            <div className='grid grid-cols-4 gap-4 mt-16' data-aos="fade-up">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />


            </div>

        </div>
    )
}

export default Latest