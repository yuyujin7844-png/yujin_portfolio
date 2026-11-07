import Header from '../components/layout/Header'
import Footer from '../components/layout/Footer'
import FloatingMenu from '../components/layout/FloatingMenu'
import HeroSection from '../sections/main/HeroSection'
import BusinessSection from '../sections/main/BusinessSection'
import CoreTechSection from '../sections/main/CoreTechSection'
import NumbersSection from '../sections/main/NumbersSection'
import NewsroomSection from '../sections/main/NewsroomSection'
import ContactCareerSection from '../sections/main/ContactCareerSection'

function MainPage() {
  return (
    <>
      <Header />

      <main>
        <HeroSection />
        <BusinessSection />
        <CoreTechSection />

        {/* 피그마 하단 그라데이션 구간 (#181818 → #6B6F78 → #070707) */}
        <div className="bg-section-bottom">
          <NumbersSection />
          <NewsroomSection />
          <ContactCareerSection />
          <Footer />
        </div>
      </main>

      <FloatingMenu />
    </>
  )
}

export default MainPage
