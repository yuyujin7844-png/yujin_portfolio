import { asset } from '../../utils/asset'
import { COMPANY, homeSection } from '../../utils/links'

// 피그마 "플러팅 메뉴" (112 x 449, 우측 고정)
const QUICK_MENU = [
  { label: '도입 문의', icon: 'floating-contact', href: homeSection('contact'), text: 'text-[14px]' },
  { label: '회사소개서', icon: 'floating-company', href: COMPANY, text: 'text-[14px]' },
  { label: '채용', icon: 'floating-career', href: homeSection('career'), text: 'text-[16px]' },
]

function FloatingMenu() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  return (
    <aside className="fixed right-4 top-1/2 z-40 hidden h-[449px] w-[112px] -translate-y-1/2 rounded-[10px] bg-[rgba(109,109,109,0.3)] pt-[23px] md:block min-[1920px]:right-[105px]">
      <ul className="flex flex-col items-center gap-[14px]">
        {QUICK_MENU.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="group flex flex-col items-center">
              <span className="relative block size-[74px]">
                <img
                  src={asset(`ic/${item.icon}.svg`)}
                  alt=""
                  width="74"
                  height="74"
                  className="absolute inset-0 transition-opacity duration-200 group-hover:opacity-0"
                />
                <img
                  src={asset(`ic/${item.icon}-hover.svg`)}
                  alt=""
                  width="74"
                  height="74"
                  className="absolute inset-0 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                />
              </span>
              <span className={`mt-[2px] ${item.text} font-normal text-gray-250`}>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>

      {/* up: 74px 슬롯, SVG는 그림자 포함 90px */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="맨 위로"
        className="absolute left-[19px] top-[360px] size-[74px] transition-transform duration-200 hover:-translate-y-[3px]"
      >
        <img src={asset('ic/floating-up.svg')} alt="" width="90" height="90" className="absolute -left-[8px] -top-[8px] max-w-none" />
      </button>
    </aside>
  )
}

export default FloatingMenu
