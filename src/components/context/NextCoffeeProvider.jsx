"use client"

import { useRouter } from 'next/router';
import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext();
function NextCoffeeProvider({ children }) {
    const [isShowSignInForm, setIsShowSignInForm] = useState(false);

    return (
        <AppContext.Provider value={{ isShowSignInForm, setIsShowSignInForm }}>{children}</AppContext.Provider>
    )
}

export default NextCoffeeProvider;

export function useAppProvider() {
    return useContext(AppContext)
}

