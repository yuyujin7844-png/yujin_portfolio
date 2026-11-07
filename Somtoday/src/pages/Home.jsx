import { Box } from '@mui/material';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import FloatingMenu from '../components/layout/FloatingMenu.jsx';
import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import ConceptSection from '../sections/ConceptSection.jsx';
import ReviewSection from '../sections/ReviewSection.jsx';

export default function Home() {
  return (
    <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Header />
      <Box component="main">
        <HeroSection />
        <AboutSection />
        <ConceptSection />
        <ReviewSection />
      </Box>
      <Footer />
      <FloatingMenu />
    </Box>
  );
}
