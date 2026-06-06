import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type { User } from "../types/User";
import { getUsers } from "../services/UserServices";

interface UserDetailProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserDetail({ darkMode }: UserDetailProps) {
  const { id } = useParams();
  const navigate = useNavigate();

  const [user, setUser] = useState<User | null>(null);
  const [activeTab, setActiveTab] = useState("contact");

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
      <div
  className={`min-h-screen flex items-center justify-center text-xl font-semibold ${
    darkMode
      ? "bg-slate-950 text-white"
      : "bg-white text-slate-900"
  }`}
>        Loading...
      </div>
    );
  }

  return (
    <div
  className={`min-h-screen p-8 transition-all duration-300 ${
    darkMode
      ? "bg-slate-950 text-white"
      : "bg-gradient-to-br from-slate-100 via-blue-50 to-slate-200 text-slate-900"
  }`}
>
      {/* Profile Card */}
      <div
        className={`
max-w-4xl
mx-auto
rounded-3xl
shadow-lg
p-6
mb-8
transition-all
duration-300
${
  darkMode
    ? "bg-slate-800"
    : "bg-white"
}
`}
      >
        <div className="flex flex-col items-center text-center">

          <div
            className="
            w-32
            h-32
            rounded-full
            bg-blue-600
            text-white
            flex
            items-center
            justify-center
            text-6xl
            font-bold
            shadow-lg
            mb-4
            "
          >
            {user.name[0]}
          </div>

          <h1
  className={`text-5xl font-bold ${
    darkMode
      ? "text-white"
      : "text-slate-800"
  }`}
>        {user.name}
          </h1>

          <p className={`text-slate-500 text-xl mt-2 ${darkMode ? "text-slate-400" : "text-slate-500"}`}>
            @{user.username}
          </p>
        </div>
      </div>

      {/* Tabs */}
      <div
        className={`
max-w-md
mx-auto
rounded-2xl
shadow-md
p-2
flex
justify-center
gap-2
mb-8
${
  darkMode
    ? "bg-slate-800"
    : "bg-white"
}
`}
      >
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-5 py-2 rounded-xl transition-all duration-300 ${activeTab === "contact"
              ? "bg-blue-600 text-white shadow-md"
              : darkMode
                ? "text-slate-300 hover:bg-slate-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
        >
          Contact
        </button>

        <button
          onClick={() => setActiveTab("address")}
          className={`px-5 py-2 rounded-xl transition-all duration-300 ${activeTab === "address"
              ? "bg-blue-600 text-white shadow-md"
              : darkMode
                ? "text-slate-300 hover:bg-slate-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
        >
          Address
        </button>

        <button
          onClick={() => setActiveTab("company")}
          className={`px-5 py-2 rounded-xl transition-all duration-300 ${activeTab === "company"
              ? "bg-blue-600 text-white shadow-md"
              : darkMode
                ? "text-slate-300 hover:bg-slate-700"
                : "text-slate-600 hover:bg-slate-100"
            }`}
        >
          Company
        </button>
      </div>

      {/* Information Card */}
      <div
        className={`
  max-w-4xl
  mx-auto
  rounded-3xl
  shadow-lg
  p-10
  mb-8
  transition-all
  duration-300
  ${darkMode
            ? "bg-slate-800 text-white"
            : "bg-white text-slate-900"
          }
  `}
      >

        {activeTab === "contact" && (
          <>
            <h2 className="text-3xl font-bold mb-8 text-blue-600">
              Contact Information
            </h2>

            <div className="space-y-5">
              <div className="grid grid-cols-2">
                <span className="font-semibold">Email</span>
                <span>{user.email}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">Phone</span>
                <span>{user.phone}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">Website</span>
                <span>{user.website}</span>
              </div>
            </div>
          </>
        )}

        {activeTab === "address" && (
          <>
            <h2 className="text-3xl font-bold mb-8 text-blue-600">
              Address Information
            </h2>

            <div className="space-y-5">
              <div className="grid grid-cols-2">
                <span className="font-semibold">Street</span>
                <span>{user.address.street}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">Suite</span>
                <span>{user.address.suite}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">City</span>
                <span>{user.address.city}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">Zipcode</span>
                <span>{user.address.zipcode}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">Latitude</span>
                <span>{user.address.geo.lat}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">Longitude</span>
                <span>{user.address.geo.lng}</span>
              </div>
            </div>
          </>
        )}

        {activeTab === "company" && (
          <>
            <h2 className="text-3xl font-bold mb-8 text-blue-600">
              Company Information
            </h2>

            <div className="space-y-5">
              <div className="grid grid-cols-2">
                <span className="font-semibold">Company Name</span>
                <span>{user.company.name}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">Catch Phrase</span>
                <span>{user.company.catchPhrase}</span>
              </div>

              <div className="grid grid-cols-2">
                <span className="font-semibold">Business</span>
                <span>{user.company.bs}</span>
              </div>
            </div>
          </>
        )}
      </div>

      {/* Back Button */}
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="
          bg-slate-800
          text-white
          px-8
          py-3
          rounded-xl
          hover:bg-slate-700
          hover:scale-105
          transition-all
          duration-300
          shadow-md
          "
        >
          ← Back to Dashboard
        </button>
      </div>

    </div>
  );
}

export default UserDetail;