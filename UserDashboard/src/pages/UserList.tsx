import { useEffect, useState } from "react";
import { getUsers } from "../services/UserServices";
import type{ User } from "../types/User";
import UserCard from "../components/UserCard";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    getUsers().then((data) => setUsers(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-4xl font-bold mb-8">
    User Dashboard
  </h1>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {users.map((user) => (
      <UserCard
        key={user.id}
        user={user}
      />
    ))}
  </div>
</div>
  );
}

export default UserList;