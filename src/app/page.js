"use client"

import Navbar from "@/components/modules/Navbar/Navbar";
import "./globals.css";
import dataSlider from "../data/slider-data.json";
import SwiperModule from "@/components/modules/Swiper/SwiperModule";
import Latest from "@/components/templates/Latest/Latest";
import Articles from "@/components/templates/Articles/Articles";
import SignIn from "@/components/templates/SignIn/SignIn";
import { useState } from "react";
import NextCoffeeProvider, { useAppProvider } from "../components/context/NextCoffeeProvider";


export default function Home() {
  const { isShowSignInForm, setIsShowSignInForm } = useAppProvider();
  return (
    <>
    
      <SwiperModule data={dataSlider} />
      <Latest />
      <Articles data={dataSlider} />
      {isShowSignInForm && <SignIn />}

    </>

  );
}
