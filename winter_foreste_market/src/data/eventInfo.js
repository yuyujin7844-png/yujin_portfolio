// 행사 정보 — 브리프에 주어진 값만 사용한다. 임의로 정보를 지어내지 말 것.

export const EVENT = {
  nameEn: 'Winter Forest Market in Taehwa',
  edition: '2026 · 1st',
  // 일시: 2026년 12월 22일(화) ~ 24일(목), 17:00 ~ 22:00
  dates: [
    { iso: '2026-12-22', label: '12월 22일 (화)', short: '22' },
    { iso: '2026-12-23', label: '12월 23일 (수)', short: '23' },
    { iso: '2026-12-24', label: '12월 24일 (목)', short: '24' },
  ],
  timeRange: '17:00 ~ 22:00',
  dateRangeKo: '2026년 12월 22일(화) ~ 24일(목)',
  dateRangeShort: '2026.12.22-24',
  venue: '태화강 국가정원 만남의 광장',
  address: '울산 중구 태화동',
  admission: '무료',
  contact: '052-123-4567',
  host: '울산광역시',
};

// 프로그램 구성 (브리프에 나열된 6가지)
export const PROGRAMS = [
  { titleEn: 'Photo Zone', desc: '숲과 조명으로 꾸민 포토존에서 겨울밤을 기록하세요.', image: 'program-photozone.jpg' },
  { titleEn: 'Market Booth', desc: '지역 작가와 소상공인의 수공예·리빙 소품 마켓 부스.', image: 'program-marketbooth.jpg' },
  { titleEn: 'Food Truck', desc: '따뜻한 겨울 먹거리를 파는 푸드트럭이 광장을 채웁니다.', image: 'program-foodtruck.jpg' },
  { titleEn: 'Vin Chaud & Cocoa Party', desc: '사전 예약 머그컵에 뱅쇼와 핫코코아를 담아 드리는 파티.', image: 'program-vinchaud.jpg' },
  { titleEn: 'Santa Event', desc: '산타와 함께하는 사진 촬영과 작은 선물 이벤트.', image: 'program-santa.jpg' },
  { titleEn: 'Busking', desc: '광장 무대에서 이어지는 겨울밤 라이브 버스킹 공연.', image: 'program-busking.jpg' },
];

export const FAQS = [
  {
    q: '입장료가 있나요?',
    a: '입장은 무료입니다. 별도의 예매 없이 누구나 행사장에 들어올 수 있습니다.',
  },
  {
    q: '티켓이 없어도 뱅쇼·코코아를 마실 수 있나요?',
    a: '가능합니다. 다만 사전 예약 티켓 소지자에게는 2026 한정판 머그컵에 담아 드리고, 티켓이 없는 경우에는 일회용컵으로 제공됩니다.',
  },
  {
    q: '티켓은 몇 장까지 예약할 수 있나요?',
    a: '1인 1일 1매만 예약할 수 있습니다. 방문하실 날짜와 티켓 종류(레드/그린)를 선택해 주세요.',
  },
  {
    q: '머그컵 디자인은 매년 같나요?',
    a: '아니요. 머그컵은 매년 다른 디자인의 한정판으로 제작됩니다. 2026 · 1st 에디션은 이번 행사에서만 만나볼 수 있습니다.',
  },
  {
    q: '반려동물과 함께 입장할 수 있나요?',
    a: '태화강 국가정원 운영 방침을 따릅니다. 방문 전 태화강 국가정원 안내를 확인해 주세요.',
  },
  {
    q: '문의는 어디로 하나요?',
    a: '행사 문의는 052-123-4567 로 연락 주세요.',
  },
];
