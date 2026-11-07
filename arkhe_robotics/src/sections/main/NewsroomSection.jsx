import ViewMoreButton from '../../components/common/ViewMoreButton'

const NEWS = [
  { title: '아르케 로보틱스, 휴머노이드 ‘KINESIS’ 자동차 부품 공장 실증 테스트 착수', date: '26.10.08' },
  { title: '아르케, 협동로봇 ‘TECHNE’ 200대 공급 계약 체결', date: '26.09.24' },
  { title: '물류 자율이동로봇 ‘HODOS’ 2세대 공개… 적재량·주행 속도 대폭 향상', date: '26.09.03' },
  { title: '아르케 로보틱스, 시리즈 B 투자 유치… 피지컬 AI 플랫폼 ‘NOUS’ 고도화 박차', date: '26.08.19' },
]

function NewsroomSection() {
  return (
    <section id="newsroom" className="pt-[538px]">
      <div className="container-content flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-8">
        {/* 타이틀 카드 447 x 423 */}
        <div className="flex h-[423px] w-full shrink-0 flex-col items-center bg-gray-50 pt-[101px] lg:w-[447px]">
          <h2 className="font-unbounded text-[30px] font-normal text-brand">Newsroom</h2>
          <p className="mt-[7px] text-[20px] font-medium text-ink-dark">아르케의 새로운 시작들</p>
          <p className="mt-[30px] text-[18px] text-gray-700">아르케 로보틱스의 최신 소식을 전해드립니다.</p>
          <ViewMoreButton variant="solid" className="mt-[74px]" />
        </div>

        {/* 뉴스 리스트 878 폭, 행 높이 90 — 피그마 첫 행(Medium 22/20)을 hover 상태로 적용 */}
        <ul className="w-full lg:mt-[63px] lg:w-[878px]">
          {NEWS.map((news) => (
            <li key={news.date} className="lg:pr-[3px]">
              <a
                href="#newsroom"
                className="group flex h-[90px] items-center justify-between gap-6 border-b-[0.4px] border-white text-white"
              >
                <span className="truncate text-[20px] font-normal transition-all group-hover:text-[22px] group-hover:font-medium">
                  {news.title}
                </span>
                <span className="shrink-0 pr-[8px] text-[18px] font-normal transition-all group-hover:pr-[3px] group-hover:text-[20px] group-hover:font-medium">
                  {news.date}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default NewsroomSection
