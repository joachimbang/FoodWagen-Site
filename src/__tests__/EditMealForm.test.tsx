import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import EditMealForm from "../components/EditMealForm";
import React from "react";

// Mock fetch
const mockFetch = jest.fn();
(global as any).fetch = mockFetch;

afterEach(() => {
  jest.resetAllMocks();
});

describe("EditMealForm", () => {
  const initialData = {
    id: "2",
    name: "Pizza",
    rating: "3",
    image: "https://example.com/pizza.jpg",
    restaurant: "Chez Mario",
    logo: "https://example.com/logo.png",
    status: "Open Now",
  };

  test("submits updated meal successfully", async () => {
    mockFetch.mockResolvedValueOnce({ ok: true, json: async () => ({}) });
    const onClose = jest.fn();
    render(<EditMealForm onClose={onClose} initialData={initialData} />);

    // change rating input
    const ratingInput = screen.getByLabelText(/food rating/i);
    fireEvent.change(ratingInput, { target: { value: "4" } });

    const formElement = screen.getByRole("form");
    fireEvent.submit(formElement);

    await waitFor(() => expect(mockFetch).toHaveBeenCalledTimes(1));
    const [url, options] = mockFetch.mock.calls[0];
    expect(url).toBe(`/api/meals/${initialData.id}`);
    expect(JSON.parse(options.body).rating).toBe(4); // numeric
    expect(onClose).toHaveBeenCalled();
  });

  test("handles backend error", async () => {
    mockFetch.mockResolvedValueOnce({ ok: false, text: async () => "Not found" });
    console.error = jest.fn();
    render(<EditMealForm onClose={jest.fn()} initialData={initialData} />);

    const formElement = screen.getByRole("form");
    fireEvent.submit(formElement);

    await waitFor(() => expect(mockFetch).toHaveBeenCalled());
    expect(screen.getByRole("button", { name: /update food/i })).not.toBeDisabled();
  });
});
