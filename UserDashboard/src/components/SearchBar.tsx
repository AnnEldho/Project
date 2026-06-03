interface SearchBarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ search, setSearch }: SearchBarProps) {
  return (
    <input
      type="text"
      placeholder="Search by name, username or email..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full p-3 mb-6 border rounded-lg bg-white"
    />
  );
}

export default SearchBar;