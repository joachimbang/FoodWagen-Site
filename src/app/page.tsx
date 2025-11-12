"use client"
import FeaturedMeals from "@/components/FeaturesMeals";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";


import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState<string>("");
  return (
   <div className="bg-white ">
    <NavBar />
    <HeroSection onSearch={setSearch} />
    <FeaturedMeals search={search} />
    <Footer />
   </div>
  );
}

