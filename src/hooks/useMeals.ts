// /src/hooks/useMeals.ts
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { fetchMeals, createMeal, updateMeal, deleteMeal } from "../src/app/api/food-meals";
import { Meal } from "../types/foods-meals";

export const useMeals = (search?: string) => {
  const queryClient = useQueryClient();

  const {
    data: meals = [],
    isLoading,
    error,
  } = useQuery<Meal[], Error>({
    queryKey: ["meals", search ?? ""],
    queryFn: () => fetchMeals(search),
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
async function fetchMeals(search?: string): Promise<Meal[]> {
  const qs = search ? `?name=${encodeURIComponent(search)}` : "";
  const res = await fetch(`/api/meals${qs}`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch meals");
  }
  return res.json();
}

async function createMeal(meal: Omit<Meal, "id">): Promise<Meal> {
  const res = await fetch("/api/meals", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meal),
  });
  if (!res.ok) {
    throw new Error("Failed to create meal");
  }
  return res.json();
}

async function updateMeal(id: string, meal: Omit<Meal, "id">): Promise<Meal> {
  const res = await fetch(`/api/meals/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(meal),
  });
  if (!res.ok) {
    throw new Error("Failed to update meal");
  }
  return res.json();
}

async function deleteMeal(id: string): Promise<Meal> {
  const res = await fetch(`/api/meals/${id}`, { method: "DELETE" });
  if (!res.ok) {
    throw new Error("Failed to delete meal");
  }
  return res.json();
}
