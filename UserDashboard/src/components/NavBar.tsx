import { FaUserCircle } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="bg-white shadow-md px-8 py-4 flex justify-between items-center">
  <h1 className="text-2xl font-bold text-gray-800">
    User Management Dashboard
  </h1>

  <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold">
    A
  </div>
</nav>
  );
}

export default Navbar;