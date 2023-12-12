export default function PaginateButton({
  pageNo,
  selectPageNo,
  handlePagination,
  jumpingNumber,
}) {
  return (
    <button
      className={`relative inline-flex items-center ${
        pageNo === selectPageNo
          ? "z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 "
          : "hover:bg-gray-50 "
      }
px-4 py-2 text-sm  font-semibold text-gray-900 focus:z-20 ring-gray-300  focus-visible:outline focus-visible:outline-2 ring-1 ring-inset focus-visible:outline-offset-2 focus-visible:outline-indigo-600`}
      onClick={() =>
        handlePagination(
          selectPageNo === "..." ? pageNo + jumpingNumber : selectPageNo
        )
      }
    >
      {selectPageNo}
    </button>
  );
}
