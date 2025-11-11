// import HeroSection from "@/components/HeroSection";
import FeaturedMeals from "@/components/FeaturesMeals";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/Navbar";


export default function Home() {
  return (
   <div className="bg-white">
    <NavBar />
    <HeroSection />
    <FeaturedMeals/>
    <Footer />
   </div>
  );
}
