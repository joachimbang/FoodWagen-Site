import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EditMealForm from "../components/EditMealForm";
import React from "react";

describe("EditMealForm API Success", () => {
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

  test("submits updated meal and calls API successfully", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    });

    const onClose = jest.fn();
    render(<EditMealForm onClose={onClose} initialData={initialData} />);

    // Modifier rating pour simuler un changement
    const ratingInput = screen.getByLabelText(/food rating/i);
    fireEvent.change(ratingInput, { target: { value: "5" } });

    const submitButton = await screen.findByTestId("food-edit-btn");
    fireEvent.click(submitButton);

    // Attend que fetch soit appelé
    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));

    // Vérifie l'appel avec le bon payload
    expect(mockFetch).toHaveBeenCalledWith(
      `/api/meals/${initialData.id}`,
      expect.objectContaining({
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: "7",
          name: "Pizza",
          rating: 5, // doit être un number
          image: "https://example.com/pizza.jpg",
          restaurant: "Chez Mario",
          logo: "https://example.com/logo.png",
          status: "Open Now",
        }),
      })
    );

    // onClose doit être appelé
    await waitFor(() => expect(onClose).toHaveBeenCalled());
  });
});
