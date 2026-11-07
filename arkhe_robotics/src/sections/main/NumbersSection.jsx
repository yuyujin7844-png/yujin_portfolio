import SectionTitle from '../../components/common/SectionTitle'
import { asset } from '../../utils/asset'

const STATS = [
  { label: '보유 특허', value: '186', unit: 'plus', size: 'text-[100px]' },
  { label: '도입 고객사', value: '120', unit: 'plus', size: 'text-[100px]' },
  { label: '연구 인력 비율', value: '68', unit: 'percentage', size: 'text-[100px]' },
  { label: '누적 공급 로봇', value: '1,200', unit: 'plus', size: 'text-[88px]' },
]

const UNIT_ICON = {
  // plus: SVG 자체가 37 x 38 / percentage: 38px 프레임 안에 28.56 x 28.91 (inset 12%)
  plus: <img src={asset('ic/plus.svg')} alt="+" width="37" height="38" className="max-w-none" />,
  percentage: (
    <span className="relative block size-[38px]">
      <img src={asset('ic/percentage.svg')} alt="%" width="28.5606" height="28.9104" className="absolute left-[4.56px] top-[4.56px] max-w-none" />
    </span>
  ),
}

function NumbersSection() {
  return (
    <section id="numbers" className="pt-[452px]">
      <div className="container-content">
        <SectionTitle title="Arkhe in Numbers" subtitle="숫자로 증명하는 시작의 힘" subtitleGap="mt-[8px]" />
        <p className="mt-[54px] text-center text-[18px] text-gray-500">설립 이후 쌓아온 기술과 신뢰가 아르케의 다음을 만듭니다.</p>

        {/* 1440 x 272 박스, 컬럼 폭은 피그마 구분선 위치(348/365/321/406) 기준 */}
        <ul className="mt-[208px] grid grid-cols-2 gap-y-10 rounded-[10px] bg-[rgba(240,241,243,0.2)] py-[49px] lg:h-[272px] lg:grid-cols-[348fr_365fr_321fr_406fr] lg:gap-y-0">
          {STATS.map((stat, i) => (
            <li key={stat.label} className="relative flex flex-col items-center">
              {i > 0 && (
                <img
                  src={asset('ic/line-divider.svg')}
                  alt=""
                  width="71"
                  height="0.6"
                  className="absolute left-0 top-[114.2px] hidden max-w-none -translate-x-1/2 rotate-90 lg:block"
                />
              )}
              <p className="text-[20px] font-medium text-gray-250">{stat.label}</p>
              <div className="mt-[31px] flex h-[119px] items-center gap-[6px]">
                <span className={`font-bold text-gray-100 ${stat.size}`}>{stat.value}</span>
                {UNIT_ICON[stat.unit]}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default NumbersSection
