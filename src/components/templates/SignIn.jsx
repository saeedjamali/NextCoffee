"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { authTypes } from "@/utils/constants"
import { useAppProvider } from '../context/NextCoffeeProvider';

function SignIn() {

    const { isShowSignInForm, setIsShowSignInForm } = useAppProvider();
    const [statusLogin, setStatusLogin] = useState(authTypes.LOGIN);
    const [isAuthWithPass, setIsAuthWithPass] = useState(false);

    return (
        <div className='absolute top-0 left-0 w-1/5 bg-gray-50 h-screen z-10 p-4 animate-slideIn'>
            <div>

                <div className='flex items-center justify-between h-16 font-iranyekanMedium '>
                    <span>ورود</span>
                    <span className='cursor-pointer' onClick={()=>setIsShowSignInForm(false) }>بستن</span>
                </div>
                <hr />

            </div>
            {/* SignIn Form */}

            {statusLogin == authTypes.LOGIN &&
                <div>
                    <form action="" className='my-8 space-y-4'>
                        <input type="text" name="" id="" placeholder='ایمیل/شماره موبایل' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />
                        <input type="password" name="" id="" placeholder='رمز عبور' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />
                        <button className='w-full py-2 text-white bg-green-800 font-iranyekanMedium'>ورود</button>
                    </form>


                    <button className='w-full py-2 text-white bg-green-800 font-iranyekanMedium '>ورود با کد یکبار مصرف</button>
                    <Link href='/forgot-password' className='font-iranyekanMedium my-8 w-full block'>گذر واژه خود را فراموش کرده اید؟</Link>

                    <hr />
                    <button onClick={() => setStatusLogin(authTypes.REGISTER)} className='w-full py-2 text-white bg-gray-800 font-iranyekanMedium mt-8'>عضویت</button>
                </div>
            }


            {/* SignUp Form */}
            {statusLogin == authTypes.REGISTER && <div>
                <form action="" className='my-8 space-y-4'>
                    <input type="text" name="" id="" placeholder='نام' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />
                    <input type="number" name="" id="" placeholder='شماره موبایل' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />
                    {isAuthWithPass &&
                        <input type="password" name="" id="" placeholder='رمز عبور' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />}
                    <button className='w-full py-2 text-white bg-red-800 font-iranyekanMedium' onClick={() => setIsAuthWithPass(false)}>ثبت نام با کد تایید</button>
                    <button className='w-full py-2 text-white bg-red-800 font-iranyekanMedium' onClick={() => setIsAuthWithPass(prev => !prev)}>ثبت نام با رمز عبور</button>
                    <div className='w-full h-6 flex items-center justify-center font-iranyekan cursor-pointer' onClick={() => setStatusLogin(authTypes.LOGIN)}>برگشت به ورود</div>
                </form>
                <hr />
            </div>}




            {/* Send Code Via Sms */}

            {statusLogin == authTypes.SMS &&
                <div>
                    <form action="" className='my-8 space-y-4'>
                        <input type="number" name="" id="" placeholder='کد اعتبارسنجی' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />

                        <button className='w-full py-2 text-white bg-green-800 font-iranyekanMedium'>تایید کد اعتبارسنجی</button>

                        <div className='w-full h-6 flex items-center justify-center font-iranyekan'>برگشت به ورود</div>
                    </form>
                    <hr />
                </div>}


        </div>
    )
}

export default SignIn