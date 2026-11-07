// publicDir(assets) 기준 경로를 배포 base에 맞춰 변환
export const asset = (path) => `${import.meta.env.BASE_URL}${path}`
