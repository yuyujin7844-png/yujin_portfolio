const BASE = import.meta.env.BASE_URL;

// publicDir(assets/) 파일 경로를 배포 base 경로와 합쳐준다
export const asset = (path) => `${BASE}${path}`;

// 페이지 간 이동 경로 (메인 / 예약하기 어디서든 같은 주소가 되도록 base 기준)
export const pageUrl = (path = '') => `${BASE}${path}`;
export const RESERVATION_URL = pageUrl('reservation/');
