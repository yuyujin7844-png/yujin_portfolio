import { asset } from '../../utils/asset'

// 피그마 1000~1936 구간 (배경: 검정 → #1E1E22 그라데이션 SVG)
function WhyArkheSection() {
  return (
    <section id="why" className="relative h-[936px] overflow-hidden">
      <img src={asset('ic/company-why-bg.svg')} alt="" width="1920" height="936" className="absolute inset-0 size-full max-w-none" />

      <div className="absolute inset-x-0 top-[52px] px-5 text-center">
        <h2 className="text-[26px] font-medium text-gray-250">만물의 근원을 묻다</h2>
        <p className="mt-[25px] text-[32px] font-medium text-brand">사람과 로봇이 함께 일하는 내일의 시작</p>
      </div>

      {/* 육각 오브젝트: 591 x 358, 12.84° 회전, 78%, screen 블렌드 */}
      <img
        src={asset('img/company-hex.webp')}
        alt=""
        className="absolute left-[calc(50%+2.07px)] top-[203.55px] h-[358.121px] w-[591.096px] max-w-none -translate-x-1/2 rotate-[12.84deg] object-cover opacity-[0.78] mix-blend-screen"
      />

      <div className="absolute inset-x-0 top-[647px] px-5 text-center text-[18px] text-gray-225">
        <p className="tracking-[0.72px]">‘세상 모든 것의 근원’을 물을 때 쓴 말입니다.</p>
        <p className="mt-[8px]">
          <span className="tracking-[0.54px]">AI가 화면 밖으로 나와 몸을 갖기 시작한 지금, </span>
          <span className="tracking-[-0.36px]">우리는 이 순간을 로봇 시대의 근원이라 믿습니다.</span>
        </p>
        <p className="mt-[63px] text-[24px] text-gray-150">아르케 로보틱스는 그 시작을 만듭니다.</p>
      </div>
    </section>
  )
}

export default WhyArkheSection
