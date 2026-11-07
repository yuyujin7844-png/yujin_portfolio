import { asset } from '../../utils/asset'

// 연혁 패널(789 x 1141) 내부 좌표 — 피그마 값 그대로, 패널 안에서 세로 스크롤
const HISTORY = [
  { year: '2019', top: 260, items: ['아르케 로보틱스 설립'] },
  { year: '2020', top: 644, items: ['기업부설 연구소 설립', '로봇 AI 플랫폼 NOUS 개발 착수'] },
  { year: '2021', top: 1057, items: ['협동로봇 TECHNE 1세대 출시', '시리즈 A 투자 유치'] },
  { year: '2022', top: 1470, items: ['협동로봇 TECHNE 누적 공급 100대 달성'] },
  { year: '2023', top: 1854, items: ['물류 자율이동로봇 HODOS 1세대 출시'] },
  { year: '2024', top: 2238, items: ['휴머노이드 KINESIS 프로젝트 공개', '보유 특허 100건 돌파'] },
  { year: '2025', top: 2651, items: ['누적 공급 로봇 1,000대 돌파', '도입 고객사 100곳 돌파'] },
  {
    year: '2026',
    top: 3064,
    items: [
      '휴머노이드 KINESIS 자동차 부품 공장 실증 테스트 착수',
      '협동로봇 TECHNE 200대 공급 계약 체결',
      '물류로봇 HODOS 2세대 공개',
      '시리즈 B 투자 유치',
    ],
  },
]

function HistorySection() {
  return (
    <section id="history" className="pb-[381px] pt-[449px]">
      <div className="container-content flex flex-col lg:flex-row">
        {/* 사옥 이미지 651 x 1141 */}
        <div className="relative h-[600px] w-full shrink-0 overflow-hidden lg:h-[1141px] lg:w-[651px]">
          <img src={asset('img/company-building.webp')} alt="아르케 로보틱스 사옥" className="size-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 h-[172px] bg-history-fade" />
          {/* since(22) / 2019(60 Bold) — 피그마 좌표 기준 (이미지 좌측 400 / 465) */}
          <p className="absolute bottom-0 right-[46px] h-[86px] w-[205px] lg:left-[400px] lg:right-auto">
            <span className="absolute bottom-[24.8px] left-0 text-[22px] text-gray-750">since</span>
            <span className="absolute bottom-[13.4px] left-[65px] text-[60px] font-bold text-black">2019</span>
          </p>
        </div>

        {/* 연혁 그래프 */}
        <div className="h-[1141px] w-full overflow-y-auto overflow-x-hidden bg-gray-50 lg:w-[789px]">
          <div className="relative h-[3295px]">
            <h2 className="absolute left-[113px] top-[59px] font-unbounded text-[48px] font-normal text-brand">History</h2>
            <img src={asset('ic/history-line.svg')} alt="" width="24" height="2850" className="absolute left-[116px] top-[245px] max-w-none" />

            <ol>
              {HISTORY.map(({ year, top, items }) => (
                <li key={year} className="absolute left-[200px] text-black sm:left-[315px]" style={{ top }}>
                  <p className="font-unbounded text-[40px] font-bold">{year}</p>
                  <ul className="mt-[10.4px]">
                    {items.map((item) => (
                      <li key={item} className="h-[29px] text-[20px]">
                        {item}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HistorySection
