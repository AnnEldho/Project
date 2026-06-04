import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../types/User";
import { getUsers } from "../services/UserServices";

function UserDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

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
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 p-8">

      {/* Back Button */}
      <button
        onClick={() => navigate(-1)}
        className="
          mb-6
          bg-blue-600
          text-white
          px-5
          py-2
          rounded-xl
          hover:bg-blue-700
          hover:scale-105
          transition-all
          duration-300
        "
      >
        ← Back to Dashboard
      </button>

      {/* User Header */}
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
        <div className="flex items-center gap-6">

          <div
            className="
              w-24
              h-24
              rounded-full
              bg-blue-600
              text-white
              flex
              items-center
              justify-center
              text-4xl
              font-bold
              shadow-lg
            "
          >
            {user.name.charAt(0)}
          </div>

          <div>
            <h1 className="text-4xl font-bold text-slate-800">
              {user.name}
            </h1>

            <p className="text-slate-500 text-lg">
              @{user.username}
            </p>
          </div>
        </div>
      </div>

      {/* Information Cards */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* Contact Information */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            hover:-translate-y-1
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <h2 className="text-xl font-bold mb-4 text-blue-600">
            Contact Information
          </h2>

          <div className="space-y-2">
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Website:</strong> {user.website}</p>
          </div>
        </div>

        {/* Address Information */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            hover:-translate-y-1
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <h2 className="text-xl font-bold mb-4 text-blue-600">
            Address Information
          </h2>

          <div className="space-y-2">
            <p><strong>Street:</strong> {user.address.street}</p>
            <p><strong>Suite:</strong> {user.address.suite}</p>
            <p><strong>City:</strong> {user.address.city}</p>
            <p><strong>Zipcode:</strong> {user.address.zipcode}</p>
            <p><strong>Latitude:</strong> {user.address.geo.lat}</p>
            <p><strong>Longitude:</strong> {user.address.geo.lng}</p>
          </div>
        </div>

        {/* Company Information */}
        <div
          className="
            bg-white
            rounded-2xl
            shadow-md
            p-6
            md:col-span-2
            hover:-translate-y-1
            hover:shadow-xl
            transition-all
            duration-300
          "
        >
          <h2 className="text-xl font-bold mb-4 text-blue-600">
            Company Information
          </h2>

          <div className="space-y-2">
            <p><strong>Name:</strong> {user.company.name}</p>

            <p>
              <strong>Catch Phrase:</strong>{" "}
              {user.company.catchPhrase}
            </p>

            <p>
              <strong>Business:</strong>{" "}
              {user.company.bs}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default UserDetail;