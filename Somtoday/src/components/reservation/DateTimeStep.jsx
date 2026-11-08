import { Box, ButtonBase, TextField, Typography } from '@mui/material';
import { COLORS, FONT_EN, FONT_KO } from '../../theme.js';
import { TIME_SLOTS } from '../../data/reservation.js';
import { getBookedSlots } from '../../utils/calendar.js';
import Calendar from './Calendar.jsx';
import SectionHeading from './SectionHeading.jsx';

const subTitleSx = { fontFamily: FONT_KO, fontWeight: 700, fontSize: 20, lineHeight: '29px', color: COLORS.sky };

// 시간 선택 버튼 (시안에 없어 달력 선택 원 색상과 맞춤)
function TimeSlot({ time, booked, selected, onSelect }) {
  return (
    <ButtonBase
      disabled={booked}
      onClick={onSelect}
      aria-pressed={selected}
      sx={{
        height: 56,
        borderRadius: '4px',
        border: `1px solid ${selected ? COLORS.sky : COLORS.cardLine}`,
        bgcolor: selected ? COLORS.sky : booked ? COLORS.stepperBtn : COLORS.bg,
        color: selected ? COLORS.bg : booked ? COLORS.disabled : COLORS.body,
        fontFamily: FONT_EN,
        fontSize: 20,
        gap: 1,
        transition: 'background-color .2s, border-color .2s',
        '&:hover': { borderColor: COLORS.sky },
      }}
    >
      {time}
      {booked && <Box component="span" sx={{ fontFamily: FONT_KO, fontSize: 14 }}>마감</Box>}
    </ButtonBase>
  );
}

export default function DateTimeStep({ form, onChange, today, maxDate, showErrors, phoneValid }) {
  const booked = form.date ? getBookedSlots(form.date) : [];

  const handleDate = (date) => {
    // 바뀐 날짜에서 이미 마감된 시간이면 시간 선택을 초기화
    const resetTime = form.time && getBookedSlots(date).includes(form.time);
    onChange({ date, ...(resetTime && { time: '' }) });
  };

  return (
    <Box>
      <SectionHeading>날짜 ·시간 선택</SectionHeading>

      <Box sx={{ mt: { xs: '40px', md: '100px' } }}>
        <Calendar value={form.date} onChange={handleDate} today={today} maxDate={maxDate} />
      </Box>

      <Box sx={{ mt: { xs: '40px', md: '80px' } }}>
        <Typography sx={subTitleSx}>시간 선택</Typography>
        {form.date ? (
          <Box
            sx={{
              mt: '20px',
              display: 'grid',
              gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(3, 1fr)', md: 'repeat(6, 1fr)' },
              gap: '16px',
            }}
          >
            {TIME_SLOTS.map((t) => (
              <TimeSlot
                key={t}
                time={t}
                booked={booked.includes(t)}
                selected={form.time === t}
                onSelect={() => onChange({ time: t })}
              />
            ))}
          </Box>
        ) : (
          <Typography sx={{ mt: '20px', fontFamily: FONT_KO, fontSize: 18, color: COLORS.disabled }}>
            달력에서 촬영 날짜를 먼저 선택해 주세요.
          </Typography>
        )}
      </Box>

      <Box sx={{ mt: { xs: '40px', md: '80px' } }}>
        <Typography sx={subTitleSx}>예약자 정보</Typography>
        <Box
          sx={{
            mt: '20px',
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' },
            gap: '16px',
            '& .MuiOutlinedInput-root': { bgcolor: COLORS.bg, fontFamily: FONT_KO },
            '& .MuiInputLabel-root': { fontFamily: FONT_KO },
            '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: COLORS.sky },
            '& .MuiInputLabel-root.Mui-focused': { color: COLORS.deep },
          }}
        >
          <TextField
            label="예약자 이름"
            required
            value={form.name}
            onChange={(e) => onChange({ name: e.target.value })}
            error={showErrors && !form.name.trim()}
            helperText={showErrors && !form.name.trim() ? '이름을 입력해 주세요.' : ' '}
          />
          <TextField
            label="연락처"
            required
            placeholder="010-1234-5678"
            inputProps={{ inputMode: 'tel' }}
            value={form.phone}
            onChange={(e) => onChange({ phone: e.target.value })}
            error={showErrors && !phoneValid}
            helperText={showErrors && !phoneValid ? '휴대폰 번호를 정확히 입력해 주세요.' : ' '}
          />
          <TextField
            label="요청사항 (선택)"
            multiline
            minRows={3}
            value={form.request}
            onChange={(e) => onChange({ request: e.target.value })}
            sx={{ gridColumn: { md: '1 / -1' } }}
          />
        </Box>
      </Box>
    </Box>
  );
}
