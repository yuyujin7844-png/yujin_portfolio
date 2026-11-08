import { HOLIDAYS, TIME_SLOTS } from '../data/reservation.js';

export const WEEKDAYS = ['일', '월', '화', '수', '목', '금', '토'];

const pad = (n) => String(n).padStart(2, '0');

// Date → "2026-09-23" (로컬 시간 기준)
export const toKey = (date) => `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

// "2026-09-23" → "2026.09.23 (수)"
export function formatDateKey(key) {
  const [y, m, d] = key.split('-').map(Number);
  const day = WEEKDAYS[new Date(y, m - 1, d).getDay()];
  return `${y}.${pad(m)}.${pad(d)} (${day})`;
}

export const formatMonth = (year, month) => `${year}.${pad(month + 1)}`;

// 해당 월을 일~토 주 단위로 나눈 날짜 배열 (앞뒤 달 날짜 포함)
export function buildWeeks(year, month) {
  const first = new Date(year, month, 1);
  const last = new Date(year, month + 1, 0);
  const start = new Date(year, month, 1 - first.getDay());
  const totalDays = first.getDay() + last.getDate() + (6 - last.getDay());

  const weeks = [];
  for (let i = 0; i < totalDays; i += 7) {
    weeks.push(
      Array.from({ length: 7 }, (_, j) => new Date(start.getFullYear(), start.getMonth(), start.getDate() + i + j))
    );
  }
  return weeks;
}

// 날짜 상태: closed(지난 날짜·당일) / holiday(공휴일) / open
export function getDayStatus(date, today) {
  const key = toKey(date);
  if (HOLIDAYS[key]) return { type: 'holiday', label: HOLIDAYS[key] };
  if (date <= today) return { type: 'closed', label: '마감' };
  return { type: 'open', label: '' };
}

// 데모용: 날짜마다 일부 시간대를 '예약 마감'으로 만든다 (같은 날짜는 항상 같은 결과)
export function getBookedSlots(key) {
  const seed = key.split('').reduce((sum, ch) => sum + ch.charCodeAt(0), 0);
  return TIME_SLOTS.filter((_, i) => (seed + i * 3) % 5 === 0);
}
