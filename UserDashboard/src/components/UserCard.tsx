import type { User } from "../types/User";
import { FaEnvelope, FaPhone, FaBuilding, FaMapMarkerAlt } from "react-icons/fa";

interface UserCardProps {
  user: User;
}

function UserCard({ user }: UserCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-6 border border-slate-100">
      
      <div className="mb-4">
        <h2 className="text-xl font-bold text-slate-800">
          {user.name}
        </h2>

        <p className="text-sm text-slate-500">
          @{user.username}
        </p>
      </div>

      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <FaEnvelope className="text-blue-500" />
          <span className="text-slate-700">
            {user.email}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaPhone className="text-green-500" />
          <span className="text-slate-700">
            {user.phone}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-red-500" />
          <span className="text-slate-700">
            {user.address.city}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <FaBuilding className="text-purple-500" />
          <span className="text-slate-700">
            {user.company.name}
          </span>
        </div>
      </div>

      <div className="mt-5 pt-4 border-t">
        <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
          View Details
        </button>
      </div>
    </div>
  );
}

export default UserCard;