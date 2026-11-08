// GNB 메뉴 — 단일 페이지라 각 섹션으로 이동
export const NAV_ITEMS = [
  { label: 'SHOP', href: '#set' },
  { label: 'ABOUT', href: '#story' },
  { label: 'INGREDIENT', href: '#line' },
  { label: 'JOURNAL', href: '#footer' },
];

// 브랜드 스토리 카드 (467.6 × 611.8 기준)
// image.box: 카드 기준 이미지 박스 위치(px) / flip: 좌우 반전 / rotate: 회전
export const STORIES = [
  {
    key: 'quiet',
    title: 'Quiet',
    desc: '자극 없이, 고요하게',
    badge: 'ic/ellipse-quiet.svg',
    bottomShade: true,
    image: { src: 'img/quiet.webp', box: { left: -48, top: -96.3, width: 564, height: 755 }, flip: true },
  },
  {
    key: 'gentle',
    title: 'Gentle',
    desc: '예민한 날에도, 부드럽게',
    badge: 'ic/ellipse-quiet.svg',
    image: { src: 'img/gentle.webp', box: { left: -135.77, top: -133.62, width: 737.53, height: 987.88 } },
  },
  {
    key: 'simple',
    title: 'Simple',
    desc: '꼭 필요한 것만, 단순하게',
    badge: 'ic/ellipse-simple.svg',
    image: { src: 'img/simple.webp', box: { left: -193.38, top: -2.3, width: 827, height: 617 }, rotate: true },
  },
];
export const STORY_CARD = { width: 467.6, height: 611.8 };

// 수딩 라인 상품 (카드 이미지 영역 337 × 448 기준 crop)
export const PRODUCTS = [
  {
    key: 'toner',
    name: 'SOOTHING TONER',
    nameKo: '수딩 토너',
    volume: '200ml',
    price: 24000,
    image: 'img/toner.webp',
    crop: { left: -1, top: -4, width: 340, height: 456 },
    liked: true,
  },
  {
    key: 'serum',
    name: 'SOOTHING SERUM',
    nameKo: '수딩 세럼',
    volume: '50ml',
    price: 17000,
    image: 'img/serum.webp',
    crop: { left: 0, top: -4, width: 341, height: 456 },
  },
  {
    key: 'cream',
    name: 'SOOTHING CREAM',
    nameKo: '수딩 크림',
    volume: '50ml',
    price: 26000,
    image: 'img/cream.webp',
    crop: { left: -3, top: -4, width: 340, height: 456 },
  },
];

export const SET_PRODUCT = {
  name: 'TEA TREE SKIN CARE SET',
  line: 'SOOTHING LINE',
  desc: '세 단계 루틴을 한 번에 시작하세요.',
  price: 46900,
  originalPrice: 67000,
};

export const SNS = [
  { key: 'insta', label: '인스타그램', icon: 'ic/sns-insta.svg' },
  { key: 'facebook', label: '페이스북', icon: 'ic/sns-facebook.svg' },
  { key: 'youtube', label: '유튜브', icon: 'ic/sns-youtube.svg' },
  { key: 'blog', label: '블로그', icon: 'ic/sns-blog.svg' },
];

export const won = (value) => `${value.toLocaleString('ko-KR')}원`;
