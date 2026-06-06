import React,{lazy,Suspense} from "react";
import { Routes, Route } from "react-router-dom";

const UserList = lazy(() => import("../pages/UserList"));
const UserDetail = lazy(() => import("../pages/UserDetail"));

interface AppRoutesProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function AppRoutes({
  darkMode,
  setDarkMode,
}: AppRoutesProps) {
  return (
  <Suspense
    fallback={
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading Page...
      </div>
    }
  >
    <Routes>
      <Route
        path="/"
        element={
          <UserList
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />

      <Route
        path="/users/:id"
        element={
          <UserDetail
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
        }
      />
    </Routes>
  </Suspense>
);}

export default AppRoutes;