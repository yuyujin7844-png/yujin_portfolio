// 피그마 BTN "view more" (239 x 56)
// variant: outline(핵심기술, 어두운 배경) / solid(뉴스룸, 밝은 카드)
const VARIANTS = {
  outline: 'border border-gray-350 text-white hover:bg-white hover:text-ink-dark',
  solid: 'bg-ink-dark text-gray-200 hover:bg-brand',
}

function ViewMoreButton({ variant = 'outline', href = '#', className = '' }) {
  return (
    <a
      href={href}
      className={`inline-flex h-[56px] w-[239px] items-center justify-center font-unbounded text-[16px] font-normal transition-colors duration-200 ${VARIANTS[variant]} ${className}`}
    >
      VIEW MORE
    </a>
  )
}

export default ViewMoreButton
