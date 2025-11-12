"use client";

import { useMeals } from "@/hooks/useMeals";
import FoodCard from "./FoodCard";

interface Props { search?: string }
export default function FeaturedMeals({ search }: Props) {
  const { meals, isLoading, error } = useMeals(search);

  return (
    <section className="container mx-auto px-20 py-16">
      <h2 className="text-4xl font-extrabold text-gray-900 mb-10 text-center">
        Featured Meals
      </h2>

      {isLoading && (
        <div className="flex justify-center" role="status" aria-label="loading">
          <div className="h-10 w-10 border-4 border-t-transparent border-[#FF9A0E] rounded-full animate-spin" />
        </div>
      )}
      {error && (
        <p className="text-center text-red-500">Error: {error.message}</p>
      )}

      {!isLoading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-[30px] gap-y-10">
          {meals.map((meal) => (
            <FoodCard
                  key={meal.id}
                  id={meal.id}
                  name={meal.name}
                  price={meal.price}
                  description={meal.description}
                  imageUrl={meal.imageUrl}
                  rating={meal.rating}
                  status={meal.status}
                  restaurant={meal.restaurant}
                  logo={meal.logo}
            />
          ))}
        </div>
      )}

      <div className="flex justify-center mt-10">
        <button className="food-btn-add">Load more</button>
      </div>
    </section>
  );
}
