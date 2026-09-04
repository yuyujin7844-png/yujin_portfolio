import { Box, Typography, Button } from '@mui/material';
import PaperSection from '../components/ui/PaperSection.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { GOLD, CREAM } from '../theme.js';
import { PROGRAMS } from '../data/eventInfo.js';

export default function ProgramSection() {
  return (
    <PaperSection id="program" maxWidth="md">
      <SectionTitle en="Program" ko="사흘 밤, 광장 곳곳에서 이어지는 프로그램입니다." />

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: { xs: 2, md: 2.5 },
        }}
      >
        {PROGRAMS.map((p, i) => (
          <Box
            key={p.titleEn}
            sx={{
              position: 'relative',
              aspectRatio: '4 / 3',
              overflow: 'hidden',
              border: `1px solid ${GOLD}`,
              '&:hover img': { transform: 'scale(1.04)' },
            }}
          >
            <Box
              component="img"
              src={`${import.meta.env.BASE_URL}${p.image}`}
              alt={p.titleEn}
              loading="lazy"
              sx={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                transition: 'transform .5s ease',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                insetInline: 0,
                bottom: 0,
                px: 2,
                py: 1.5,
                backgroundImage: 'linear-gradient(180deg, transparent, rgba(20,10,8,0.82))',
              }}
            >
              <Typography sx={{ fontFamily: '"Playfair Display", serif', color: GOLD, fontSize: '0.75rem' }}>
                {String(i + 1).padStart(2, '0')}
              </Typography>
              <Typography
                sx={{ color: CREAM, fontStyle: 'italic', fontFamily: '"Playfair Display", serif', fontSize: '1.1rem' }}
              >
                {p.titleEn}
              </Typography>
              <Typography variant="body2" sx={{ color: `${CREAM}cc`, mt: 0.3 }}>
                {p.desc}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>

      <Box sx={{ textAlign: 'center', mt: 5 }}>
        <Button variant="outlined" size="large" onClick={(e) => e.preventDefault()} sx={{ px: 5 }}>
          자세히 보기
        </Button>
      </Box>
    </PaperSection>
  );
}
