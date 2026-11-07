import { asset } from './asset'

// 페이지 간 이동 경로 (메인 섹션 앵커 / 회사소개 페이지)
export const HOME = asset('')
export const COMPANY = asset('company/')
export const homeSection = (id) => `${HOME}#${id}`
