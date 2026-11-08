// ── 예약 단계 ───────────────────────────────────────────────
export const STEPS = ['컨셉 선택', '옵션 선택', '총액 확인', '날짜 ·시간 선택', '예약 완료'];

// ── Step 1 컨셉 카드 — 이미지 크롭(img)은 피그마 사진 영역(459×267) 기준 px ──
export const RESERVATION_CONCEPTS = [
  {
    no: '01',
    title: '장난감 마을',
    image: 'img/res-toy.webp',
    img: { left: -13, top: -63, width: 477, height: 356 },
  },
  {
    no: '02',
    title: '아침 침대',
    image: 'img/res-bed.webp',
    img: { left: -0.49, top: -58.43, width: 467.4, height: 349 },
  },
  {
    no: '03',
    title: '꼬마 요리사',
    image: 'img/res-kitchen.webp',
    img: { left: -67.88, top: -72, width: 541.8, height: 363.5 },
  },
  {
    no: '04',
    title: '바깥 놀이터',
    image: 'img/res-playground.webp',
    img: { left: -17.33, top: -48.46, width: 489.3, height: 328.3 },
  },
  {
    no: '05',
    title: '독서 시간',
    image: 'img/res-reading.webp',
    img: { left: -1.86, top: -63, width: 460.9, height: 344.1 },
  },
  {
    no: '06',
    title: '아티스트',
    image: 'img/res-artist.webp',
    img: { left: -8, top: -73, width: 467.4, height: 349 },
  },
];

// ── Step 2 옵션 / 가격 ─────────────────────────────────────
// 시안에 없는 값: 기본 촬영비, 인화 단가 → 임의 지정 (필요 시 여기서만 수정)
export const BASE_PRICE = 100000; // 기본 촬영 (컨셉 1개)
export const EXTRA_CONCEPT_PRICE = 50000; // 컨셉 추가

// 수량 선택 옵션 (key는 예약 상태의 qty 객체 키)
export const QTY_OPTIONS = {
  people: { label: '추가 인원', unit: 10000, suffix: '명' },
  pet: { label: '반려동물', unit: 15000, suffix: '마리' },
  retouch: { label: '보정 사진', unit: 5000, suffix: '장' },
  print: { label: '인화', unit: 3000, suffix: '장' },
  frame: { label: '액자', unit: 8000, suffix: '개' },
  album: { label: '앨범', unit: 35000, suffix: '권' },
};

export const MAX_QTY = 10;

// ── Step 4 예약 가능 시간 ──────────────────────────────────
export const TIME_SLOTS = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];

// 공휴일 (휴무) — yyyy-mm-dd: 표시 이름
export const HOLIDAYS = {
  '2026-09-24': '추석연휴',
  '2026-09-25': '추석',
  '2026-09-26': '추석연휴',
  '2026-10-03': '개천절',
  '2026-10-05': '대체공휴일',
  '2026-10-09': '한글날',
  '2026-12-25': '성탄절',
  '2027-01-01': '신정',
};

// 오늘 기준 몇 달 뒤까지 예약을 받을지
export const BOOKING_MONTHS = 3;
