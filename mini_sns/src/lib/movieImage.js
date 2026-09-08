// 영화/공연 테마 Unsplash 이미지 풀 (images.unsplash.com = 영구 CDN)
// picsum.photos 가 환경에 따라 차단/불안정해서 게시물 이미지를 이 풀로 대체한다.
const MOVIE_PHOTOS = [
  'photo-1489599849927-2ee91cede3ba', // 붉은 좌석의 상영관
  'photo-1440404653325-ab127d49abc1', // 팝콘과 극장
  'photo-1517604931442-7e0c8ed2963c', // 팝콘 클로즈업
  'photo-1536440136628-849c177e76a1', // 파란 조명의 스크린
  'photo-1478720568477-152d9b164e26', // 텅 빈 극장 좌석
  'photo-1594908900066-3f47337549d8', // 필름 릴
  'photo-1485846234645-a62644f84728', // 상영관 통로
  'photo-1512070679279-8988d32161be', // 네온 극장 간판
  'photo-1503095396549-807759245b35', // 무대 조명
  'photo-1598899134739-24c46f58b8c0', // 공연장
  'photo-1470229722913-7c0e2dbbafd3', // 콘서트 객석
  'photo-1514533212735-5df27d970db0', // 극장 좌석 열
]

const UNSPLASH_CDN = 'https://images.unsplash.com'
const IMG_PARAMS = 'auto=format&fit=crop&w=800&q=80'

/** 문자열/숫자 시드로부터 안정적인 해시값을 만든다. */
function hashSeed(seed) {
  const text = String(seed ?? '')
  let hash = 0
  for (let i = 0; i < text.length; i += 1) {
    hash = (hash << 5) - hash + text.charCodeAt(i)
    hash |= 0
  }
  return Math.abs(hash)
}

/**
 * 시드마다 movie 테마 이미지를 하나 뽑는다.
 * 같은 시드는 늘 같은 이미지를 돌려줘 새로고침해도 흔들리지 않는다.
 */
export function movieImage(seed) {
  const photoId = MOVIE_PHOTOS[hashSeed(seed) % MOVIE_PHOTOS.length]
  return `${UNSPLASH_CDN}/${photoId}?${IMG_PARAMS}`
}

/** picsum 자동 이미지거나 비어 있으면 movie 이미지로 대체한다. */
export function resolvePostImage(imageUrl, seed) {
  if (imageUrl && !imageUrl.includes('picsum.photos')) return imageUrl
  return movieImage(seed)
}
