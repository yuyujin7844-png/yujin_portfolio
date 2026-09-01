import { useState, useCallback } from 'react';
import { Box } from '@mui/material';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import HeroSection from '../sections/HeroSection.jsx';
import AboutSection from '../sections/AboutSection.jsx';
import TicketsSection from '../sections/TicketsSection.jsx';
import ProgramSection from '../sections/ProgramSection.jsx';
import LocationSection from '../sections/LocationSection.jsx';
import FaqSection from '../sections/FaqSection.jsx';
import TicketReservationModal from '../components/ui/TicketReservationModal.jsx';

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [defaultTicket, setDefaultTicket] = useState('red');

  const openReserve = useCallback((ticketType) => {
    if (ticketType === 'red' || ticketType === 'green') setDefaultTicket(ticketType);
    setModalOpen(true);
  }, []);

  return (
    <Box>
      <Header />
      <HeroSection onReserve={() => openReserve()} />
      <AboutSection />
      <TicketsSection onReserve={openReserve} />
      <ProgramSection />
      <LocationSection />
      <FaqSection />
      <Footer />

      <TicketReservationModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        defaultTicket={defaultTicket}
      />
    </Box>
  );
}
