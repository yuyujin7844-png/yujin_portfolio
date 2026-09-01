import { Accordion, AccordionSummary, AccordionDetails, Typography, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PaperSection from '../components/ui/PaperSection.jsx';
import SectionTitle from '../components/ui/SectionTitle.jsx';
import { GOLD, BURGUNDY, CREAM } from '../theme.js';
import { FAQS } from '../data/eventInfo.js';

export default function FaqSection() {
  return (
    <PaperSection id="faq" maxWidth="sm">
      <SectionTitle en="FAQ" />

      <Box>
        {FAQS.map((item, i) => (
          <Accordion
            key={i}
            disableGutters
            elevation={0}
            square
            sx={{
              backgroundColor: 'transparent',
              borderBottom: `1px solid ${GOLD}55`,
              '&:before': { display: 'none' },
            }}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon sx={{ color: GOLD }} />}
              sx={{ px: 0, py: 1 }}
            >
              <Typography
                sx={{
                  fontFamily: '"Nanum Myeongjo", serif',
                  fontWeight: 700,
                  color: BURGUNDY,
                  fontSize: '0.98rem',
                }}
              >
                {item.q}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={{ px: 0, pb: 2, pt: 0 }}>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {item.a}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box sx={{ mt: 4, p: 2.5, textAlign: 'center', border: `1px solid ${GOLD}`, backgroundColor: `${CREAM}` }}>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          더 궁금한 점이 있으면 <Box component="span" sx={{ color: BURGUNDY, fontWeight: 700 }}>052-123-4567</Box> 로 문의해 주세요.
        </Typography>
      </Box>
    </PaperSection>
  );
}
