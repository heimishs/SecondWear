"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

// 후기 타입 예시
interface Review {
  id: number;
  author: string;
  content: string;
  date: string;
}

const SampleDetailPage: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      id: 1,
      author: "상월곡이지",
      content:
        "이 수거함 가격은 100원을 일시적으로 받지만, 위기는 30일경에 한번 방문하는게 좋을 것 같아요.",
      date: "2023-02-14",
    },
    {
      id: 2,
      author: "대한환경단",
      content:
        "수거함 관리가 잘 되어있고 주변 정리도 깔끔해서 이용하기 편해요. 2주마다 찾으러 오니 편리하네요!",
      date: "2023-02-20",
    },
    {
      id: 3,
      author: "고기만큼많은고",
      content:
        "옷가지고 갔는데 다른 봉사자들이 이미 채워놓고 가서 자리 많지 않았어요. 다음에는 미리 연락하고 갈게요.",
      date: "2023-03-01",
    },
  ]);

  const [newReview, setNewReview] = useState("");

  const handleReviewSubmit = () => {
    if (!newReview.trim()) return;

    const newItem: Review = {
      id: Date.now(),
      author: "새로운사용자",
      content: newReview,
      date: new Date().toISOString().split("T")[0],
    };

    setReviews([newItem, ...reviews]); // 최신순 추가
    setNewReview("");
  };

  const handleDeleteReview = (id: number) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
  };

  return (
    <div className="w-full max-w-[1200px] mx-auto px-4 py-6">
      {/* 상단 이미지/슬라이드 영역 */}
      <div className="relative w-full max-w-[1200px] h-[400px] md:h-[600px] rounded-lg overflow-hidden shadow-sm">
        <Image
          src="/demo/image2.jpg"
          alt="수거함 위치"
          layout="fill"
          objectFit="cover"
        />
        {/* 우측 상단 슬라이드 인디케이터 */}
        <div className="absolute top-2 right-2 bg-black bg-opacity-50 text-white text-sm px-2 py-1 rounded">
          1 / 1
        </div>
      </div>

      {/* 장소 정보 */}
      <div className="mt-4 bg-white rounded shadow-sm p-4">
        <h1 className="text-lg font-bold mb-1">상월곡동 24-191 현옷수거함</h1>
        <p className="text-gray-600 text-sm">
          설치 위치:{" "}
          <span className="font-medium">서울특별시 성북구 상월곡동 24-191</span>
        </p>
        <p className="text-gray-600 text-sm">
          연락처: <span className="font-medium">02-123-1234</span>
        </p>
        <p className="text-gray-600 text-sm">
          수거 주기: <span className="font-medium">둘째주 목요일</span>
        </p>
        <p className="text-gray-600 text-sm">
          수거 가능 품목:{" "}
          <span className="font-medium">의류, 신발, 가방, 담요</span>
        </p>
        <div className="mt-4 flex justify-end">
          <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition">
            <FontAwesomeIcon icon={faFile} /> 잘못된 정보 제보
          </button>
        </div>
      </div>

      {/* 후기 작성 영역 */}
      <div className="mt-4 bg-white rounded shadow-sm p-4">
        <label className="block text-sm font-semibold mb-2">방문했어요</label>
        <textarea
          className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-indigo-300 text-sm"
          rows={3}
          placeholder="사용 후기를 남겨주세요"
          value={newReview}
          onChange={(e) => setNewReview(e.target.value)}
        />
        <div className="mt-2 flex justify-end">
          <button
            onClick={handleReviewSubmit}
            className="px-4 py-2 bg-[#E0E97D] text-[#757944] text-sm rounded hover:bg-[#d9e367] transition"
          >
            등록
          </button>
        </div>
      </div>

      {/* 후기 목록 */}
      <div className="mt-4 bg-white rounded shadow-sm p-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-300 last:border-none py-3">
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm">{review.author}</span>
              <span className="text-gray-400 text-xs">{review.date}</span>
            </div>
            <p className="text-gray-700 text-sm mt-1">{review.content}</p>
            <div className="mt-2 flex space-x-2 text-xs text-gray-500">
              <button className="hover:underline">추천</button>
              <button className="hover:underline">신고</button>
              <button
                className="hover:underline"
                onClick={() => handleDeleteReview(review.id)}
              >
                삭제
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* 카드 레이아웃 예시 */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white rounded shadow-sm p-4">
            <h2 className="text-sm font-semibold mb-2">카드 제목 {item}</h2>
            <p className="text-sm text-gray-600">
              모바일에서는 1열, 태블릿에서는 2열, PC에서는 3열로 표시됩니다.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SampleDetailPage;
