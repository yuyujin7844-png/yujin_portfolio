import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingMenu from '../components/layout/FloatingMenu'
import CompanyHero from '../sections/company/CompanyHero'
import WhyArkheSection from '../sections/company/WhyArkheSection'
import CoreValuesSection from '../sections/company/CoreValuesSection'
import HistorySection from '../sections/company/HistorySection'

function CompanyPage() {
  return (
    <>
      <Header active="Company" />

      <main>
        <CompanyHero />
        <WhyArkheSection />

        {/* 피그마 하단 그라데이션 (#1D1D20 → #54565D → #FFFFFF) */}
        <div className="bg-section-company">
          <CoreValuesSection />
          <HistorySection />
          <Footer tone="light" />
        </div>
      </main>

      <FloatingMenu />
    </>
  )
}

export default CompanyPage
