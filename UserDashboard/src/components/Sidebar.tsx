import SearchBar from "./SearchBar";
import SortControls from "./SortControls";
import FilterControls from "./FilterControls";

import {
  FaUsers,
  FaSearch,
  FaSort,
  FaFilter,
} from "react-icons/fa";

interface SidebarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;

  sortField: string;
  setSortField: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;

  cities: string[];
  companies: string[];

  selectedCity: string;
  setSelectedCity: React.Dispatch<React.SetStateAction<string>>;

  selectedCompany: string;
  setSelectedCompany: React.Dispatch<React.SetStateAction<string>>;
}

function Sidebar({
  search,
  setSearch,

  sortField,
  setSortField,
  sortOrder,
  setSortOrder,

  cities,
  companies,

  selectedCity,
  setSelectedCity,

  selectedCompany,
  setSelectedCompany,
}: SidebarProps) {
  return (
    <aside className="w-72 h-screen sticky top-0 bg-slate-900 text-white shadow-2xl flex flex-col">
      
      {/* Header */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="bg-blue-600 p-2 rounded-lg">
            <FaUsers className="text-white text-xl" />
          </div>

          <div>
            <h2 className="text-xl font-bold">
              Dashboard
            </h2>

            <p className="text-xs text-slate-400">
              User Management
            </p>
          </div>
        </div>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 p-6 overflow-y-auto">

        {/* Search */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3 ">
            <FaSearch className="text-slate-400 transition-transform duration-300 hover:rotate-12 hover:text-blue-400" />
            <h3 className="font-semibold text-slate-300 transition-colors duration-300 hover:text-blue-400">
              Search Users
            </h3>
          </div>

          <SearchBar
            search={search}
            setSearch={setSearch}
          />
        </div>

        <div className="border-t border-slate-800 my-6"></div>

        {/* Sorting */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-3">
            <FaSort className="text-slate-400 transition-transform duration-300 hover:rotate-12 hover:text-blue-400" />
            <h3 className="font-semibold text-slate-300 transition-colors duration-300 hover:text-blue-400">
              Sort Users
            </h3>
          </div>

          <SortControls
            sortField={sortField}
            setSortField={setSortField}
            sortOrder={sortOrder}
            setSortOrder={setSortOrder}
          />
        </div>

        <div className="border-t border-slate-800 my-6"></div>

        {/* Filters */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaFilter className="text-slate-400 transition-transform duration-300 hover:rotate-12 hover:text-blue-400" />
            <h3 className="font-semibold text-slate-300 transition-colors duration-300 hover:text-blue-400">
              Filters
            </h3>
          </div>

          <FilterControls
            cities={cities}
            companies={companies}
            selectedCity={selectedCity}
            setSelectedCity={setSelectedCity}
            selectedCompany={selectedCompany}
            setSelectedCompany={setSelectedCompany}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-slate-800">
        <p className="text-sm text-slate-400">
          User Management Dashboard
        </p>

        <p className="text-xs text-slate-500 mt-1">
          React • TypeScript • Tailwind CSS
        </p>
      </div>
    </aside>
  );
}

export default Sidebar;