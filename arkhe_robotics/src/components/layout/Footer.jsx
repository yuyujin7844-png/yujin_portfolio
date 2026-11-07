import { asset } from '../../utils/asset'

// tone: dark(메인, 어두운 배경) / light(회사소개, 흰 배경) — 피그마 값 그대로
const TONES = {
  dark: {
    line: 'ic/line-footer.svg',
    logo: 'text-white',
    text: 'text-gray-400',
    pt: 'pt-[110px]',
    infoGap: 'mt-[17px]',
    copyGap: 'pt-[11px]',
    pb: 'pb-[80px]',
  },
  light: {
    line: 'ic/line-footer-dark.svg',
    logo: 'text-surface-900',
    text: 'text-surface-900',
    pt: 'pt-[120px]',
    infoGap: 'mt-[15px]',
    copyGap: 'pt-[2px]',
    pb: 'pb-[50px]',
  },
}

function Footer({ tone = 'dark' }) {
  const t = TONES[tone]

  return (
    <footer className={t.pb}>
      <img src={asset(t.line)} alt="" width="1920" height="0.6" className="block h-[0.6px] w-full" />

      <div className={`container-content ${t.pt}`}>
        <p className={`font-unbounded text-[30px] font-medium ${t.logo}`}>ARKHE</p>
        <div className={`${t.infoGap} space-y-[6px] text-[14px] ${t.text}`}>
          <p>(주)아르케 로보틱스 | 대표이사 OOO | 사업자등록번호 000-00-00000</p>
          <p>
            서울특별시 OO구 OO로 00 | T. 02-000-0000 |{' '}
            <a href="mailto:contact@arkherobotics.com" className="underline">
              contact@arkherobotics.com
            </a>
          </p>
          <p className={`${t.copyGap} font-medium`}>© 2026 ARKHE Robotics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
