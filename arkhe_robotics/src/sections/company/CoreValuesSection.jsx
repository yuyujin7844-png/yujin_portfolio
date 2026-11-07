import { asset } from '../../utils/asset'

// 피그마 core value card ui_01~03 (Default / hover 두 상태)
const VALUES = [
  {
    title: 'Precision · 정밀함',
    icon: { src: 'precision.svg', size: 40 },
    desc: ['0.01mm의 오차도 현장에서는 결과를 바꿉니다.', '우리는 가장 작은 움직임까지 설계합니다.'],
    image: 'value-precision.webp',
  },
  {
    title: 'Together · 협력',
    icon: { src: 'together.svg', size: 40 },
    desc: ['로봇은 사람을 대체하지 않습니다. 사람 곁에서', '더 안전하고 효율적으로 일하도록 돕습니다.'],
    image: 'value-together.webp',
  },
  {
    title: 'Evolution · 진화',
    icon: { src: 'evolution.svg', size: 44 },
    desc: ['아르케의 로봇은 현장에서 배우며, 쓸수록 더 나아집니다.'],
    image: 'value-evolution.webp',
  },
]

function ValueCard({ title, icon, desc, image }) {
  return (
    <li tabIndex={0} className="group relative h-[474px] overflow-hidden bg-surface-card outline-none">
      {/* 이미지: Default 72px~하단(402) → hover 하단 140px */}
      <div className="absolute inset-x-0 bottom-0 h-[402px] shadow-[0_0_5.2px_0_rgba(140,144,153,0.23)] transition-all duration-500 ease-out group-hover:h-[140px] group-focus-visible:h-[140px]">
        <img src={asset(`img/${image}`)} alt="" className="size-full object-cover" />
      </div>

      {/* Default 타이틀 */}
      <p className="absolute inset-x-0 top-[22px] text-center font-unbounded text-[20px] font-normal text-gray-250 transition-opacity duration-300 group-hover:opacity-0 group-focus-visible:opacity-0">
        {title}
      </p>

      {/* hover 콘텐츠 */}
      <div className="absolute inset-x-0 top-0 text-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-hover:delay-150 group-focus-visible:opacity-100">
        <span className="absolute left-1/2 top-[66px] flex size-[72px] -translate-x-1/2 items-center justify-center">
          <img src={asset(`ic/${icon.src}`)} alt="" width={icon.size} height={icon.size} />
        </span>
        <h3 className="absolute inset-x-0 top-[146px] font-unbounded text-[24px] font-normal text-gray-250">{title}</h3>
        <p className="absolute inset-x-0 top-[231px] font-unbounded text-[16px] font-normal leading-[1.5] text-gray-250">
          {desc.map((line, i) => (
            <span key={line} className="block">
              {line}
              {i < desc.length - 1 && ' '}
            </span>
          ))}
        </p>
      </div>
    </li>
  )
}

function CoreValuesSection() {
  return (
    <section id="values" className="pt-[216px]">
      <div className="container-content">
        <div className="text-center">
          <h2 className="font-unbounded text-[32px] font-normal text-brand">Core Values</h2>
          <p className="mt-[9px] font-unbounded text-[20px] font-normal text-gray-250">아르케가 일하는 방식</p>
        </div>

        <ul className="mt-[203px] grid gap-[18px] lg:grid-cols-3">
          {VALUES.map((value) => (
            <ValueCard key={value.title} {...value} />
          ))}
        </ul>
      </div>
    </section>
  )
}

export default CoreValuesSection
