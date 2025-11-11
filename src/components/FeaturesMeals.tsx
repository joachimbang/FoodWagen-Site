"use client";

import FoodCard from "./FoodCard";


export default function FeaturedMeals() {

    return (
        <section className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
                Featured Meals
            </h2>




            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-10">

                <FoodCard id={""} name={""} price={0} description={""} imageUrl={""} rating={0} restaurant={""} logo={""}/>
            </div>

            <div className="flex justify-center mt-10">
                <button className="food-btn-add">Load more</button>
            </div>
        </section>
    );
}
