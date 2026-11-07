import SectionTitle from '../components/common/SectionTitle'
import { asset } from '../utils/asset'

const PRODUCTS = [
  { name: 'KINESIS', desc: 'Humanoid Robot', image: 'business1.webp' },
  { name: 'TECHNE', desc: 'Collaborative Robot', image: 'business2.webp' },
  { name: 'HODOS', desc: 'Autonomous Mobile Robot', image: 'business3.webp' },
  { name: 'NOUS', desc: 'Robot AI Platform', image: 'business4.webp' },
]

function BusinessSection() {
  return (
    <section id="business" className="bg-section-business pb-[441px] pt-[217px]">
      <div className="container-content">
        <SectionTitle title="Business" subtitle="움직임의 근원에서, 산업의 미래를 만듭니다" />

        {/* 카드 350 x 470, 1440 폭에 4열 */}
        <ul className="mt-[186px] grid grid-cols-2 gap-x-[13.33px] gap-y-10 lg:grid-cols-4">
          {PRODUCTS.map((product) => (
            <li key={product.name} className="group cursor-pointer">
              {/* 피그마 첫 번째 카드(보더 2px · Medium)를 hover 상태로 적용 */}
              <div className="aspect-[350/470] overflow-hidden border border-gray-150 transition-[border-width] group-hover:border-2">
                <img
                  src={asset(`img/${product.image}`)}
                  alt={product.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <p className="mt-[16px] font-unbounded text-[20px] font-normal text-gray-250 group-hover:font-medium">{product.name}</p>
              <p className="mt-[4px] font-unbounded text-[18px] font-light text-gray-650">{product.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default BusinessSection
