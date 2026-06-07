interface PaginationProps {
  currentPage: number;
  totalPages: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Pagination({
  currentPage,
  totalPages,
  setCurrentPage,
}: PaginationProps)
 {
  return (
    <div className="flex justify-center items-center gap-4 mt-8">
      <button
        onClick={() =>
          setCurrentPage((prev) => Math.max(prev - 1, 1))
        }
        disabled={currentPage === 1}
        className="px-4 py-2 bg-slate-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700"
      >
        Previous
      </button>

      <span className="font-medium text-slate-700">
        Page {currentPage} of {totalPages}
      </span>

      <button
        onClick={() =>
          setCurrentPage((prev) =>
            Math.min(prev + 1, totalPages)
          )
        }
        disabled={currentPage === totalPages}
        className="px-4 py-2 bg-slate-800 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed hover:bg-slate-700"
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;