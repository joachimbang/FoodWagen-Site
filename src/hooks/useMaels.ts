// /src/hooks/useMeals.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchMeals, createMeal, updateMeal, deleteMeal } from "../src/app/api/food-meals";
import { Meal } from "../types/foods-meals";

export const useMeals = () => {
  const queryClient = useQueryClient();

  const { data: meals = [], isLoading, error } = useQuery<Meal[], Error>({
    queryKey: ["meals"],
    queryFn: ({ queryKey }) => fetchMeals(queryKey[1] as string | undefined),
    staleTime: 5 * 60 * 1000,
  });

  const createMealMutation = useMutation<Meal, Error, Omit<Meal, "id">>({
    mutationFn: (meal) => createMeal(meal),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["meals"] }),
  });

  const updateMealMutation = useMutation<
    Meal,
    Error,
    { id: string; meal: Omit<Meal, "id"> }
  >({
    mutationFn: ({ id, meal }) => updateMeal(id, meal),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["meals"] }),
  });

  const deleteMealMutation = useMutation<Meal, Error, string>({
    mutationFn: (id) => deleteMeal(id),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["meals"] }),
  });

  return {
    meals,
    isLoading,
    error,
    createMealMutation,
    updateMealMutation,
    deleteMealMutation,
  };
};
