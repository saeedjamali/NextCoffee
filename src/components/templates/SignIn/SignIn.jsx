"use client"

import React, { useState } from 'react'
import Link from 'next/link'
import { authTypes } from "@/utils/constants"
import { useAppProvider } from '../../context/NextCoffeeProvider';
import { rules } from "@/utils/constants"
import toast, { Toaster } from 'react-hot-toast';
import { useRouter } from 'next/navigation';
import { validatePhone, validatePassword } from "@/utils/auth"


function SignIn() {

    const router = useRouter();
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [phone, setPhone] = useState("")
    const { isShowSignInForm, setIsShowSignInForm } = useAppProvider();
    const [statusLogin, setStatusLogin] = useState(authTypes.LOGIN);
    const [isAuthWithPass, setIsAuthWithPass] = useState(false);


    const registerWithPassword = async (event) => {
        event.preventDefault();
        if (!name.trim()) {
            toast.error("نام را تکمیل نمایید");
            return false
        }

        if (!validatePhone(phone)) {
            toast.error("شماره همراه نامعتبر");
            return false
        }

        if (!validatePassword(password)) {
            toast.error("رمز عبور 8 رقمی");
            return false
        }


        const newUser = {
            name, password, phone, rule: rules.USER
        }
        if (isAuthWithPass) {
            try {
                const response = await fetch("/api/auth/signup", {
                    method: "POST",
                    header: {
                        "context-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)

                });
                const data = await response.json();
                console.log("Data->", data);
                if (data.status == 201) {
                    router.push('/about-us')
                    toast.success(data.statusText);
                } else {
                    toast.error(data.statusText);
                }

            } catch (error) {
                console.log("Error catch ->", error);
            }
        } else {
            setIsAuthWithPass(prev => !prev)
        }
    }
    return (
        <div className='absolute top-0 left-0 w-1/5 bg-gray-50 h-screen z-10 p-4 animate-slideIn'>
            <div>

                <div className='flex items-center justify-between h-16 font-iranyekanMedium '>
                    <span>ورود</span>
                    <span className='cursor-pointer' onClick={() => setIsShowSignInForm(false)}>بستن</span>
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
                    <input onChange={(e) => setName(e.target.value)} value={name} type="text" name="" id="" placeholder='نام' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />
                    <input onChange={(e) => setPhone(e.target.value)} value={phone} type="number" name="" id="" placeholder='شماره موبایل' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />
                    {isAuthWithPass &&
                        <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" name="" id="" placeholder='رمز عبور' className='px-4 py-2 outline-none border-gray-500 border-2 font-iranyekan w-full' required />}
                    <button className='w-full py-2 text-white bg-red-800 font-iranyekanMedium' onClick={() => setIsAuthWithPass(false)}>ثبت نام با کد تایید</button>
                    <button className='w-full py-2 text-white bg-red-800 font-iranyekanMedium' onClick={registerWithPassword}>ثبت نام با رمز عبور</button>
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