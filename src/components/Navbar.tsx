"use client";

import { useState } from "react";
import AddMealModal from "./AddMealModal";
import AddMealForm from "./AddMealForm";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Navbar */}
      <div className="flex justify-between px-6 py-4 bg-white">
        {/* Logo */}
        <div>
          <span className="food-logo-food ">Food</span>
          <span className="food-logo-wagen ">
            Wagen
          </span>
        </div>

        {/* Add Button */}
        <div>
          <button
            className="food-btn-add bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold"
            onClick={() => setOpen(true)}
            data-test-id="food-open-modal-btn"
          >
            Add
          </button>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <AddMealModal onClose={() => setOpen(false)}>
          <div className="p-6 w-[612px] max-w-[90vw]">
            <h2 className="text-3xl md:text-4xl text-[#FF9A0E] font-bold mb-6 text-center">
              Add a New Meal
            </h2>

            {/* Formulaire AddMealForm */}
            <AddMealForm onClose={() => setOpen(false)} />
          </div>
        </AddMealModal>
      )}
    </>
  );
}
