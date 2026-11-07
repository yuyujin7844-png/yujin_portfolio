import { asset } from '../../utils/asset'

function CompanyHero() {
  return (
    <section className="relative h-[1000px] overflow-hidden bg-black">
      <img src={asset('img/company-hero.webp')} alt="" className="absolute inset-0 size-full object-cover" />

      <div className="relative px-5 pt-[325px] text-center">
        <p className="font-unbounded text-[24px] font-normal text-brand">Company</p>
        <h1 className="mt-[10px] text-[35px] font-medium text-gray-250">사람과 로봇이 함께 일하는 내일의 시작</h1>
        <p className="mt-[75px] text-[20px] text-white">누구나 현장에서 바로 쓸 수 있는 정밀한 피지컬 AI를 만듭니다</p>
      </div>
    </section>
  )
}

export default CompanyHero
