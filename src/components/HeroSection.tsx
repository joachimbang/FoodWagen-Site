import Image from "next/image";
import React from "react";

export default function HeroSection() {
  return (
    <header className="food-hero-section pt-16 pb-20 overflow-hidden">
      <div className="container mx-auto px-40 flex flex-col lg:flex-row justify-between items-center">

        {/* Left column */}
        <div className="space-y-6 px-4 md:px-10 lg:px-20 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Are you starving?
          </h1>

          <p className="text-base sm:text-lg">
            Within a few clicks, find meals that are accessible near you.
          </p>

          {/* Search card */}
          <div className="bg-white p-4 rounded-2xl shadow-xl space-y-4 w-full max-w-lg mx-auto lg:mx-0">

            {/* Toggle buttons */}
            <div className="flex p-1 rounded-full w-fit text-sm font-semibold mx-auto lg:mx-0">
              <button className="px-4 sm:px-5 py-2 text-[#F17228] bg-[#F172281A] rounded-lg font-bold text-[16px] sm:text-[18px]">
                Delivery
              </button>

              <button className="px-4 sm:px-5 py-2 rounded-lg text-[#757575] font-bold text-[16px] sm:text-[18px]">
                Pickup
              </button>
            </div>

            <div className="border-t border-gray-200 my-4"></div>

            {/* Search form */}
            <form className="flex flex-col sm:flex-row items-center gap-3 w-full">
              <div className="w-full bg-[#F5F5F5] h-[55px] sm:h-[60px] rounded-lg px-4 flex items-center">
                <input
                  type="text"
                  placeholder="What do you like to eat today?"
                  className="w-full bg-transparent text-sm sm:text-base font-normal"
                />
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto h-[55px] sm:h-[60px] rounded-lg px-6 bg-[linear-gradient(95.71deg,#FF7A7A_-39.64%,#F75900_135.31%)] text-white font-semibold"
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
                            className="object-cover overflow-hidden rounded-full shadow-[-30px_20px_20px_05px_rgba(0,0,0,0.35)] shadow-black/30"
                            priority
                        />
                    </div>
                </div>
            </div>
        </header>
    );
}