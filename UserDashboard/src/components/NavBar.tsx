import { FaMoon, FaSun } from "react-icons/fa";

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function Navbar({
  darkMode,
  setDarkMode,
}: NavbarProps) {
  return (
    <nav
      className={`sticky top-0 z-50 shadow-md transition-all duration-300 ${
        darkMode
          ? "bg-slate-900 text-white"
          : "bg-white text-slate-900"
      }`}
    >
      <div className="flex justify-between items-center px-8 py-4">
        <h1 className="text-4xl font-bold">
          User Management Dashboard
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-3 rounded-full transition ${
              darkMode
                ? "bg-slate-700 text-yellow-400 hover:bg-slate-600"
                : "bg-slate-200 text-slate-800 hover:bg-slate-300"
            }`}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <div className="h-10 w-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
            A
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;