import { render, screen } from "@testing-library/react";
import StatsCards from "../components/StatsCards";

const users = [
  {
    id: 1,
    address: {
      city: "London",
    },
    company: {
      name: "ABC",
    },
  },
  {
    id: 2,
    address: {
      city: "Paris",
    },
    company: {
      name: "XYZ",
    },
  },
];

describe("StatsCards Component", () => {
  test("renders Total Users label", () => {
    render(
      <StatsCards
        users={users as any}
        darkMode={false}
      />
    );

    expect(
      screen.getByText("Total Users")
    ).toBeInTheDocument();
  });

  test("renders Cities label", () => {
    render(
      <StatsCards
        users={users as any}
        darkMode={false}
      />
    );

    expect(
      screen.getByText("Cities")
    ).toBeInTheDocument();
  });

  test("renders Companies label", () => {
    render(
      <StatsCards
        users={users as any}
        darkMode={false}
      />
    );

    expect(
      screen.getByText("Companies")
    ).toBeInTheDocument();
  });
});