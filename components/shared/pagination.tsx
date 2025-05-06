"use client";
import { useSearchParams } from "next/navigation";
import CButton from "@/shared/custome/c-button";
import { cn } from "@/lib/utils";
import styles from "@/styles/component/pagination.module.css";

interface PaginationProps {
  totalPages: number;
}

export default function Pagination({ totalPages = 1 }: PaginationProps) {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const qPage = Number(params.get("page")) || 1;

  const handlePageChange = (page: number) => {
    params.set("page", String(page));
    window.history.pushState(null, "", "?" + params.toString());
  };

  const renderPageNumbers = () => {
    let pages = [];
    const maxVisiblePages = 5;

    if (totalPages <= 6) {
      // If total pages are 6 or less, show all pages
      pages = Array.from({ length: totalPages }, (_, i) => i + 1);
    } else {
      let startPage = Math.max(1, qPage - 2);
      let endPage = Math.min(startPage + maxVisiblePages - 1, totalPages - 1);

      if (endPage >= totalPages - 1) {
        startPage = totalPages - maxVisiblePages;
        endPage = totalPages - 1;
      }

      pages = Array.from(
        { length: endPage - startPage + 1 },
        (_, i) => startPage + i,
      );
    }

    return (
      <>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={cn(styles.item, {
              [styles.item_active]: qPage === page,
            })}
          >
            {page}
          </button>
        ))}
        {totalPages > 6 && qPage < totalPages - 3 && (
          <>
            <span className="px-2">...</span>
            <button
              onClick={() => handlePageChange(totalPages)}
              className={cn(styles.item, {
                [styles.item_active]: qPage === totalPages,
              })}
            >
              {totalPages}
            </button>
          </>
        )}
      </>
    );
  };

  return (
    <div className={styles.parent}>
      <div>{renderPageNumbers()}</div>
      <div>
        <CButton
          onClick={() => handlePageChange(Math.max(1, qPage - 1))}
          disable={qPage === 1}
          variant="ghost"
          size="none"
          title="Previous"
        />
        <CButton
          onClick={() => handlePageChange(Math.min(totalPages, qPage + 1))}
          disable={qPage === totalPages}
          size="none"
          variant="ghost"
          title="Next"
        />
      </div>
    </div>
  );
}
