import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { User } from "../types/User";
import { getUsers } from "../services/UserServices";

function UserDetail() {
  const { id } = useParams();

  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    getUsers().then((data) => {
      const selectedUser = data.find(
        (u: User) => u.id === Number(id)
      );

      setUser(selectedUser || null);
    });
  }, [id]);

  if (!user) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-slate-100 p-8">
      <h1 className="text-3xl font-bold mb-6">
        User Details
      </h1>

      <div className="bg-white rounded-xl shadow p-6 space-y-6">
        
        <div>
          <h2 className="text-xl font-bold mb-2">
            Basic Information
          </h2>

          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Phone:</strong> {user.phone}</p>
          <p><strong>Website:</strong> {user.website}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">
            Address Information
          </h2>

          <p><strong>Street:</strong> {user.address.street}</p>
          <p><strong>Suite:</strong> {user.address.suite}</p>
          <p><strong>City:</strong> {user.address.city}</p>
          <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
          <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
          <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-2">
            Company Information
          </h2>

          <p><strong>Name:</strong> {user.company.name}</p>
          <p><strong>Catch Phrase:</strong> {user.company.catchPhrase}</p>
          <p><strong>Business:</strong> {user.company.bs}</p>
        </div>

      </div>
    </div>
  );
}

export default UserDetail;