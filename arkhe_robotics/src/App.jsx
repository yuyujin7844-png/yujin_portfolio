import Box from '@mui/material/Box'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import FloatingMenu from './components/layout/FloatingMenu'
import HeroSection from './sections/HeroSection'
import BusinessSection from './sections/BusinessSection'
import CompanySection from './sections/CompanySection'
import CoreTechSection from './sections/CoreTechSection'
import NumbersSection from './sections/NumbersSection'
import NewsroomSection from './sections/NewsroomSection'
import ContactCareerSection from './sections/ContactCareerSection'

function App() {
  return (
    <Box sx={{ bgcolor: '#000' }}>
      <Header />

      <Box component="main">
        <HeroSection />
        <BusinessSection />
        <CompanySection />
        <CoreTechSection />

        {/* 시안의 밝아졌다 어두워지는 그라데이션 구간 */}
        <Box
          sx={{
            background:
              'linear-gradient(180deg, #0A0A0B 0%, #2A2B2E 22%, #666A72 46%, #4C4F55 62%, #1E1F21 85%, #121314 100%)',
          }}
        >
          <NumbersSection />
          <NewsroomSection />
          <ContactCareerSection />
          <Footer />
        </Box>
      </Box>

      <FloatingMenu />
    </Box>
  )
}

export default App
