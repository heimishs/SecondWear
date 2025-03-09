import React from "react";
import "swiper/css";

const Wight2: React.FC = () => {
    return (
        <div className="mt-20">
            <div className="flex justify-between items-center mb-4">
                {/* 왼쪽: 제목 + 설명 */}
                <div>
                <h2 className="text-2xl font-semibold">✂️리폼 파트너</h2>
                <p className="text-gray-500 text-md">내 위치와 가까운 헌옷수거함을 보여드려요!</p>
                </div>
        
                {/* 오른쪽: 더 보기 버튼 */}
                <button className="text-gray-400 text-md hover:text-gray-600">
                더 보기
                </button>
            </div>
      
          {/* ✅ 반응형 레이아웃 수정: 모바일 1개 → 태블릿 2개 → PC 3개 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
            {[...Array(3)].map((_, index) => (
              <div key={index} className="w-full bg-white  ">
                <img className="w-full rounded-lg" src="/demo/image3.jpg" alt="" />
                <div className="mt-5">
                    <div className="flex items-center ">
                        <h3 className="text-lg font-semibold">메이튼</h3>
                    </div>
                    <div className="text-gray-700 text-sm">
                    <div className="flex items-center mb-1">
                        <span className="font-medium">어떤 옷이든 깔끔하고 트렌디하게 리폼 해드립니다</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
      
      
      
};

export default Wight2;
