import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import PaginationButton from "./PaginationButton";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utils";
interface IProps {
  count: number | null;
}

function Pagination({ count }: IProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));

  const pageCount = count ? Math.ceil(count / PAGE_SIZE) : 0;
  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next.toString());
    setSearchParams(searchParams);
  }

  function previousPage() {
    const prev = currentPage === 1 ? currentPage : currentPage - 1;
    searchParams.set("page", prev.toString());
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;
  return (
    <div className="w-full flex items-center justify-between">
      <p className="text-md ml-2">
        Showing{" "}
        <span className="font-semibold">
          {(currentPage - 1) * PAGE_SIZE + 1}{" "}
        </span>
        to
        <span className="font-semibold">
          {" "}
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}{" "}
        </span>
        of <span className="font-semibold">{count}</span> results
      </p>
      <div className="flex gap-1.5">
        <PaginationButton onClick={previousPage} disabled={currentPage === 1}>
          <HiChevronLeft />
          <span>Previous</span>
        </PaginationButton>

        <PaginationButton
          onClick={nextPage}
          disabled={currentPage === pageCount}
        >
          <span>Next</span>
          <HiChevronRight />
        </PaginationButton>
      </div>
    </div>
  );
}

export default Pagination;
