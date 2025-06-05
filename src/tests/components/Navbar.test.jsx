import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../../components/Navbar"; // ✅ Corrected path

test("Navbar renders without crashing", () => {
  render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  const logo = screen.getByText(/BreakfastCo/i);
  expect(logo).toBeInTheDocument();
});
