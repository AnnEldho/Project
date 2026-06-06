import { useEffect, useMemo, useState } from "react";
import { getUsers } from "../services/UserServices";
import type { User } from "../types/User";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UserCard";
import StatsCards from "../components/StatsCards";
import Pagination from "../components/Pagination";

interface UserListProps {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
}

function UserList({ darkMode, setDarkMode }: UserListProps) {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [sortField, setSortField] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCompany, setSelectedCompany] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

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

  useEffect(() => {
    setCurrentPage(1);
  }, [
    search,
    selectedCity,
    selectedCompany,
    sortField,
    sortOrder,
  ]);
useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedSearch(search);
  }, 500);

  return () => clearTimeout(timer);
}, [search]);
  const cities = [...new Set(users.map((user) => user.address.city))];
  const companies = [...new Set(users.map((user) => user.company.name))];


  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
    return users.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
user.username.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
user.email.toLowerCase().includes(debouncedSearch.toLowerCase());
      const matchesCity =
        selectedCity === "" ||
        user.address.city === selectedCity;

      const matchesCompany =
        selectedCompany === "" ||
        user.company.name === selectedCompany;

      return (
        matchesSearch &&
        matchesCity &&
        matchesCompany
      );
    });
  }, [users, debouncedSearch, selectedCity, selectedCompany]);

  const sortedUsers = useMemo(() => {
    console.log("Sorting...");
    return [...filteredUsers].sort((a, b) => {
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
  }, [filteredUsers, sortField, sortOrder]);
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;

  const currentUsers = sortedUsers.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(
    sortedUsers.length / usersPerPage
  );

  if (loading) {
    return (
      <div className="h-screen bg-slate-100 p-8">
        <div className="animate-pulse">

          {/* Stats Cards Skeleton */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="h-28 bg-slate-300 rounded-2xl"></div>
            <div className="h-28 bg-slate-300 rounded-2xl"></div>
            <div className="h-28 bg-slate-300 rounded-2xl"></div>
          </div>

          {/* User Cards Skeleton */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-slate-300 rounded-2xl h-64"
              ></div>
            ))}
          </div>

        </div>
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
    <div
      className={`h-screen overflow-hidden transition-all duration-300 ${darkMode
          ? "bg-slate-900 text-white"
          : "bg-slate-100 text-slate-900"
        }`}
    >
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      <div className="flex h-[calc(100vh-72px)]">

        <Sidebar
          search={search}
          setSearch={setSearch}
          sortField={sortField}
          setSortField={setSortField}
          sortOrder={sortOrder}
          setSortOrder={setSortOrder}
          cities={cities}
          companies={companies}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
          darkMode={darkMode}
        />

        <main
          className="
        flex-1
        overflow-y-auto
        p-8
        "
        >
          <StatsCards users={users} darkMode={darkMode} />

          <div className="mb-6">
            <p
              className={`text-sm font-medium ${darkMode
                  ? "text-slate-400"
                  : "text-slate-600"
                }`}
            >
              Showing{" "}
              <span className="font-bold text-blue-500">
                {sortedUsers.length}
              </span>{" "}
              user(s)
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  darkMode={darkMode}
                />
              ))
            ) : (
              <div className="col-span-full text-center text-lg font-semibold">
                No users found
              </div>
            )}
          </div>

          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
          />
        </main>

      </div>
    </div>
  );
}

export default UserList;