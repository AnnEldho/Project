import SearchBar from "./SearchBar";
import SortControls from "./SortControls";

interface SidebarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  sortField: string;
  setSortField: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

function Sidebar({
  search,
  setSearch,
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}: SidebarProps) {
  return (
    <aside className="w-72 bg-white shadow-md p-4">
      <h2 className="text-xl font-semibold mb-4">
        Controls
      </h2>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <SortControls
        sortField={sortField}
        setSortField={setSortField}
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
      />
    </aside>
  );
}

export default Sidebar;