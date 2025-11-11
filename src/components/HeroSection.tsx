// HeroSection component

import Image from "next/image";
import React from 'react';

export default function HeroSection() {

    return (
        // Main container (Hero Section) with background color
        <header className="food-hero-section pt-16 pb-20 overflow-hidden">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row justify-center items-center">

                {/* Left column: text and form */}
                <div className="space-y-6 px-20">
                    {/* Main title */}
                    <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
                        Are you starving?
                    </h1>

                    {/* Subtitle */}
                    <p className=" text-lg">
                        Within a few clicks, find meals that are accessible near you.
                    </p>

                    {/* Search card container */}
                    <div
                        // bg-white, rounded corners, shadow
                        className="bg-white p-4 rounded-2xl shadow-xl space-y-4 max-w-lg"
                        data-testid="food-search-card"
                    >
                        {/* 1. Delivery/Pickup toggle buttons */}
                        <div className="flex p-1 rounded-full w-fit text-sm font-semibold">
                            {/* Active button (orange) */}
                            <button className="px-5 py-2 text-[#F17228] bg-[#F172281A] rounded-lg font-bold text-[18px] transition duration-150" data-testid="food-delivery-btn">
                                Delivery
                            </button>
                            {/* Inactive button (grey text) */}
                            <button className="px-5 py-2 rounded-lg text-[#757575] font-bold text-[18px] transition duration-150" data-testid="food-delivery-btn">
                                Pickup
                            </button>
                        </div>
                        <div className="border-t border-gray-200 my-4"></div>
                        {/* 2. Search form (input and button) */}
                        <form className="flex items-center space-x-2">
                            {/* Search input field */}
                            <div className="w-[595px] h-[60px] bg-[#F5F5F5] rounded-lg py-[7px] pl-[16px] pr-4 flex items-center gap-3">
                                <input type="text" placeholder="What do you like to eat today?" className="font-open-sans text-base lg:text-lg font-normal leading-normal tracking-normal bg-gray-500" data-testid="food-search-input" name="food_name" />
                            </div>
                            {/* Search button */}
                            <button
                                type="submit"
                                className="w-[197px]h-[60px] rounded-lg py-[21px] px-[48px] flex gap-[10px] bg-[linear-gradient(95.71deg,_#FF7A7A_-39.64%,_#F75900_135.31%)] items-center justify-center"
                                data-testid="food-find-meal-btn"
                            >
                                Find Meal
                            </button>
                        </form>
                    </div>
                </div>

                {/* Right column: image */}

                <div className=" px-10 size-[450px] flex justify-center pt-40 lg:mt-0 lg:ml-10">
                    <div className="absolute size-[400px] rounded-full  pt-40 border-0 top-80 ">
                    <Image
                            src="/plate.png"
                            alt="Delicious food bowl with egg and ramen"
                            fill={true}
                            // height={450}
                            // width={450}
                            className="object-cover rounded-full shadow-[-30px_20px_20px_05px_rgba(0,0,0,0.35)] shadow-black/30"
                            priority
                        />
                    </div>


                    {/* </div> */}
                </div>
                {/* <div className=" lg:block relative h-[400px] ">

                    <div className="absolute -mx-140 w-[450px] h-[450px] top-20 right-0">
                        <Image
                            src="/plate.png"
                            alt="Delicious food bowl with egg and ramen"
                            fill={true}
                            // height={450}
                            // width={450}
                            className="object-cover rounded-full shadow-lg drop-shadow-2xl"
                            priority
                        />
                    </div>
                </div> */}
            </div>
        </header>
    );
}