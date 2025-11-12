import { Mail, Search } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

interface Props { onSearch: (term: string) => void }
export default function HeroSection({ onSearch }: Props) {
  const [term, setTerm] = useState("");
  return (
    <header className="food-hero-section pt-10 px-20 pb-10 overflow-hidden">
      <div className="mx-auto flex flex-col lg:flex-row justify-between items-center">

        {/* Left column */}
        <div className="space-y-6 md:px-10 lg:px-20 text-center lg:text-left w-full lg:w-2/3">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
            Are you starving ?
          </h1>
          <p className="text-base sm:text-lg">
            Within a few clicks, find meals that are accessible near you.
          </p>
          {/* Search card */}
          <div className="bg-white p-4 rounded-2xl shadow-xl space-y-4 w-full max-w-2xl mx-auto lg:mx-0">

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
            <form onSubmit={(e) => { e.preventDefault(); onSearch(term); }} className="flex flex-col sm:flex-row mb-2 mr-2 items-center gap-3 w-full">
              {/* controlled input */}
              <div className="flex items-center bg-[#F5F5F5] rounded-lg w-full h-[42px]">
                <Search className="text-[#F17228] mx-3" />
                <input
                  type="text"
                  placeholder="What do you like to eat today?" value={term} onChange={(e) => { const v = e.target.value; setTerm(v); if (v === "") onSearch(""); }}
                  className="flex-grow bg-transparent text-[#9E9E9E] focus:outline-none text-sm sm:text-base"
                />
              </div>
              <button
                type="submit"
                className="w-[150px] h-[42px] bg-[linear-gradient(95.71deg,#FF7A7A_-39.64%,#F75900_135.31%)] rounded-lg text-white font-semibold"
                data-testid="food-find-meal-btn"
              >
                Find Meal
              </button>
            </form>
          </div>
        </div>
        {/* Right column: image */}
        <div className="rounded-full"><div className="w-[530px] h-[450px] relative flex top-15 justify-center pt-20 lg:mt-0 lg:ml-10 overflow-hidden">
          <div className="absolute size-[400px] border-0 ">
            <Image
              src="/plate.png"
              alt="Delicious food bowl with egg and ramen"
              fill={true}
              className="object-cover overflow-hidden rounded-full shadow-[-30px_20px_20px_20px_rgba(0,0,0,0.35)] shadow-black/30"
              priority
            />
          </div>
        </div>
        </div>
      </div>
    </header>
  );
}

