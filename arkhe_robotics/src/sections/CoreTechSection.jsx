import ViewMoreButton from '../components/common/ViewMoreButton'
import SectionTitle from '../components/common/SectionTitle'
import { asset } from '../utils/asset'

// NOUS 순환 다이어그램 (888 x 848) 위 노드 좌표 — 피그마 값 그대로
const STEPS = [
  {
    label: '02 판단',
    circle: { src: 'node-judgment.svg', left: 409, top: 0 },
    icon: { src: 'judgment.svg', left: 447, top: 25, inner: 4.2, w: 33.816, h: 33.816 },
    labelPos: { left: 467.5, top: 73 },
  },
  {
    label: '03 행동',
    circle: { src: 'node-action.svg', left: 770, top: 378 },
    icon: { src: 'action.svg', left: 808, top: 405, inner: 0, w: 42, h: 42 },
    labelPos: { left: 828.5, top: 449 },
  },
  {
    label: '04 학습',
    circle: { src: 'node-learning.svg', left: 409, top: 730 },
    icon: { src: 'learning.svg', left: 447, top: 755, inner: 3.3, w: 35.2201, h: 35.22 },
    labelPos: { left: 467.5, top: 803 },
  },
]

function CycleDiagram() {
  return (
    <div className="relative h-[848px] w-[888px] shrink-0">
      <img src={asset('ic/big-circle.svg')} alt="" width="729.121" height="722.809" className="absolute left-[101px] top-[63px] max-w-none" />

      {/* NOUS 엔진 */}
      <p className="absolute left-[465.5px] top-[350px] -translate-x-1/2 whitespace-nowrap text-center font-unbounded font-normal text-white">
        <span className="block text-[52px] leading-[74.4px]">NOUS</span>
        <span className="block pt-[30px] text-[28px]">Physical AI Engine</span>
      </p>

      {/* 01 인지 (활성 노드) */}
      <img src={asset('ic/small-circle.svg')} alt="" width="204" height="211" className="absolute left-0 top-[328px] max-w-none" />
      <img src={asset('ic/node-cognition.svg')} alt="" width="174" height="175" className="absolute left-[15px] top-[349px] max-w-none" />
      <span className="absolute left-[61px] top-[377px] size-[80px]">
        <img src={asset('ic/cognition.svg')} alt="" width="64.4114" height="64.4114" className="absolute left-[8px] top-[8px] max-w-none" />
      </span>
      <p className="absolute left-[101.5px] top-[466px] -translate-x-1/2 whitespace-nowrap font-unbounded text-[24px] font-normal text-gray-250">
        01 인지
      </p>

      {STEPS.map(({ label, circle, icon, labelPos }) => (
        <div key={label}>
          <img src={asset(`ic/${circle.src}`)} alt="" width="118" height="118" className="absolute max-w-none" style={{ left: circle.left, top: circle.top }} />
          <span className="absolute size-[42px]" style={{ left: icon.left, top: icon.top }}>
            <img
              src={asset(`ic/${icon.src}`)}
              alt=""
              width={icon.w}
              height={icon.h}
              className="absolute max-w-none"
              style={{ left: icon.inner, top: icon.inner }}
            />
          </span>
          <p
            className="absolute -translate-x-1/2 whitespace-nowrap font-unbounded text-[16px] font-normal text-ink"
            style={{ left: labelPos.left, top: labelPos.top }}
          >
            {label}
          </p>
        </div>
      ))}
    </div>
  )
}

function CoreTechSection() {
  return (
    <section id="technology" className="overflow-hidden bg-section-tech pb-[255px] pt-[369px]">
      <div className="container-content flex flex-col items-center gap-16 xl:flex-row xl:items-start xl:gap-0">
        <div className="w-full xl:w-[506px] xl:shrink-0 xl:pt-[251px]">
          <SectionTitle
            align="left"
            title="Core Technology"
            subtitle="보고, 생각하고, 움직이고, 배웁니다"
            subtitleWeight="font-medium"
          />
          <p className="mt-[68px] text-[18px] leading-[1.5] text-gray-450">
            AI 플랫폼 NOUS를 중심으로, 아르케의 모든
            <br />
            로봇은 현장을 이해하고 스스로 더 나아집니다.
          </p>
          <ViewMoreButton variant="outline" className="mt-[127px]" />
        </div>

        {/* 1440 미만 화면에서는 다이어그램을 비율 축소 */}
        <div className="origin-top max-md:-mb-[424px] max-md:scale-50 md:max-xl:-mb-[170px] md:max-xl:scale-[0.8]">
          <CycleDiagram />
        </div>
      </div>
    </section>
  )
}

export default CoreTechSection
