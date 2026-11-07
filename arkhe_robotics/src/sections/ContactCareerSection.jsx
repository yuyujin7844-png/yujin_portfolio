import { asset } from '../utils/asset'

// 피그마 card_Contact(오버레이 노출 상태) / card_Career(default → hover 시 오버레이)
const CARDS = [
  {
    id: 'contact',
    title: 'Contact',
    desc: ['현장에 맞는 로봇이 필요하신가요?', '아르케 전문가가 도입부터 운영까지 함께 설계해 드립니다.'],
    image: 'contact.webp',
    overlay: 'bg-card-contact',
    alwaysOpen: true,
  },
  {
    id: 'career',
    title: 'Career',
    desc: ['피지컬 AI의 시작을 함께 만들 사람을 찾습니다.', '로봇의 미래를 설계할 동료를 기다립니다.'],
    image: 'career.webp',
    overlay: 'bg-card-career',
    alwaysOpen: false,
  },
]

function InfoCard({ id, title, desc, image, overlay, alwaysOpen }) {
  // 오버레이·설명·버튼: 항상 노출 or hover 시 노출
  const reveal = alwaysOpen ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'

  return (
    <article id={id} className="group relative aspect-[710/381] overflow-hidden rounded-[10px] text-white">
      <img src={asset(`img/${image}`)} alt="" className="absolute inset-0 size-full object-cover" />
      <div className={`absolute inset-0 transition-opacity duration-300 ${overlay} ${reveal}`} />

      <h3 className="absolute left-[36px] top-[36px] text-[32px] font-bold">{title}</h3>
      <p className={`absolute left-[36px] top-[88px] text-[16px] font-medium leading-[1.5] transition-opacity duration-300 ${reveal}`}>
        {desc[0]}
        <br />
        {desc[1]}
      </p>

      <a
        href={`#${id}`}
        className={`absolute bottom-[36px] right-[36px] flex size-[94px] items-center justify-center transition-opacity duration-300 ${reveal}`}
      >
        <img src={asset('ic/btn-circle.svg')} alt="" width="94" height="94" className="absolute inset-0" />
        <span className="relative text-[18px] font-medium">도입 문의</span>
      </a>
    </article>
  )
}

function ContactCareerSection() {
  return (
    <section className="pb-[436px] pt-[525px]">
      <div className="container-content grid gap-[19px] lg:grid-cols-2">
        {CARDS.map((card) => (
          <InfoCard key={card.id} {...card} />
        ))}
      </div>
    </section>
  )
}

export default ContactCareerSection
