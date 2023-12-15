import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import PaginateButton from "./PaginateButton";
import { useCallback, useMemo } from "react";

export default function Pagination({
  postsLength,
  pageNo,
  setPage,
  totalPage,
  perPage,
}) {
  // console.log("rendering Pagination");
  const handlePagination = useCallback(
    (page) => {
      setPage(page);
    },
    [setPage]
  );
  const renderPageButtons = useMemo(() => {
    const buttons = [];

    if (totalPage <= 9) {
      // Render buttons for all pages
      for (let i = 1; i <= totalPage; i++) {
        buttons.push(
          <PaginateButton
            key={i}
            handlePagination={handlePagination}
            pageNo={pageNo}
            selectPageNo={i}
          />
        );
      }
    } else {
      // Render buttons for the first two pages
      buttons.push(
        <PaginateButton
          key={1}
          handlePagination={handlePagination}
          pageNo={pageNo}
          selectPageNo={1}
        />
      );
      buttons.push(
        <PaginateButton
          key={2}
          handlePagination={handlePagination}
          pageNo={pageNo}
          selectPageNo={2}
        />
      );

      // Render ellipsis
      if (pageNo > 4) {
        buttons.push(
          <PaginateButton
            key={"..."}
            handlePagination={handlePagination}
            pageNo={pageNo}
            selectPageNo={"..."}
            jumpingNumber={-4}
          />
        );
      }

      // if (pageNo > 3 && pageNo === totalPage - 2) {
      //   for (let i = totalPage - 4; i <= totalPage - 2; i++) {
      //     buttons.push(
      //       <PaginateButton
      //         key={i}
      //         handlePagination={handlePagination}
      //         pageNo={pageNo}
      //         selectPageNo={i}
      //       />
      //     );
      //   }
      // }

      // Render buttons for the current page, previous, and next pages
      for (let i = pageNo - 1; i <= pageNo + 1; i++) {
        if (i > 2 && i < totalPage - 1) {
          buttons.push(
            <PaginateButton
              key={i}
              handlePagination={handlePagination}
              pageNo={pageNo}
              selectPageNo={i}
            />
          );
        }
      }

      // Render ellipsis
      if (pageNo < totalPage - 2) {
        buttons.push(
          <PaginateButton
            key={"..."}
            handlePagination={handlePagination}
            pageNo={pageNo}
            selectPageNo={"..."}
            jumpingNumber={4}
          />
        );
      }

      // Render buttons for the last two pages
      buttons.push(
        <PaginateButton
          key={totalPage - 1}
          handlePagination={handlePagination}
          pageNo={pageNo}
          selectPageNo={totalPage - 1}
        />
      );
      buttons.push(
        <PaginateButton
          key={totalPage}
          handlePagination={handlePagination}
          pageNo={pageNo}
          selectPageNo={totalPage}
        />
      );
    }

    return buttons;
  }, [totalPage, pageNo, handlePagination]);

  return (
    <div className="flex items-center justify-between bg-orange-400/70 px-4 py-1 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-sky-600 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-sky-700"
          disabled={pageNo === 1}
          onClick={() => handlePagination(pageNo - 1)}
        >
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-sky-600 px-4 py-2 text-sm font-medium text-gray-200 hover:bg-sky-700"
          disabled={totalPage == pageNo}
          onClick={() => handlePagination(pageNo + 1)}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{(pageNo - 1) * perPage + 1}</span> to
            <span className="font-medium">
              {" "}
              {pageNo * perPage < postsLength ? pageNo * perPage : postsLength}
            </span>{" "}
            of
            <span className="font-medium"> {postsLength}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <button
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-perPage0 focus:z-20 focus:outline-offset-0"
              disabled={pageNo === 1}
              onClick={() => handlePagination(pageNo - 1)}
            >
              <span className="sr-only">Previous</span>
              <AiOutlineLeft
                className="h-perPage w-perPage"
                aria-hidden="true"
              />
            </button>

            {renderPageButtons}

            <button
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-perPage0 focus:z-20 focus:outline-offset-0"
              disabled={totalPage == pageNo}
              onClick={() => handlePagination(pageNo + 1)}
            >
              <span className="sr-only">Next</span>
              <AiOutlineRight
                className="h-perPage w-perPage"
                aria-hidden="true"
              />
            </button>
          </nav>
        </div>
      </div>
    </div>
  );
}
