import { useEffect, useState } from "react";
import { getUsers } from "../services/UserServices";
import type { User } from "../types/User";
import UserCard from "../components/UserCard";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
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

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-8">
        User Dashboard
      </h1>

      <input
        type="text"
        placeholder="Search by name, username or email..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full p-3 mb-6 border rounded-lg bg-white"
      />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <UserCard
              key={user.id}
              user={user}
            />
          ))
        ) : (
          <p className="text-lg font-semibold">
            No users found
          </p>
        )}
      </div>
    </div>
  );
}

export default UserList;