{
  totalPage > 8 && pageNo < totalPage - 3 && (
    <>
      {totalPage > 6 && pageNo >= 3 && (
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
          ...
        </span>
      )}
      <button
        className={`relative inline-flex items-center ${
          pageNo === totalPage - 2
            ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            : "hover:bg-gray-50 "
        }
      px-4 py-2 text-sm  font-semibold text-gray-900 focus:z-20 ring-gray-300  focus-visible:outline focus-visible:outline-2 ring-1 ring-inset focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        onClick={() => handlePagination(totalPage - 2)}
      >
        {totalPage - 2}
      </button>
      <button
        className={`relative inline-flex items-center ${
          pageNo === totalPage - 1
            ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
            : "hover:bg-gray-50 "
        }
      px-4 py-2 text-sm  font-semibold text-gray-900 focus:z-20 ring-gray-300  focus-visible:outline focus-visible:outline-2 ring-1 ring-inset focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
        onClick={() => handlePagination(totalPage - 1)}
      >
        {totalPage - 1}
      </button>
      {totalPage > 6 && pageNo < totalPage - 3 && (
        <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0">
          ...
        </span>
      )}
    </>
  );
}
