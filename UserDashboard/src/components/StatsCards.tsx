import type { User } from "../types/User";

interface StatsCardsProps {
  users: User[];
  darkMode: boolean;
}

function StatsCards({
  users,
  darkMode,
}: StatsCardsProps) {
  const cities = new Set(
    users.map((user) => user.address.city)
  );

  const companies = new Set(
    users.map((user) => user.company.name)
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

      {/* Total Users */}
      <div
        className={`
          rounded-2xl
          shadow-md
          p-6
          transition-all
          duration-300
          hover:shadow-2xl
          hover:-translate-y-2
          border-l-4
          border-blue-500
          ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-900"
          }
        `}
      >
        <h3
          className={
            darkMode
              ? "text-slate-400 text-sm"
              : "text-gray-500 text-sm"
          }
        >
          Total Users
        </h3>

        <p className="text-3xl font-bold mt-2">
          {users.length}
        </p>
      </div>

      {/* Cities */}
      <div
        className={`
          rounded-2xl
          shadow-md
          p-6
          transition-all
          duration-300
          hover:shadow-2xl
          hover:-translate-y-2
          border-l-4
          border-blue-500
          ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-900"
          }
        `}
      >
        <h3
          className={
            darkMode
              ? "text-slate-400 text-sm"
              : "text-gray-500 text-sm"
          }
        >
          Cities
        </h3>

        <p className="text-3xl font-bold mt-2">
          {cities.size}
        </p>
      </div>

      {/* Companies */}
      <div
        className={`
          rounded-2xl
          shadow-md
          p-6
          transition-all
          duration-300
          hover:shadow-2xl
          hover:-translate-y-2
          border-l-4
          border-blue-500
          ${
            darkMode
              ? "bg-slate-800 text-white"
              : "bg-white text-slate-900"
          }
        `}
      >
        <h3
          className={
            darkMode
              ? "text-slate-400 text-sm"
              : "text-gray-500 text-sm"
          }
        >
          Companies
        </h3>

        <p className="text-3xl font-bold mt-2">
          {companies.size}
        </p>
      </div>

    </div>
  );
}

export default StatsCards;