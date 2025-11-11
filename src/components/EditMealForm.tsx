// EditMealForm.tsx
"use client";

import { useState, useEffect } from "react";

interface EditMealFormProps {
  onClose: () => void;
  initialData?: {
    id: string;
    name: string;
    rating: string;
    image: string;
    restaurant: string;
    logo: string;
    status: string;
  };
}

interface FormData {
  id: string;
  name: string;
  rating: string;
  image: string;
  restaurant: string;
  logo: string;
  status: string;
}

interface FormErrors {
  name?: string;
  rating?: string;
  image?: string;
  restaurant?: string;
  logo?: string;
  status?: string;
}

export default function EditMealForm({ onClose, initialData }: EditMealFormProps) {
  const [form, setForm] = useState<FormData>({
    id: "",
    name: "",
    rating: "",
    image: "",
    restaurant: "",
    logo: "",
    status: "Open Now",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!form.name) newErrors.name = "Food Name is required";
    const ratingNum = Number(form.rating);
    if (!form.rating || isNaN(ratingNum) || ratingNum < 1 || ratingNum > 5) newErrors.rating = "Food Rating must be a number (1-5)";
    if (!form.image) newErrors.image = "Food Image URL is required";
    if (!form.restaurant) newErrors.restaurant = "Restaurant Name is required";
    if (!form.logo) newErrors.logo = "Restaurant Logo URL is required";
    if (!["Open Now","Closed"].includes(form.status)) newErrors.status = "Restaurant Status must be ‘Open Now’ or ‘Closed’";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const payload = { ...form, rating: Number(form.rating) };
      const res = await fetch(`/api/meals/${form.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const msg = await res.text();
        throw new Error(msg || "Failed to save meal");
      }
      setForm({ id: "", name: "", rating: "", image: "", restaurant: "", logo: "", status: "" });
      setErrors({});
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="food_name" className="sr-only">Food Name</label>
        <input id="food_name" name="food_name" type="text" placeholder="Enter food name" className="food-input bg-[#F5F5F5] p-3 rounded text-[#4A4A4A]" aria-describedby="food-name-error"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        {errors.name && <p id="food-name-error" className="text-[#FF6868] text-sm">{errors.name}</p>}
      </div>
      {/* Rating */}
      <div className="flex flex-col">
        <label htmlFor="food_rating" className="sr-only">Food Rating</label>
        <input id="food_rating" name="food_rating" type="number" placeholder="Food rating (1-5)" className="food-input bg-[#F5F5F5] p-3 rounded text-[#4A4A4A]" aria-describedby="food-rating-error"
          value={form.rating}
          onChange={(e) => setForm({ ...form, rating: e.target.value })}
        />
        {errors.rating && <p id="food-rating-error" className="text-[#FF6868] text-sm">{errors.rating}</p>}
      </div>
      {/* Image */}
      <div className="flex flex-col">
        <label htmlFor="food_image" className="sr-only">Food Image URL</label>
        <input id="food_image" name="food_image" type="text" placeholder="Food image URL" className="food-input bg-[#F5F5F5] p-3 rounded text-[#4A4A4A]" aria-describedby="food-image-error"
          value={form.image}
          onChange={(e) => setForm({ ...form, image: e.target.value })}
        />
        {errors.image && <p id="food-image-error" className="text-[#FF6868] text-sm">{errors.image}</p>}
      </div>
      {/* Restaurant */}
      <div className="flex flex-col">
        <label htmlFor="restaurant_name" className="sr-only">Restaurant Name</label>
        <input id="restaurant_name" name="restaurant_name" type="text" placeholder="Restaurant name" className="food-input bg-[#F5F5F5] p-3 rounded text-[#4A4A4A]" aria-describedby="restaurant-name-error"
          value={form.restaurant}
          onChange={(e) => setForm({ ...form, restaurant: e.target.value })}
        />
        {errors.restaurant && <p id="restaurant-name-error" className="text-[#FF6868] text-sm">{errors.restaurant}</p>}
      </div>
      {/* Logo */}
      <div className="flex flex-col">
        <label htmlFor="restaurant_logo" className="sr-only">Restaurant Logo URL</label>
        <input id="restaurant_logo" name="restaurant_logo" type="text" placeholder="Restaurant logo URL" className="food-input bg-[#F5F5F5] p-3 rounded text-[#4A4A4A]" aria-describedby="restaurant-logo-error"
          value={form.logo}
          onChange={(e) => setForm({ ...form, logo: e.target.value })}
        />
        {errors.logo && <p id="restaurant-logo-error" className="text-[#FF6868] text-sm">{errors.logo}</p>}
      </div>
      {/* Status */}
      <div className="flex flex-col">
        <label htmlFor="restaurant_status" className="sr-only">Restaurant Status</label>
        <select id="restaurant_status" name="restaurant_status"
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          className="bg-[#F5F5F5] p-3 rounded text-[#4A4A4A] border border-gray-300"
        >
                    <option value="Open Now">Open Now</option>
          <option value="Closed">Closed</option>
        </select>
        {errors.status && <p id="restaurant-status-error" className="text-[#FF6868] text-sm">{errors.status}</p>}
      </div>
      {/* Buttons */}
      <div className="flex space-x-3 mt-4">
        <button
          data-test-id="food-edit-btn"
          type="submit"
          className="flex-1 food-btn-add text-white py-3 rounded-lg font-semibold disabled:opacity-50"
          disabled={loading}
        >
          {loading ? "Updating Food …" : "Update Food"}
        </button>
        <button
          className="flex-1 food-btn-add text-white py-3 rounded-lg font-semibold disabled:opacity-50"
  data-testid="food-edit-btn"
  type="submit" onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
