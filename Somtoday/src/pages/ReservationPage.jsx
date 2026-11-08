import { useEffect, useMemo, useRef, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Header from '../components/layout/Header.jsx';
import Footer from '../components/layout/Footer.jsx';
import FloatingMenu from '../components/layout/FloatingMenu.jsx';
import Container from '../components/ui/Container.jsx';
import ActionButton from '../components/reservation/ActionButton.jsx';
import StepIndicator from '../components/reservation/StepIndicator.jsx';
import ConceptStep from '../components/reservation/ConceptStep.jsx';
import OptionStep from '../components/reservation/OptionStep.jsx';
import SummaryStep from '../components/reservation/SummaryStep.jsx';
import DateTimeStep from '../components/reservation/DateTimeStep.jsx';
import CompleteStep from '../components/reservation/CompleteStep.jsx';
import { BOOKING_MONTHS, QTY_OPTIONS, RESERVATION_CONCEPTS } from '../data/reservation.js';
import { COLORS, FONT_KO } from '../theme.js';
import { asset, pageUrl } from '../utils/asset.js';
import { toKey } from '../utils/calendar.js';
import { getTotal } from '../utils/price.js';

const PHONE_RE = /^01[016789]-?\d{3,4}-?\d{4}$/;

// 메인 페이지 컨셉 카드에서 넘어오면 ?concept=03 처럼 선택된 컨셉을 받는다
function getInitialConcept() {
  const no = new URLSearchParams(window.location.search).get('concept');
  return RESERVATION_CONCEPTS.some((c) => c.no === no) ? no : RESERVATION_CONCEPTS[0].no;
}

const createInitialForm = () => ({
  concept: getInitialConcept(),
  extraConcept: '',
  qty: Object.fromEntries(Object.keys(QTY_OPTIONS).map((key) => [key, 0])),
  date: '',
  time: '',
  name: '',
  phone: '',
  request: '',
});

// 서브 히어로 (1920×771) — 비눗방울 아기 이미지, 시안 크롭 비율 유지
function SubHero() {
  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        height: { xs: 420, md: 'calc(100vw * 771 / 1920)' },
        minHeight: { md: 460 },
      }}
    >
      <Box
        component="img"
        src={asset('img/sub-hero.webp')}
        alt="정원에서 비눗방울을 부는 아이"
        fetchPriority="high"
        sx={{
          position: 'absolute',
          left: '-6.619%',
          top: '-21.293%',
          width: '111.015%',
          height: '185.473%',
          maxWidth: 'none',
          objectFit: 'cover',
          objectPosition: { xs: '62% center', md: 'center' },
        }}
      />
    </Box>
  );
}

export default function ReservationPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState(createInitialForm);
  const [showErrors, setShowErrors] = useState(false);
  const [reservationNo, setReservationNo] = useState('');
  const titleRef = useRef(null);
  const isFirstRender = useRef(true);

  // 오늘(자정 기준)과 예약 가능 마지막 날
  const { today, maxDate } = useMemo(() => {
    const now = new Date();
    const t = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return { today: t, maxDate: new Date(t.getFullYear(), t.getMonth() + BOOKING_MONTHS, 0) };
  }, []);

  const total = getTotal(form);
  const phoneValid = PHONE_RE.test(form.phone.trim());
  const dateTimeValid = Boolean(form.date && form.time && form.name.trim() && phoneValid);

  const update = (patch) =>
    setForm((prev) => {
      const next = { ...prev, ...patch };
      // 메인 컨셉과 추가 컨셉이 같아지면 추가 컨셉은 해제
      if (next.extraConcept === next.concept) next.extraConcept = '';
      return next;
    });

  // 단계가 바뀌면 '예약하기' 제목 위치로 스크롤
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    titleRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [step]);

  const goNext = () => {
    if (step === 3) {
      if (!dateTimeValid) {
        setShowErrors(true);
        return;
      }
      const pad = Math.floor(1000 + Math.random() * 9000);
      setReservationNo(`ST-${toKey(today).replaceAll('-', '')}-${pad}`);
    }
    setStep((s) => s + 1);
  };
  const goPrev = () => setStep((s) => s - 1);
  const restart = () => {
    setForm(createInitialForm());
    setShowErrors(false);
    setStep(0);
  };

  const NEXT_LABELS = ['선 택 완 료', '선 택 완 료', '확 인', '예 약 하 기'];

  return (
    <Box sx={{ position: 'relative', overflowX: 'hidden' }}>
      <Header variant="sub" active="reservation" />
      <Box component="main">
        <SubHero />

        <Container sx={{ pt: { xs: '60px', md: '150px' }, pb: { xs: '120px', md: '306px' } }}>
          <Typography
            ref={titleRef}
            component="h2"
            sx={{ fontFamily: FONT_KO, fontWeight: 500, fontSize: { xs: 32, md: 40 }, lineHeight: '58px', color: '#000', scrollMarginTop: '40px' }}
          >
            예약하기
          </Typography>

          <Box sx={{ mt: '44px' }}>
            <StepIndicator current={step} />
          </Box>

          <Box sx={{ mt: { xs: '60px', md: '169px' } }}>
            {step === 0 && <ConceptStep value={form.concept} onChange={(concept) => update({ concept })} />}
            {step === 1 && <OptionStep form={form} onChange={update} total={total} />}
            {step === 2 && <SummaryStep form={form} total={total} />}
            {step === 3 && (
              <DateTimeStep
                form={form}
                onChange={update}
                today={today}
                maxDate={maxDate}
                showErrors={showErrors}
                phoneValid={phoneValid}
              />
            )}
            {step === 4 && <CompleteStep form={form} total={total} reservationNo={reservationNo} />}
          </Box>

          {/* 하단 버튼 */}
          <Box
            sx={{
              mt: { xs: '60px', md: '151px' },
              display: 'flex',
              flexDirection: { xs: 'column-reverse', sm: 'row' },
              justifyContent: 'center',
              gap: '20px',
            }}
          >
            {step < 4 ? (
              <>
                {step > 0 && (
                  <ActionButton variant="outlined" onClick={goPrev}>
                    이 전
                  </ActionButton>
                )}
                <ActionButton onClick={goNext}>{NEXT_LABELS[step]}</ActionButton>
              </>
            ) : (
              <>
                <ActionButton variant="outlined" onClick={restart}>
                  새 예약하기
                </ActionButton>
                <ActionButton href={pageUrl()}>메인으로</ActionButton>
              </>
            )}
          </Box>
          {step === 3 && showErrors && !dateTimeValid && (
            <Typography role="alert" sx={{ mt: 2, textAlign: 'center', fontFamily: FONT_KO, color: COLORS.holiday }}>
              날짜, 시간, 예약자 정보를 모두 입력해 주세요.
            </Typography>
          )}
        </Container>
      </Box>
      <Footer />
      <FloatingMenu />
    </Box>
  );
}
