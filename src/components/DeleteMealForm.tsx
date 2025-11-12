// DeleteMealForm.tsx
"use client";

import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

interface DeleteMealFormProps {
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

export default function DeleteMealForm({ onClose, initialData }: DeleteMealFormProps) {
  const [loading, setLoading] = useState(false);
  const queryClient = useQueryClient();

  const handleDelete = async () => {
    if (!initialData?.id) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/meals/${initialData.id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete meal");
      await queryClient.invalidateQueries({ queryKey: ["meals"] });
      onClose();
    } catch (err) {
      console.error("DELETE ERROR:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-5">
      <p className="text-[#424242]">
        Are you sure you want to delete <strong>{initialData?.name}</strong>? This action cannot be undone.
      </p>

      <div className="flex space-x-3 mt-4">
        <button
          type="button"
          data-test-id="food-delete-btn" className="flex-1 food-btn-add text-white py-3 rounded-lg font-semibold disabled:opacity-50"
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? "Deleting Food …" : "Delete Food"}
        </button>

        <button
          type="button"
          className="flex-1 text-gray-700 py-3 border border-[#FF9A0E] rounded-lg font-semibold"
          onClick={onClose}
          disabled={loading}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
