"use client";

import { useState } from "react";
import EditMealForm from "./EditMealForm";
import EditMealModal from "./EditMealModal";
import DeleteMealForm from "./DeleteMealForm";
import DeleteMealModal from "./DeleteMealModal";

interface FoodCardProps {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
  rating: number;
  status?: string;
  restaurant: string;
  logo: string;
}

function isValidUrl(url: string): boolean {
  try {
    return Boolean(new URL(url));
  } catch {
    return false;
  }
}

export default function FoodCard({
  id,
  name,
  price,
  description,
  imageUrl,
  rating,
  status,
  restaurant,
  logo,
}: FoodCardProps) {
  const [isOptionsOpen, setIsOptionsOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

  const statusClasses =
    status === "Open Now"
      ? "text-[#79B93C] bg-[#79B93C33]"
      : "text-[#F17228] bg-[#F1722833]";

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(price || 0);

  const displayImage = isValidUrl(imageUrl)
    ? imageUrl
    : "https://via.placeholder.com/400x200?text=No+Image";

  const displayLogo = isValidUrl(logo)
    ? logo
    : "https://via.placeholder.com/64?text=Logo";

  return (
    <article className="animate-slide-up transition-transform duration-150 ease-out hover:-translate-y-1 rounded-xl w-full m-4 border shadow-sm p-2">
      {/* Main image */}
      <div className="rounded-xl w-full relative h-[200px] overflow-hidden">
        <img
          src={displayImage}
          alt={name}
          className="w-full h-full object-cover rounded-xl"
        />
        <div className="absolute top-4 left-4 bg-[#F17228] rounded-[10px] pl-4 pr-3 py-2 z-10 flex items-center relative">
          <div className="absolute -left-2 top-0 h-full w-0 border-y-transparent border-y-[18px] border-r-[#F17228] border-r-[8px]" />
          <p className="font-black text-white whitespace-nowrap">{formattedPrice}</p>
        </div>
      </div>

      {/* Info */}
      <div className="mt-4 flex justify-between items-start">
        <div className="flex justify-start items-center mb-2">
          <img
            src={displayLogo}
            alt={restaurant}
            width={64}
            height={64}
            className="rounded-xl object-cover"
          />
          <div className="flex flex-col ml-4 gap-1">
            <h3 className="text-lg font-bold text-[#424242]">{name}</h3>
            <div className="flex items-center">
              <span className="text-[#FFB30E]">★</span>
              <span className="text-[#FFB30E] ml-1 text-sm">{rating || 0}</span>
            </div>
          </div>
        </div>

        {/* Options */}
        <div className="relative">
          <span className="text-[#424242] text-xl cursor-pointer" onClick={() => setIsOptionsOpen(!isOptionsOpen)}>⋮</span>
          {isOptionsOpen && (
            <div className="absolute right-0 top-full mt-2 rounded-lg shadow-lg border w-32 z-20 bg-white">
              <button
                className="w-full px-4 py-2 text-[#425466] hover:bg-gray-100 text-left"
                onClick={() => {
                  setIsEditModalOpen(true);
                  setIsOptionsOpen(false);
                }}
              >
                Edit
              </button>
              <button
                className="w-full px-4 py-2 text-[#FF3B30] hover:bg-gray-100 text-left"
                onClick={() => {
                  setIsDeleteModalOpen(true);
                  setIsOptionsOpen(false);
                }}
              >
                Delete
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Status */}
      {status && (
        <p
          className={`text-sm font-semibold p-2 mt-4 rounded-xl ${statusClasses} w-fit mx-2`}
        >
          {status}
        </p>
      )}

      {/* Modals */}
      {isEditModalOpen && (
        <EditMealModal onClose={() => setIsEditModalOpen(false)}>
          <div className="p-6 w-[612px] max-w-[90vw]">
            <h2 className="text-3xl md:text-4xl text-[#FF9A0E] font-bold mb-6 text-center">
              Edit Meal
            </h2>
            <EditMealForm
              onClose={() => setIsEditModalOpen(false)}
              initialData={{
                id,
                name,
                rating: String(rating),
                image: displayImage,
                restaurant,
                logo: displayLogo,
                status: status ?? "Open Now",
              }}
            />
          </div>
        </EditMealModal>
      )}

      {isDeleteModalOpen && (
        <DeleteMealModal onClose={() => setIsDeleteModalOpen(false)}>
          <div className="p-6 w-[612px] max-w-[90vw]">
            <h2 className="text-3xl md:text-4xl text-[#FF3B30] font-bold mb-6 text-center">
              Delete Meal
            </h2>
            <DeleteMealForm
              onClose={() => setIsDeleteModalOpen(false)}
              initialData={{
                id,
                name,
                rating: String(rating),
                image: displayImage,
                restaurant,
                logo: displayLogo,
                status: status ?? "Open Now",
              }}
            />
          </div>
        </DeleteMealModal>
      )}
    </article>
  );
}

