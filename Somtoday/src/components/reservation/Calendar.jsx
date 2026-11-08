import { useState } from 'react';
import { Box, ButtonBase, IconButton, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { COLORS, FONT_EN, FONT_KO } from '../../theme.js';
import { asset } from '../../utils/asset.js';
import { WEEKDAYS, buildWeeks, formatMonth, getDayStatus, toKey } from '../../utils/calendar.js';

// 피그마 '달력' (854 폭) — 7열, 열 간격 133px, 행 간격 131px, 선택일은 지름 96 원
const CIRCLE = { xs: 44, md: 96 };

function DayCell({ date, status, selected, onSelect }) {
  const disabled = status.type !== 'open';
  const numberColor = status.type === 'holiday' ? COLORS.holiday : status.type === 'closed' ? COLORS.disabled : COLORS.body;

  return (
    <Box sx={{ position: 'relative', width: 37, height: { xs: 80, md: 131 }, display: 'flex', justifyContent: 'center' }}>
      <ButtonBase
        disabled={disabled}
        onClick={onSelect}
        aria-pressed={selected}
        aria-label={`${date.getMonth() + 1}월 ${date.getDate()}일${status.label ? ` ${status.label}` : ''}`}
        sx={{
          position: 'absolute',
          top: { xs: -8, md: -34 },
          width: CIRCLE,
          height: CIRCLE,
          flex: 'none',
          borderRadius: '50%',
          transition: 'background-color .2s',
          '&:hover': { bgcolor: selected ? 'transparent' : 'rgba(157, 189, 198, 0.2)' },
        }}
      >
        {selected && (
          <Box
            component="img"
            src={asset('ic/calendar-selected.svg')}
            alt=""
            width={96}
            height={96}
            sx={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          />
        )}
      </ButtonBase>
      {/* 날짜 숫자 + 상태 라벨 (원 위에 표시, 클릭은 버튼이 받음) */}
      <Box sx={{ position: 'relative', textAlign: 'center', pointerEvents: 'none' }}>
        <Typography
          sx={{
            fontFamily: FONT_EN,
            fontWeight: selected ? 500 : 400,
            fontSize: { xs: 17, md: 24 },
            lineHeight: '28px',
            color: numberColor,
          }}
        >
          {date.getDate()}
        </Typography>
        {status.label && (
          <Typography
            sx={{
              fontFamily: FONT_KO,
              fontSize: { xs: 11, md: 20 },
              lineHeight: { xs: '16px', md: '29px' },
              color: status.type === 'holiday' ? COLORS.holiday : COLORS.disabled,
              whiteSpace: 'nowrap',
            }}
          >
            {status.label}
          </Typography>
        )}
      </Box>
    </Box>
  );
}

export default function Calendar({ value, onChange, today, maxDate }) {
  const initial = value ? new Date(...value.split('-').map((n, i) => Number(n) - (i === 1 ? 1 : 0))) : today;
  const [view, setView] = useState({ year: initial.getFullYear(), month: initial.getMonth() });

  const monthIndex = (y, m) => y * 12 + m;
  const canPrev = monthIndex(view.year, view.month) > monthIndex(today.getFullYear(), today.getMonth());
  const canNext = monthIndex(view.year, view.month) < monthIndex(maxDate.getFullYear(), maxDate.getMonth());
  const move = (delta) => {
    const d = new Date(view.year, view.month + delta, 1);
    setView({ year: d.getFullYear(), month: d.getMonth() });
  };

  const weeks = buildWeeks(view.year, view.month);

  return (
    <Box sx={{ maxWidth: 854, mx: 'auto' }}>
      {/* 연.월 + 이전/다음 달 */}
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: { xs: 1, md: 4 } }}>
        <IconButton aria-label="이전 달" disabled={!canPrev} onClick={() => move(-1)}>
          <ChevronLeftIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <Typography
          component="p"
          aria-live="polite"
          sx={{ fontFamily: FONT_EN, fontWeight: 500, fontSize: { xs: 36, md: 50 }, lineHeight: '59px', color: COLORS.body, minWidth: 185, textAlign: 'center' }}
        >
          {formatMonth(view.year, view.month)}
        </Typography>
        <IconButton aria-label="다음 달" disabled={!canNext} onClick={() => move(1)}>
          <ChevronRightIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Box>

      <Box
        role="grid"
        sx={{
          mt: { xs: '40px', md: '79px' },
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 37px)',
          justifyContent: 'space-between',
          px: { xs: '8px', md: 0 },
        }}
      >
        {WEEKDAYS.map((day) => (
          <Typography
            key={day}
            role="columnheader"
            sx={{
              textAlign: 'center',
              fontFamily: FONT_KO,
              fontWeight: 500,
              fontSize: { xs: 17, md: 24 },
              lineHeight: '35px',
              color: COLORS.body,
              mb: { xs: '24px', md: '75px' },
            }}
          >
            {day}
          </Typography>
        ))}
        {weeks.flat().map((date) => {
          const key = toKey(date);
          const status = date > maxDate ? { type: 'closed', label: '마감' } : getDayStatus(date, today);
          return (
            <DayCell
              key={key}
              date={date}
              status={status}
              selected={value === key}
              onSelect={() => {
                onChange(key);
                if (date.getMonth() !== view.month) setView({ year: date.getFullYear(), month: date.getMonth() });
              }}
            />
          );
        })}
      </Box>
    </Box>
  );
}
