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
    <div className="flex gap-4 mb-6">
      <select
        value={sortField}
        onChange={(e) => setSortField(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="name">Name</option>
        <option value="username">Username</option>
        <option value="email">Email</option>
      </select>

      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
}

export default SortControls;