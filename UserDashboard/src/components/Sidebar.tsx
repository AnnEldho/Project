import { useState } from "react";

import SearchBar from "./SearchBar";
import SortControls from "./SortControls";
import FilterControls from "./FilterControls";

import {
  FaUsers,
  FaSearch,
  FaSort,
  FaFilter,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

interface SidebarProps {
  darkMode: boolean;

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
  darkMode,
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

  const [showSearch, setShowSearch] = useState(true);
  const [showSort, setShowSort] = useState(false);
  const [showFilter, setShowFilter] = useState(false);

  return (
    <aside className="w-64 h-[calc(100vh-72px)] bg-slate-900 text-white shadow-2xl flex flex-col">

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

      {/* Content */}
      <div className="flex-1 p-6 overflow-y-auto">

        {/* SEARCH */}
        <div className="mb-6">
          <div
            onClick={() => setShowSearch(!showSearch)}
            className="flex items-center justify-between cursor-pointer mb-3"
          >
            <div className="flex items-center gap-2">
              <FaSearch className="text-slate-400" />
              <h3 className="font-semibold text-slate-300">
                Search Users
              </h3>
            </div>

            {showSearch ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </div>

          {showSearch && (
            <SearchBar
              search={search}
              setSearch={setSearch}
            />
          )}
        </div>

        <div className="border-t border-slate-800 my-6"></div>

        {/* SORT */}
        <div className="mb-6">
          <div
            onClick={() => setShowSort(!showSort)}
            className="flex items-center justify-between cursor-pointer mb-3"
          >
            <div className="flex items-center gap-2">
              <FaSort className="text-slate-400" />
              <h3 className="font-semibold text-slate-300">
                Sort Users
              </h3>
            </div>

            {showSort ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </div>

          {showSort && (
            <SortControls
              sortField={sortField}
              setSortField={setSortField}
              sortOrder={sortOrder}
              setSortOrder={setSortOrder}
            />
          )}
        </div>

        <div className="border-t border-slate-800 my-6"></div>

        {/* FILTERS */}
        <div>
          <div
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center justify-between cursor-pointer mb-3"
          >
            <div className="flex items-center gap-2">
              <FaFilter className="text-slate-400" />
              <h3 className="font-semibold text-slate-300">
                Filters
              </h3>
            </div>

            {showFilter ? (
              <FaChevronDown />
            ) : (
              <FaChevronRight />
            )}
          </div>

          {showFilter && (
            <>
              <FilterControls
                cities={cities}
                companies={companies}
                selectedCity={selectedCity}
                setSelectedCity={setSelectedCity}
                selectedCompany={selectedCompany}
                setSelectedCompany={setSelectedCompany}
              />

              <button
                onClick={() => {
                  setSearch("");
                  setSelectedCity("");
                  setSelectedCompany("");
                  setSortField("name");
                  setSortOrder("asc");
                }}
                className={`
                  w-full
                  mt-4
                  py-3
                  rounded-xl
                  font-medium
                  transition-all
                  duration-300
                  ${
                    darkMode
                      ? "bg-slate-700 text-white hover:bg-slate-600"
                      : "bg-slate-200 text-slate-900 hover:bg-slate-300"
                  }
                `}
              >
                Reset Filters
              </button>
            </>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="p-6 border-t border-slate-800">
        <p className="text-sm text-slate-400">
          User Management Dashboard
        </p>
      </div>

    </aside>
  );
}

export default Sidebar;