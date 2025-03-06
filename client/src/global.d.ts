interface Window {
  naver: any;
}

// naver 네임스페이스가 없으므로 직접 선언
declare global {
  namespace naver {
    namespace maps {
      class Map {
        constructor(element: string | HTMLElement, options: any);
        setCenter(latlng: LatLng): void;
        // ... 필요한 메서드, 속성들을 여기에 추가
      }

      class LatLng {
        constructor(lat: number, lng: number);
      }

      // ... 기타 필요한 클래스나 인터페이스를 선언
    }
  }

  interface Window {
    naver: typeof naver;
  }
}

export {};
