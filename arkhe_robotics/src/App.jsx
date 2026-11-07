import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingMenu from './components/layout/FloatingMenu'
import HeroSection from './sections/HeroSection'
import BusinessSection from './sections/BusinessSection'
import CoreTechSection from './sections/CoreTechSection'
import NumbersSection from './sections/NumbersSection'
import NewsroomSection from './sections/NewsroomSection'
import ContactCareerSection from './sections/ContactCareerSection'

function App() {
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

export default App
