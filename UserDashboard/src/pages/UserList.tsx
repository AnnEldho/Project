import { useEffect,useMemo, useState } from "react";
import { getUsers } from "../services/UserServices";
import type { User } from "../types/User";
import Navbar from "../components/NavBar";
import Sidebar from "../components/Sidebar";
import UserCard from "../components/UserCard";
import StatsCards from "../components/StatsCards";
import Pagination from "../components/Pagination";

function UserList() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");

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

  const cities = [...new Set(users.map((user) => user.address.city))];
  const companies = [...new Set(users.map((user) => user.company.name))];


  const filteredUsers = useMemo(() => {
    console.log("Filtering...");
  return users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.username.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase());

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
}, [users, search, selectedCity, selectedCompany]);

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
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="flex">
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
        />

        <main className="flex-1 p-8">
          <StatsCards users={users} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentUsers.length > 0 ? (
              currentUsers.map((user) => (
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