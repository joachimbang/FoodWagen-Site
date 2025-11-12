import { render, screen } from "@testing-library/react";
import FoodCard from "../components/FoodCard";

describe("FoodCard Rendering", () => {
  test("renders food name, rating, and price correctly", () => {
    render(
      <FoodCard
        id="1"
        name="Burger"
        price={12.5}
        description="Tasty"
        imageUrl="https://example.com/burger.png"
        rating={4.5}
        status="Open Now"
        restaurant="Food House"
        logo="https://example.com/logo.png"
      />
    );

    expect(screen.getByText("Burger")).toBeInTheDocument();
    expect(screen.getByText("4.5")).toBeInTheDocument();
    expect(screen.getByText("Open Now")).toBeInTheDocument();
    expect(screen.getByAltText("Burger")).toBeInTheDocument();
  });
});
