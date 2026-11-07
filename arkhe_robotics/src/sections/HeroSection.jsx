import { asset } from '../utils/asset'

function HeroSection() {
  return (
    <section id="top" className="relative h-[1242px] overflow-hidden bg-black">
      {/* 은하 배경 (1399 x 781, screen 블렌드) */}
      <img
        src={asset('img/hero-bg.webp')}
        alt=""
        className="absolute left-[calc(50%+1.6px)] top-[50px] h-[780.897px] w-[1399.193px] max-w-none -translate-x-1/2 object-cover mix-blend-screen"
      />
      {/* 중앙 육각 오브젝트 (3.04° 회전, 60%) */}
      <img
        src={asset('img/hero-hex.webp')}
        alt=""
        className="absolute left-[calc(50%-5.15px)] top-[382.75px] h-[109.293px] w-[182.155px] max-w-none -translate-x-1/2 rotate-[3.04deg] object-cover opacity-60 mix-blend-screen"
      />
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative px-5 pt-[648px] text-center">
        <h1 className="font-unbounded font-normal text-gray-250">
          <span className="text-[46px]">The Beginning of </span>
          <span className="text-[56px] font-medium text-brand">Physical AI</span>
        </h1>
        <p className="mt-[11px] text-[38px] text-gray-250">아르케(Arkhe), 모든 것의 시작.</p>
        <p className="mt-[60px] text-[22px] text-gray-550">우리는 로봇이 사람과 함께 일하는 새로운 시대의 시작을 만듭니다.</p>
      </div>
    </section>
  )
}

export default HeroSection
