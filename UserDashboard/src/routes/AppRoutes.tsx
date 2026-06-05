import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "../pages/UserList";
import UserDetail from "../pages/UserDetail";

interface AppRoutesProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppRoutes({
  darkMode,
  setDarkMode,
}: AppRoutesProps) {
  return (
    <Routes>
      <Route path="/" element={React.createElement(UserList as any, { darkMode, setDarkMode })} />

      <Route path="/users/:id" element={React.createElement(UserDetail as any, { darkMode, setDarkMode })} />
    </Routes>
  );
}

export default AppRoutes;