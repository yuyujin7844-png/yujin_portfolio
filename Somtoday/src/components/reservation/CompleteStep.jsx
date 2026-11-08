import { Box, Typography } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import { COLORS, FONT_EN, FONT_KO } from '../../theme.js';
import { formatDateKey } from '../../utils/calendar.js';
import { won } from '../../utils/format.js';
import { findConcept, getPriceLines } from '../../utils/price.js';
import SectionHeading from './SectionHeading.jsx';

// 예약 완료 — 시안이 없어 같은 톤으로 확인 카드를 구성
export default function CompleteStep({ form, total, reservationNo }) {
  const options = getPriceLines(form)
    .slice(1)
    .map((l) => `${l.label} ${l.detail}`)
    .join(', ');

  const rows = [
    ['예약번호', reservationNo],
    ['컨셉', findConcept(form.concept)?.title],
    ['추가 옵션', options || '없음'],
    ['촬영 일시', `${formatDateKey(form.date)} ${form.time}`],
    ['예약자', `${form.name} · ${form.phone}`],
    ...(form.request.trim() ? [['요청사항', form.request.trim()]] : []),
    ['총 금액', won(total)],
  ];

  return (
    <Box>
      <SectionHeading>예약 완료</SectionHeading>
      <Box sx={{ mt: { xs: '40px', md: '100px' }, textAlign: 'center' }}>
        <CheckCircleOutlineIcon sx={{ fontSize: 80, color: COLORS.sky }} />
        <Typography sx={{ mt: 2, fontFamily: FONT_KO, fontWeight: 500, fontSize: { xs: 26, md: 36 }, color: COLORS.ink }}>
          예약이 완료되었습니다
        </Typography>
        <Typography sx={{ mt: 1.5, fontFamily: FONT_KO, fontSize: { xs: 16, md: 18 }, color: COLORS.text }}>
          촬영 전날 입력하신 연락처로 안내 문자를 보내드릴게요. 언젠가 그리워 할 오늘을 함께 남겨요.
        </Typography>
      </Box>

      <Box
        component="dl"
        sx={{
          maxWidth: 860,
          mx: 'auto',
          mt: '60px',
          mb: 0,
          px: { xs: '20px', md: '50px' },
          py: '20px',
          bgcolor: '#FFFFFF',
          borderRadius: '6px',
          boxShadow: 'inset 0px 0px 5px 0px rgba(146, 146, 146, 0.5)',
        }}
      >
        {rows.map(([label, value]) => (
          <Box
            key={label}
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '90px 1fr', md: '160px 1fr' },
              columnGap: '20px',
              py: '18px',
              '& + &': { borderTop: `1px solid ${COLORS.divider}` },
            }}
          >
            <Typography component="dt" sx={{ fontFamily: FONT_KO, fontWeight: 700, fontSize: 18, color: COLORS.sky }}>
              {label}
            </Typography>
            <Typography
              component="dd"
              sx={{
                m: 0,
                fontFamily: label === '예약번호' ? FONT_EN : FONT_KO,
                fontWeight: label === '총 금액' ? 500 : 400,
                fontSize: label === '총 금액' ? 22 : 18,
                color: COLORS.body,
                wordBreak: 'break-all',
              }}
            >
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
