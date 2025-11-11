"use client";

import { useState } from "react";

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
            className="food-btn-add bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold"          >
            Add
          </button>
        </div>
      </div>


    </>
  );
}
