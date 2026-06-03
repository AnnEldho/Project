import { Routes, Route } from "react-router-dom";
import UserList from "../pages/UserList";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserList />} />
    </Routes>
  );
}

export default AppRoutes;