import MapComponent from "../components/ui/MapComponent";

const locations = [
  { id: 1, title: "상월곡동 24-191 현옷수거함", image: "/demo/image2.jpg", cycle: "둘째 주 화요일", items: "의류, 신발, 가방, 담요 등" },
  { id: 2, title: "상월곡동 24-191 현옷수거함", image: "/demo/image2.jpg", cycle: "둘째 주 화요일", items: "의류, 신발, 가방, 담요 등" },
  { id: 3, title: "상월곡동 24-191 현옷수거함", image: "/demo/image2.jpg", cycle: "둘째 주 화요일", items: "의류, 신발, 가방, 담요 등" },
  { id: 4, title: "상월곡동 24-191 현옷수거함", image: "/demo/image2.jpg", cycle: "둘째 주 화요일", items: "의류, 신발, 가방, 담요 등" },
];

function DetailSearch() {
  return (
    <div className="flex flex-col items-center">
      {/* 지도 영역 */}
      <div className="w-full max-w-[1200px] h-[400px] md:h-[600px] mx-auto relative">
        {/* 지도 컴포넌트 */}
        <MapComponent />

        {/* PC용 검색 바 */}
        <div className="hidden md:flex absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg w-[400px]">
          <input
            type="text"
            placeholder="우리 동네를 검색해보세요"
            className="border-none focus:outline-none flex-grow p-2 text-lg"
          />
          <button className="ml-2 p-2 text-white rounded-md ">
          <img className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600" src="/demo/searchicon.png" alt="" />
          </button>
        </div>

        {/* 모바일용 검색 바 */}
        <div className="flex md:hidden absolute top-4 left-4 right-4 bg-white p-3 rounded-lg shadow-md items-center">
          <input
            type="text"
            placeholder="성북구 현옷수거함"
            className="border-none focus:outline-none flex-grow p-2 text-base"
          />
          <button className="ml-2 p-2  text-white rounded-md ">
            <img src="/demo/searchicon.png" alt="검색" className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* 상세 정보 */}
      <div className="w-full max-w-[1200px] bg-white rounded-t-lg mt-10">
        {/* 버튼 그룹 */}
        <div className="flex space-x-4 mb-4">
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-300">
            거리
          </button>
          <button className="bg-gray-200 px-4 py-2 rounded-lg text-sm md:text-base hover:bg-gray-300">
            북마크
          </button>
        </div>

        {/* 카드 리스트 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-0 md:mt-50  ">
          {locations.map((location) => (
            <div key={location.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img
                src={location.image}
                className="w-full h-48 object-cover"
                alt={location.title}
              />
              <div className="p-4">
                <p className="font-bold text-lg">{location.title}</p>
                <p className="text-sm text-gray-500">🗓️ 수거 주기: {location.cycle}</p>
                <p className="text-sm text-gray-500">🛍️ 수거 가능 품목: {location.items}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DetailSearch;
