import type { User } from "../types/User";
import { FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface UserCardProps {
  user: User;
  darkMode: boolean;
}

function UserCard({ user, darkMode }: UserCardProps) {
  const navigate = useNavigate();
  return (
    <div
      className={`rounded-2xl shadow-lg p-6 transition-all duration-300 ${darkMode
          ? "bg-slate-800 text-white"
          : "bg-white text-slate-900"
        }`}
    >       <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
        {user.name.charAt(0)}
      </div>
      <div className="mb-4">
        <h2
          className={`text-3xl font-bold ${darkMode
              ? "text-white"
              : "text-slate-800"
            }`}
        >
          {user.name}
        </h2>

        <p
          className={
            darkMode
              ? "text-slate-300"
              : "text-slate-500"
          }
        >
          @{user.username}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2 mb-4">
          <FaEnvelope className="text-blue-500" />
          <span
            className={
              darkMode
                ? "text-slate-300"
                : "text-slate-700"
            }
          >
            {user.email}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <FaPhone className="text-green-500" />
          <span
            className={
              darkMode
                ? "text-slate-300"
                : "text-slate-700"
            }
          >
            {user.phone}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <FaMapMarkerAlt className="text-red-500" />
          <span
            className={
              darkMode
                ? "text-slate-300"
                : "text-slate-700"
            }
          >
            {user.address.city}
          </span>
        </div>

        <div className="flex items-center gap-2 mb-4">
          <FaBuilding className="text-purple-500" />
          <span
            className={
              darkMode
                ? "text-slate-300"
                : "text-slate-700"
            }
          >
            {user.company.name}
          </span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t">
        <button
          className="w-full bg-blue-600 text-white py-3 rounded-xl duration-300 hover:bg-blue-700 hover:scale-105 active:scale-95 transition-all"
          onClick={() => navigate(`/users/${user.id}`)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default UserCard;