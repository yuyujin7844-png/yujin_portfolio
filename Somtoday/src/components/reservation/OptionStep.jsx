import { Box, MenuItem, Select, Typography } from '@mui/material';
import { COLORS, FONT_KO } from '../../theme.js';
import { EXTRA_CONCEPT_PRICE, QTY_OPTIONS, RESERVATION_CONCEPTS } from '../../data/reservation.js';
import { asset } from '../../utils/asset.js';
import { won } from '../../utils/format.js';
import { findConcept } from '../../utils/price.js';
import QuantityStepper from './QuantityStepper.jsx';
import SectionHeading from './SectionHeading.jsx';
import TotalPrice from './TotalPrice.jsx';

// 셀렉트 화살표 — 피그마 드롭다운 아이콘
function DropdownIcon(props) {
  return (
    <Box
      component="img"
      src={asset('ic/dropdown.svg')}
      alt=""
      width={23.5727}
      height={23.5727}
      {...props}
      sx={{ right: '15px !important', top: 'calc(50% - 11.8px) !important' }}
    />
  );
}

const conceptLabel = (c) => `${Number(c.no)}. ${c.title}`;

// 옵션 카드 (467×340) — 내부 요소는 시안 좌표로 배치
function OptionCard({ title, accent = true, children }) {
  return (
    <Box
      sx={{
        position: 'relative',
        height: 340,
        bgcolor: '#FFFFFF',
        borderRadius: '6px',
        boxShadow: 'inset 0px 0px 5px 0px rgba(146, 146, 146, 0.5)',
      }}
    >
      <Typography
        component="h4"
        sx={{
          position: 'absolute',
          left: 29,
          top: accent ? 11 : 13,
          fontFamily: FONT_KO,
          fontWeight: accent ? 700 : 500,
          fontSize: 20,
          lineHeight: '29px',
          color: accent ? COLORS.sky : COLORS.body,
          whiteSpace: 'pre',
        }}
      >
        {title}
      </Typography>
      {children}
    </Box>
  );
}

// 수량 버튼 + 그 아래 금액 (0개일 때는 단가 안내)
function QtyField({ label, unitText, unit, value, onChange, top }) {
  return (
    <>
      <QuantityStepper label={label} value={value} onChange={onChange} sx={{ position: 'absolute', right: 23, top }} />
      <Typography
        sx={{
          position: 'absolute',
          right: 23,
          top: top + 56,
          fontFamily: FONT_KO,
          fontWeight: 500,
          fontSize: value > 0 ? 22 : 16,
          lineHeight: '32px',
          color: value > 0 ? COLORS.body : COLORS.disabled,
          whiteSpace: 'nowrap',
        }}
      >
        {value > 0 ? won(unit * value) : `${unitText} ${won(unit)}`}
      </Typography>
    </>
  );
}

const rowLabelSx = { position: 'absolute', left: 29, fontFamily: FONT_KO, fontWeight: 500, fontSize: 18, lineHeight: '26px', color: COLORS.body };

export default function OptionStep({ form, onChange, total }) {
  const { concept, extraConcept, qty } = form;
  const setQty = (key) => (value) => onChange({ qty: { ...qty, [key]: value } });
  const extra = findConcept(extraConcept);

  return (
    <Box>
      <SectionHeading>옵션 선택</SectionHeading>

      <Box
        sx={{
          mt: { xs: '40px', md: '100px' },
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
          columnGap: '19px',
          rowGap: '43px',
          '& > *': { minWidth: { sm: 360 } },
        }}
      >
        {/* 컨셉 추가 */}
        <OptionCard title="컨셉 추가">
          <Select
            value={extraConcept}
            onChange={(e) => onChange({ extraConcept: e.target.value })}
            displayEmpty
            inputProps={{ 'aria-label': '추가 컨셉 선택' }}
            IconComponent={DropdownIcon}
            sx={{
              position: 'absolute',
              left: 27,
              right: 30,
              top: 55,
              height: 58,
              borderRadius: '6px',
              bgcolor: COLORS.bg,
              fontFamily: FONT_KO,
              fontSize: 18,
              color: COLORS.body,
              '& .MuiOutlinedInput-notchedOutline': { borderColor: COLORS.inputLine },
              '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: COLORS.sky, borderWidth: 1 },
              '& .MuiSelect-select': { pl: '14px' },
            }}
          >
            <MenuItem value="" sx={{ fontFamily: FONT_KO }}>
              추가하지 않음
            </MenuItem>
            {RESERVATION_CONCEPTS.filter((c) => c.no !== concept).map((c) => (
              <MenuItem key={c.no} value={c.no} sx={{ fontFamily: FONT_KO }}>
                {conceptLabel(c)}
              </MenuItem>
            ))}
          </Select>
          <Typography sx={{ ...rowLabelSx, left: 38, top: 293, fontWeight: 400 }}>추가 컨셉</Typography>
          <Typography sx={{ ...rowLabelSx, left: 128, top: 293, fontWeight: 400 }}>
            {extra ? conceptLabel(extra) : '없음'}
          </Typography>
          <Typography
            sx={{ position: 'absolute', right: 19, top: 290, fontFamily: FONT_KO, fontWeight: 500, fontSize: 22, lineHeight: '32px', color: COLORS.body }}
          >
            {won(extra ? EXTRA_CONCEPT_PRICE : 0)}
          </Typography>
        </OptionCard>

        {/* 인원 추가 */}
        <OptionCard title="인원 추가">
          <Typography
            sx={{ position: 'absolute', left: 22, top: 48, fontFamily: FONT_KO, fontWeight: 500, fontSize: { xs: 14, sm: 16 }, lineHeight: '23px', color: COLORS.body }}
          >
            ※ 2인 초과 시, 1인당 10,000원 추가 요금 발생
            <br />※ 반려동물 동반촬영 시 한 마리당 15,000원
          </Typography>
          <Typography sx={{ ...rowLabelSx, top: 122 }}>인원</Typography>
          <QtyField label="추가 인원" unitText="1인당" unit={QTY_OPTIONS.people.unit} value={qty.people} onChange={setQty('people')} top={115} />
          <Typography sx={{ ...rowLabelSx, top: 242 }}>반려동물</Typography>
          <QtyField label="반려동물" unitText="1마리당" unit={QTY_OPTIONS.pet.unit} value={qty.pet} onChange={setQty('pet')} top={235} />
        </OptionCard>

        {/* 보정 사진 추가 */}
        <OptionCard title="보정 사진 추가">
          <QtyField label="보정 사진" unitText="1장당" unit={QTY_OPTIONS.retouch.unit} value={qty.retouch} onChange={setQty('retouch')} top={236} />
        </OptionCard>

        <OptionCard title="인화  추가" accent={false}>
          <QtyField label="인화" unitText="1장당" unit={QTY_OPTIONS.print.unit} value={qty.print} onChange={setQty('print')} top={240} />
        </OptionCard>
        <OptionCard title="액자  추가" accent={false}>
          <QtyField label="액자" unitText="1개당" unit={QTY_OPTIONS.frame.unit} value={qty.frame} onChange={setQty('frame')} top={240} />
        </OptionCard>
        <OptionCard title="앨범  추가" accent={false}>
          <QtyField label="앨범" unitText="1권당" unit={QTY_OPTIONS.album.unit} value={qty.album} onChange={setQty('album')} top={240} />
        </OptionCard>
      </Box>

      <TotalPrice total={total} sx={{ mt: { xs: '80px', md: '241px' } }} />
    </Box>
  );
}
