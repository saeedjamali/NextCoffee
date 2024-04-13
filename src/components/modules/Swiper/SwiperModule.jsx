"use client"

import React from 'react'

// Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// core version + navigation, pagination modules:
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';



function SwiperModule({ data }) {
    return (

        <section className="-mt-28 overflow-hidden">
            <div>
                <ul >
                    <Swiper
                        navigation
                        pagination={{ type: "bullets", clickable: true }}
                        autoplay={true}
                        loop={true}
                        modules={[Autoplay, Navigation, Pagination]}
                        className="h-[70vh] w-screen overscroll-x-none"
                    >
                        {data.map(({ id, image, tagline, title, buttons }) => (

                            <SwiperSlide key={id}>
                                <div
                                    className="h-full w-full absolute left-0 top-0"
                                    style={{
                                        background: `url(${image}) center center / cover scroll no-repeat`,
                                    }}
                                ></div>
                                <div className="h-full w-full absolute left-0 top-0 bg-black opacity-20"></div>
                                <div className="relative z-10 h-full flex items-center justify-center">
                                    <div className="text-center">
                                        {tagline && (
                                            <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                                                {tagline}
                                            </p>
                                        )}
                                        <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                                            {title}
                                        </p>
                                        {buttons.length > 0 ? (
                                            <p className=" bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                                                {/* <SliderButtons buttons={buttons} /> */}
                                            </p>
                                        ) : null}
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </ul>
            </div>
        </section>

    )
}

export default SwiperModule