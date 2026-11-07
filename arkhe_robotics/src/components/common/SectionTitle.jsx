// 섹션 상단 타이틀: 빨간 영문(Unbounded 30) + 국문 서브타이틀(Pretendard 20)
function SectionTitle({ title, subtitle, subtitleGap = 'mt-[15px]', subtitleWeight = 'font-normal', align = 'center', className = '' }) {
  return (
    <div className={`${align === 'center' ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="font-unbounded text-[30px] font-normal text-brand">{title}</h2>
      <p className={`${subtitleGap} text-[20px] ${subtitleWeight} text-gray-250`}>{subtitle}</p>
    </div>
  )
}

export default SectionTitle
