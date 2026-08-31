import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const getPageNumbers = (currentPage, totalPages) => {
  const pages = new Set([1, totalPages]);

  for (let i = currentPage - 1; i <= currentPage + 1; i++) {
    if (i >= 1 && i <= totalPages) pages.add(i);
  }

  return [...pages].sort((a, b) => a - b);
};

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = getPageNumbers(currentPage, totalPages);
  const items = [];

  pageNumbers.forEach((page, index) => {
    if (index > 0 && page - pageNumbers[index - 1] > 1) {
      items.push(
        <span key={`ellipsis-${page}`} className="px-2 text-gray-400 dark:text-gray-500 select-none">
          …
        </span>
      );
    }
    items.push(
      <button
        key={page}
        onClick={() => onPageChange(page)}
        aria-current={page === currentPage ? "page" : undefined}
        className={`min-w-10 h-10 px-3 rounded-lg text-sm font-semibold transition-colors ${
          page === currentPage
            ? "bg-blue-500 text-white"
            : "text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
        }`}
      >
        {page}
      </button>
    );
  });

  return (
    <nav className="flex items-center justify-center gap-2 mt-10 flex-wrap" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Previous page"
        className="flex items-center gap-1 h-10 px-3 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-40 disabled:pointer-events-none"
      >
        <ChevronLeft className="w-5 h-5" />
        Prev
      </button>

      {items}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Next page"
        className="flex items-center gap-1 h-10 px-3 rounded-lg text-sm font-semibold text-slate-600 dark:text-slate-300 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white disabled:opacity-40 disabled:pointer-events-none"
      >
        Next
        <ChevronRight className="w-5 h-5" />
      </button>
    </nav>
  );
};

export default Pagination;
