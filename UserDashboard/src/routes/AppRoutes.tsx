import { Routes, Route } from "react-router-dom";
import UserList from "../pages/UserList";
import UserDetail from "../pages/UserDetail";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
      <Route path="/users/:id" element={<UserDetail />} />
    </Routes>
  );
}

export default AppRoutes;