import React, { useState } from "react";

interface PaginationProps {
  totalPages: number; // 전체 페이지 수
  initialPage?: number; // 초기 페이지 (기본값: 1)
  onPageChange?: (page: number) => void; // 페이지 변경 시 호출되는 콜백
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  initialPage = 1,
  onPageChange,
}) => {
  const [currentPage, setCurrentPage] = useState<number>(initialPage);

  // 페이지 변경 핸들러
  const goToPage = (page: number) => {
    // 범위 밖 클릭 방지
    if (page < 1 || page > totalPages) return;

    setCurrentPage(page);
    onPageChange?.(page);
  };

  // 페이지 배열 생성
  const getPages = (): (number | string)[] => {
    const pages: (number | string)[] = [];
    const pageLimit = 5; // 최대 표시할 페이지 버튼 개수

    // 1. 전체 페이지가 pageLimit 이하인 경우: 모든 페이지 표시
    if (totalPages <= pageLimit) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // 2. 현재 페이지가 시작 부분에 가까울 때
    if (currentPage <= 3) {
      pages.push(1, 2, 3, 4, "...", totalPages);
      return pages;
    }

    // 3. 현재 페이지가 끝 부분에 가까울 때
    if (currentPage >= totalPages - 2) {
      pages.push(
        1,
        "...",
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages
      );
      return pages;
    }

    // 4. 중간 구간
    //  - 1, ... , (현재페이지 - 1), 현재페이지, (현재페이지 + 1), ... , totalPages
    pages.push(1, "...");
    pages.push(currentPage - 1, currentPage, currentPage + 1);
    pages.push("...", totalPages);

    return pages;
  };

  const pagesToRender = getPages();

  return (
    <div className="flex items-center gap-2 text-gray-600">
      {/* 이전 페이지 버튼 */}
      <button
        onClick={() => goToPage(currentPage - 1)}
        className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      {/* 페이지 번호 목록 */}
      {pagesToRender.map((p, idx) => {
        if (p === "...") {
          // 생략(ellipsis) 표시
          return (
            <span key={idx} className="px-2">
              ...
            </span>
          );
        } else {
          const pageNum = p as number;
          return (
            <button
              key={pageNum}
              onClick={() => goToPage(pageNum)}
              className={`px-3 py-1 rounded hover:bg-gray-100 ${
                currentPage === pageNum
                  ? "bg-[#E0E97D] text-white font-bold"
                  : ""
              }`}
            >
              {pageNum}
            </button>
          );
        }
      })}

      {/* 다음 페이지 버튼 */}
      <button
        onClick={() => goToPage(currentPage + 1)}
        className="px-3 py-1 rounded hover:bg-gray-100 disabled:opacity-50"
        disabled={currentPage === totalPages}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
