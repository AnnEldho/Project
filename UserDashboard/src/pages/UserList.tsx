import { useEffect, useState } from "react";
import { getUsers } from "../services/UserServices";
import type { User } from "../types/User";

import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UserCard";
import SearchBar from "../components/SearchBar";
import SortControls from "../components/SortControls";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setLoading(true);

        const data = await getUsers();

        setUsers(data);
        setError("");
      } catch (err) {
        setError("Failed to load users");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const filteredUsers: User[] = [];

  for (const user of users) {
    if (
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    ) {
      filteredUsers.push(user);
    }
  }

  const sortedUsers = [...filteredUsers].sort((a, b) => {
    const valueA = a[sortField as keyof User];
    const valueB = b[sortField as keyof User];

    if (
      typeof valueA === "string" &&
      typeof valueB === "string"
    ) {
      return sortOrder === "asc"
        ? valueA.localeCompare(valueB)
        : valueB.localeCompare(valueA);
    }

    return 0;
  });

  if (loading) {
    return (
      <div className="p-6 text-center">
        Loading users...
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-6 text-center">
        <p className="text-red-500 mb-4">{error}</p>

        <button
          onClick={() => window.location.reload()}
          className="px-4 py-2 bg-blue-500 text-white rounded"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
  <div className="min-h-screen bg-gray-100">
    <Navbar />

    <div className="flex">
      <Sidebar
        search={search}
        setSearch={setSearch}
        sortField={sortField}
        setSortField={setSortField}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />

      <main className="flex-1 p-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {sortedUsers.length > 0 ? (
            sortedUsers.map((user) => (
              <UserCard
                key={user.id}
                user={user}
              />
            ))
          ) : (
            <div className="col-span-full text-center text-lg font-semibold">
              No users found
            </div>
          )}
        </div>
      </main>
    </div>
  </div>
);
}

export default UserList;