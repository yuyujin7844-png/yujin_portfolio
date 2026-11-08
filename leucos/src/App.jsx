import { Box } from '@mui/material';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import ScrollTopButton from './components/layout/ScrollTopButton.jsx';
import HeroSection from './sections/HeroSection.jsx';
import StorySection from './sections/StorySection.jsx';
import SoothingLineSection from './sections/SoothingLineSection.jsx';
import SetSection from './sections/SetSection.jsx';

export default function App() {
  return (
    <>
      <Header />
      <Box component="main">
        <HeroSection />
        <StorySection />
        <SoothingLineSection />
        <SetSection />
      </Box>
      <Footer />
      <ScrollTopButton />
    </>
  );
}
