interface SortControlsProps {
  sortField: string;
  setSortField: React.Dispatch<React.SetStateAction<string>>;
  sortOrder: string;
  setSortOrder: React.Dispatch<React.SetStateAction<string>>;
}

function SortControls({
  sortField,
  setSortField,
  sortOrder,
  setSortOrder,
}: SortControlsProps) {
  return (
    <div className="space-y-4">
      <select
        value={sortField}
        onChange={(e) => setSortField(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default SortControls;