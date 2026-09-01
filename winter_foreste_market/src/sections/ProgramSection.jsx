import { Box, Typography } from '@mui/material';
import PaperSection from '../components/ui/PaperSection.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { GOLD, BURGUNDY } from '../theme.js';
import { PROGRAMS } from '../data/eventInfo.js';

export default function ProgramSection() {
  return (
    <PaperSection id="program" maxWidth="md">
      <SectionTitle en="Program" ko="사흘 밤, 광장 곳곳에서 이어지는 프로그램입니다." />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr', md: '1fr 1fr 1fr' },
          gap: { xs: 2.5, md: 3 },
        }}
      >
        {PROGRAMS.map((p, i) => (
          <Box
            key={p.titleEn}
            sx={{
              border: `1px solid ${GOLD}66`,
              p: 3,
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              transition: 'border-color .25s ease, transform .25s ease',
              '&:hover': { borderColor: GOLD, transform: 'translateY(-4px)' },
            }}
          >
            <Typography sx={{ fontFamily: '"Playfair Display", serif', color: GOLD, fontSize: '0.85rem' }}>
              {String(i + 1).padStart(2, '0')}
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: BURGUNDY, fontStyle: 'italic', fontFamily: '"Playfair Display", serif', fontSize: '1.15rem' }}
            >
              {p.titleEn}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {p.desc}
            </Typography>
          </Box>
        ))}
      </Box>
    </PaperSection>
  );
}
