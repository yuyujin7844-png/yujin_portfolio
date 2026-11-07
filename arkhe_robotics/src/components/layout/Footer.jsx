import { asset } from '../../utils/asset'

function Footer() {
  return (
    <footer className="pb-[80px]">
      <img src={asset('ic/line-footer.svg')} alt="" width="1920" height="0.6" className="block h-[0.6px] w-full" />

      <div className="container-content pt-[110px]">
        <p className="font-unbounded text-[30px] font-medium text-white">ARKHE</p>
        <div className="mt-[17px] space-y-[6px] text-[14px] text-gray-400">
          <p>(주)아르케 로보틱스 | 대표이사 OOO | 사업자등록번호 000-00-00000</p>
          <p>
            서울특별시 OO구 OO로 00 | T. 02-000-0000 |{' '}
            <a href="mailto:contact@arkherobotics.com" className="underline">
              contact@arkherobotics.com
            </a>
          </p>
          <p className="pt-[11px] font-medium">© 2026 ARKHE Robotics. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
