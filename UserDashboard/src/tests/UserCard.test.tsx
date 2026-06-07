import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import UserCard from "../components/UserCard";

const mockUser = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "leanne@example.com",
  phone: "1-770-736-8031",
  website: "hildegard.org",
  address: {
    city: "Gwenborough",
  },
  company: {
    name: "Romaguera-Crona",
  },
};

describe("UserCard Component", () => {
  test("renders user name", () => {
    render(
      <BrowserRouter>
        <UserCard
          user={mockUser as any}
          darkMode={false}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Leanne Graham")
    ).toBeInTheDocument();
  });

  test("renders user email", () => {
    render(
      <BrowserRouter>
        <UserCard
          user={mockUser as any}
          darkMode={false}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByText("leanne@example.com")
    ).toBeInTheDocument();
  });

  test("renders company name", () => {
    render(
      <BrowserRouter>
        <UserCard
          user={mockUser as any}
          darkMode={false}
        />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Romaguera-Crona")
    ).toBeInTheDocument();
  });
});