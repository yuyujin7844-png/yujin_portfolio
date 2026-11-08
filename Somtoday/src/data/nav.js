import { pageUrl, RESERVATION_URL } from '../utils/asset.js';

// 헤더 GNB 메뉴 — 메인 페이지 섹션은 앵커, 예약하기는 서브 페이지로 연결
export const NAV_ITEMS = [
  { key: 'guide', label: '가이드', href: pageUrl('#about') },
  { key: 'studio', label: '스튜디오', href: pageUrl('#concept') },
  { key: 'reservation', label: '예약하기', href: RESERVATION_URL },
  { key: 'gallery', label: '갤러리', href: pageUrl('#review') },
  { key: 'production', label: '프로덕션', href: pageUrl('#concept') },
  { key: 'location', label: '오시는 길', href: '#footer' },
];
