"use client";

import { useState } from "react";

interface FoodCardProps {
}


export default function FoodCard({

}: FoodCardProps) {

    const statusClasses =
        status === "Open Now"
            ? "text-[#79B93C] bg-[#79B93C33]"
            : "text-[#F17228] bg-[#F1722833]";
   return (
        <article className="animate-slide-up transition-transform duration-150 ease-out hover:-translate-y-1 rounded-xl w-full m-4 p-2">
            {/* Main image */}
            <div className="rounded-xl w-full relative h-[200px] overflow-hidden">
                <img
                    src="/plate.png"
                    alt="Delicious food bowl with egg and ramen"
                    className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute top-4 left-4 bg-[#F17228] rounded-[10px] pl-4 pr-3 py-2 z-10 flex items-center relative">
                    <div className="absolute -left-2 top-0 h-full w-0 border-y-transparent border-y-[18px] border-r-[#F17228] border-r-[8px]" />
                    <p className="font-black text-white whitespace-nowrap">5</p>
                </div>
            </div>

            {/* Information section */}
            <div className="mt-4 flex justify-between items-start">
                <div className="flex justify-start items-center mb-2">
                    <img
                        src="/plate.png"
                            alt="Delicious food bowl with egg and ramen"
                        width={64}
                        height={64}
                        className="rounded-xl object-cover"
                    />
                    <div className="flex flex-col ml-4 gap-1">
                        <h3 className="text-lg font-bold text-[#424242]">Delicious Food Bowl</h3>
                        <div className="flex items-center">
                            <span className="text-[#FFB30E]">★</span>
                            <span className="text-[#FFB30E] ml-1 text-sm">4.5</span>
                        </div>
                    </div>
                </div>

                {/* Options */}
                <div className="relative">
                    <span
                        className="text-[#424242] text-xl cursor-pointer select-none"

                    >…</span>

                        <div className="absolute right-0 top-full mt-2 rounded-lg shadow-lg border w-32 z-20 bg-white">
                            <button
                                className="w-full px-4 py-2 text-[#425466] hover:bg-gray-100 text-left"
                            >
                                Edit
                            </button>
                            <button
                                className="w-full px-4 py-2 text-[#FF3B30] hover:bg-gray-100 text-left"

                            >
                                Delete
                            </button>
                        </div>
                </div>
            </div>

            {/* Status */}
                <p
                    className={`text-sm font-semibold p-2 mt-4 rounded-xl ${statusClasses} w-fit mx-2`}
                >
                    Closed
                </p>


        </article>
    );
}
