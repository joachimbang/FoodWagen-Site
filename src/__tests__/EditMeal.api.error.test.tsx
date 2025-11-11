import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EditMealForm from "../components/EditMealForm";
import React from "react";

describe("EditMealForm API Error", () => {
  const initialData = {
    id: "7",
    name: "Pizza",
    rating: "3",
    image: "https://example.com/pizza.jpg",
    restaurant: "Chez Mario",
    logo: "https://example.com/logo.png",
    status: "Open Now",
  };

  const mockFetch = jest.fn();
  (global as any).fetch = mockFetch;

  afterEach(() => {
    jest.resetAllMocks();
  });

  test("handles backend error gracefully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: false,
      text: async () => "Not found",
    });

    console.error = jest.fn();

    render(<EditMealForm onClose={() => {}} initialData={initialData} />);

    const submitButton = await screen.findByTestId("food-edit-btn");
    fireEvent.click(submitButton);

    // Attend que fetch soit appelé
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));

    // Le bouton ne doit pas rester disabled après erreur
    await waitFor(() =>
      expect(submitButton).not.toBeDisabled()
    );

    // console.error doit avoir été appelé
    expect(console.error).toHaveBeenCalled();
  });
});
