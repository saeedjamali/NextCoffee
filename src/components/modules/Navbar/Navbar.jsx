"use client"
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { MdFavoriteBorder } from "react-icons/md";
import { CiShoppingBasket } from "react-icons/ci";
import Image from 'next/image';
import { IoIosArrowDown } from "react-icons/io";
import { useAppProvider } from '@/components/context/NextCoffeeProvider';

function Navbar() {
    const { isShowSignInForm, setIsShowSignInForm } = useAppProvider();

    const [isVisible, setIsVisible] = useState(true);
    const [isUserMenu, setIsUserMenu] = useState(false)
    const handleScroll = () => {
        const scroll = window.scrollY;
        // console.log(scroll, isVisible);

        const shouldBeVisible = scroll <= 40;
        if (shouldBeVisible === isVisible) return;
        setIsVisible(shouldBeVisible);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [isVisible, handleScroll]);


    return (
        <div className={` h-20 bg-slate-100 shadow-lg z-10  ${isVisible ? 'absolute top-4 w-[90%]' : 'w-full fixed'}`}>
            <div className='flex items-center justify-between h-full font-iranyekanMedium '>
                <Link className='mx-8' href='/'>
                    <Image src="/images/logo.png" width="100" height="0" alt='logo' className='w-full h-auto' />
                </Link>
                <div className='flex-1 mr-8'>
                    <ul className='flex-1 flex items-center justify-start gap-x-8'>
                        <li><Link href='/'>صفحه اصلی</Link></li>
                        <li><Link href='/shop'>فروشگاه</Link></li>
                        <li><Link href='/blog'>وبلاگ</Link></li>
                        <li><Link href='/contact-us'>تماس با ما</Link></li>
                        <li><Link href='/about-us'>درباره ما</Link></li>
                        <li><button onClick={() => setIsShowSignInForm(prev => !prev)}>ورود/عضویت</button></li>

                        <div className='relative w-44 rounded-b-lg'>
                            <div className='flex items-center cursor-pointer' onClick={() => setIsUserMenu((prev => !prev))}>
                                <li  >پنل کاربری</li>
                                <IoIosArrowDown className='mr-2' />
                            </div>
                            {isUserMenu &&
                                <div className='absolute w-full top-full bg-gray-100 rounded-b-lg'>
                                    <ul className='bg-gry-100 w-full mt-8 space-y-4'>
                                        <li className='p-2'><Link href="/p-user/orders">سفارشات</Link></li>
                                        <li className='p-2'><Link href="/p-user/tickets">تیکت های پشتیبانی</Link></li>
                                        <li className='p-2'><Link href="/p-user/comments">کامنت ها</Link></li>
                                        <li className='p-2'><Link href="/p-user/wishlist">علاقه مندی ها</Link></li>
                                        <li className='p-2'><Link href="/p-user/account-detail">جزییات اکانت</Link></li>
                                    </ul>
                                </div>
                            }

                        </div>

                    </ul>
                </div>
                <div className='mx-8 flex gap-x-4'>
                    <CiShoppingBasket className='text-2xl' />
                    <MdFavoriteBorder className='text-2xl' />
                </div>

            </div>

        </div>
    )
}

export default Navbar