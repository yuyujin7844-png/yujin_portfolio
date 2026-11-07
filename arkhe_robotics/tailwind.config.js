/** @type {import('tailwindcss').Config} */
// 피그마(ARKHE Robotics_main, 1920 기준) 값을 그대로 옮긴 디자인 토큰
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#F81D21', // 섹션 타이틀, 포인트 컬러
        ink: {
          DEFAULT: '#0E0E0E', // 다이어그램 원 안 라벨
          dark: '#1E1E22', // 뉴스룸 타이틀, 솔리드 버튼
        },
        gray: {
          50: '#F9F9F9', // 뉴스룸 카드 배경
          100: '#F4F4F4', // 수치 숫자
          150: '#F0F1F3', // 사업 카드 보더
          200: '#EEEEEE', // 솔리드 버튼 텍스트
          250: '#E8E8EA', // 기본 텍스트
          300: '#E5E5E5', // 토글 텍스트
          350: '#D9D9D9', // 아웃라인 버튼 보더
          400: '#C9C9C9', // 푸터 텍스트
          450: '#C7C7C7', // 핵심기술 설명
          500: '#A4A4A4', // 수치 설명
          550: '#949494', // 히어로 설명
          600: '#8C9099', // 토글 배경
          650: '#8A8A93', // 사업 카드 서브텍스트
          700: '#6C6C77', // 뉴스룸 설명
        },
        surface: {
          black: '#000000',
          900: '#0A0A0B',
          800: '#181818',
        },
      },
      fontFamily: {
        unbounded: ['Unbounded', '"Pretendard Variable"', 'Pretendard', 'sans-serif'],
        pretendard: ['"Pretendard Variable"', 'Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        content: '1440px', // 1920 - 마진 240 * 2
      },
      backgroundImage: {
        'section-business': 'linear-gradient(180deg, #000000 0%, #0A0A0B 100%)',
        'section-tech': 'linear-gradient(180deg, #0A0A0B 0%, #181818 100%)',
        'section-bottom':
          'linear-gradient(180deg, #181818 0%, #313238 26.442%, #6B6F78 50%, #45474D 75%, #070707 100%)',
        'card-contact':
          'linear-gradient(to left, rgba(220,220,220,0) 0%, rgba(91,91,91,0.47) 50%, rgba(48,48,48,0.78) 100%)',
        'card-career':
          'linear-gradient(to left, rgba(170,170,170,0) 0%, rgba(73,73,73,0.47) 50%, rgba(32,32,32,0.78) 100%)',
      },
    },
  },
  plugins: [],
}
