import { render, screen, fireEvent } from "@testing-library/react";
import EditMealForm from "../components/EditMealForm";
import React from "react";

describe("EditMealForm User Interaction", () => {
  const initialData = {
    id: "7",
    name: "Pizza",
    rating: "3",
    image: "https://example.com/pizza.jpg",
    restaurant: "Chez Mario",
    logo: "https://example.com/logo.png",
    status: "Open Now",
  };

  test("shows validation error when rating is incorrect", async () => {
    render(<EditMealForm onClose={() => {}} initialData={initialData} />);

    const ratingInput = screen.getByLabelText(/food rating/i);
    fireEvent.change(ratingInput, { target: { value: "10" } });

    const submitButton = screen.getByRole("button", { name: /update food/i });
    fireEvent.click(submitButton);

    expect(
      await screen.findByText(/Food Rating must be a number \(1-5\)/i)
    ).toBeInTheDocument();
  });
});
