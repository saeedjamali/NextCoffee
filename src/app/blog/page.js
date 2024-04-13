"use client"

import SignIn from '@/components/templates/SignIn/SignIn';
import React from 'react'
import { useAppProvider } from "../../components/context/NextCoffeeProvider";

function Blog() {
    const { isShowSignInForm } = useAppProvider();
    return (
        <>
            {isShowSignInForm && <SignIn />}
        </>
    )
}

export default Blog