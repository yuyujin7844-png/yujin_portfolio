import { useEffect, useState } from 'react'
import { asset } from '../../utils/asset'

const NAV_ITEMS = [
  { label: 'Company', href: '#contact' },
  { label: 'Technology', href: '#technology' },
  { label: 'Product', href: '#business' },
  { label: 'Industry', href: '#numbers' },
  { label: 'IR/PR', href: '#newsroom' },
]

function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [lang, setLang] = useState('KOR')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const isKor = lang === 'KOR'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 h-[98px] transition-colors duration-300 ${
        scrolled ? 'bg-black/70 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <div className="container-content relative flex h-full items-center justify-between">
        <a href="#top" className="font-unbounded text-[30px] font-medium text-gray-250">
          ARKHE
        </a>

        {/* GNB: 652px 폭, 항목 간격 60px, 화면 정중앙 */}
        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 gap-[60px] lg:flex">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="font-unbounded text-[16px] font-normal text-gray-250 transition-colors hover:text-brand"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* 언어 토글 (79 x 28) */}
        <button
          type="button"
          onClick={() => setLang(isKor ? 'ENG' : 'KOR')}
          aria-label={`언어 변경 (현재 ${lang})`}
          className="relative h-[28px] w-[79px] rounded-[85px] bg-gray-600"
        >
          <img
            src={asset('ic/toggle-knob.svg')}
            alt=""
            width="20"
            height="20"
            className={`absolute top-[4px] transition-all duration-300 ${isKor ? 'left-[5.4px]' : 'left-[53.6px]'}`}
          />
          <span
            className={`absolute top-[7px] font-unbounded text-[12px] font-normal text-gray-300 transition-all duration-300 ${
              isKor ? 'left-[34px]' : 'left-[12px]'
            }`}
          >
            {lang}
          </span>
        </button>
      </div>
    </header>
  )
}

export default Header
