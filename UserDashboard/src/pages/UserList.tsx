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
    <div>
      <h1>User Dashboard</h1>

      {users.map((user) => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
}

export default UserList;