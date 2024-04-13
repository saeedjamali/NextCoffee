"use client"
import React from 'react'


// // Swiper components, modules and styles
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";


// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';

// import styles bundle
import 'swiper/css/bundle';



function Articles({ data }) {



    return (

        <div className='w-screen container mx-auto'>
            <section className=" overflow-hidden container mx-auto">
                <div>
                    <ul >
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={10}
                            dir='rtl'
                            navigation
                            pagination={{ type: "bullets", clickable: true }}
                            autoplay={true}
                            loop={true}
                            modules={[Autoplay, Navigation, Pagination]}
                            className="h-[300px] w-screen overscroll-x-none rounded-lg my-8 container mx-auto"

                        >
                            {data.map(({ id, image, tagline, title, buttons }) => (

                                <SwiperSlide key={id}  >
                                    <div
                                        className="h-full w-full absolute  rounded-lg container mx-auto"
                                        style={{
                                            background: `url(${image}) center center / cover scroll no-repeat`,
                                        }}
                                    ></div>
                                    <div className="h-full w-full absolute  bg-black opacity-20 rounded-lg"></div>
                                    <div className="relative z-10 h-full flex items-center justify-center rounded-lg">
                                        <div className="text-center ">
                                            {tagline && (
                                                <p className="text-md sm:text-sm lg:text-md font-semibold text-white">
                                                    {tagline}
                                                </p>
                                            )}
                                            <p className="text-3xl sm:text-xl lg:text-2xl font-bold text-white">
                                                {title}
                                            </p>

                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </ul>
                </div>
            </section>

        </div>
    )
}

export default Articles