// /src/types/foods-meals.ts
import { z } from "zod";

// ✅ Validation Zod avec restaurant et logo
export const MealSchema = z.object({
  id: z.string(),
  name: z.string(),
  price: z.number(),
  description: z.string(),
  imageUrl: z.union([z.string().url(), z.string().startsWith("/")]),
  rating: z.number(),
  status: z.string().optional(),
  restaurant: z.string(),
  logo: z.union([z.string().url(), z.string().startsWith("/")]),
});

// ✅ Type TypeScript inféré depuis Zod
export type Meal = z.infer<typeof MealSchema>;
