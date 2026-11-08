import { BASE_PRICE, EXTRA_CONCEPT_PRICE, QTY_OPTIONS, RESERVATION_CONCEPTS } from '../data/reservation.js';

export const findConcept = (no) => RESERVATION_CONCEPTS.find((c) => c.no === no);

// 예약 상태 → 금액 내역 [{ label, detail, amount }]
export function getPriceLines({ concept, extraConcept, qty }) {
  const lines = [
    { label: '기본 촬영', detail: `${findConcept(concept)?.title ?? '-'}`, amount: BASE_PRICE },
  ];
  if (extraConcept) {
    lines.push({ label: '컨셉 추가', detail: findConcept(extraConcept)?.title, amount: EXTRA_CONCEPT_PRICE });
  }
  Object.entries(QTY_OPTIONS).forEach(([key, opt]) => {
    const count = qty[key];
    if (count > 0) {
      lines.push({ label: opt.label, detail: `${count}${opt.suffix}`, amount: opt.unit * count });
    }
  });
  return lines;
}

export const getTotal = (state) => getPriceLines(state).reduce((sum, line) => sum + line.amount, 0);
