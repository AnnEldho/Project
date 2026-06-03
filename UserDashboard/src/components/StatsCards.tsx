import type { User } from "../types/User";

interface StatsCardsProps {
  users: User[];
}

function StatsCards({ users }: StatsCardsProps) {
  const cities = new Set(users.map((user) => user.address.city));
  const companies = new Set(users.map((user) => user.company.name));

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white p-6 rounded-xl shadow border-1-4 border-blue-500 ">
        <h3 className="text-gray-500 text-sm">Total Users</h3>
        <p className="text-3xl font-bold">{users.length}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border-1-4 border-green-500">
        <h3 className="text-gray-500 text-sm">Cities</h3>
        <p className="text-3xl font-bold">{cities.size}</p>
      </div>

      <div className="bg-white p-6 rounded-xl shadow border-1-4 border-purple-500">
        <h3 className="text-gray-500 text-sm">Companies</h3>
        <p className="text-3xl font-bold">{companies.size}</p>
      </div>
    </div>
  );
}

export default StatsCards;