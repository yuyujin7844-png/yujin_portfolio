import { useEffect, useState } from 'react';
import {
  Dialog, DialogTitle, DialogContent, Box, Typography, IconButton,
  TextField, MenuItem, Button, CircularProgress, Alert,
  ToggleButton, ToggleButtonGroup,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { GOLD, BURGUNDY, DEEP_GREEN, CREAM, INK } from '../../theme.js';
import { EVENT } from '../../data/eventInfo.js';
import { submitTicketReservation } from '../../lib/supabase.js';

const FIELD_SX = {
  '& .MuiOutlinedInput-root': {
    borderRadius: 0,
    color: INK,
    backgroundColor: CREAM,
    '& fieldset': { borderColor: `${GOLD}88` },
    '&:hover fieldset': { borderColor: GOLD },
    '&.Mui-focused fieldset': { borderColor: BURGUNDY },
  },
  '& .MuiInputLabel-root': { color: '#6E6552' },
  '& .MuiInputLabel-root.Mui-focused': { color: BURGUNDY },
};

const EMPTY = { name: '', phone: '', email: '', ticketType: 'red', visitDate: EVENT.dates[0].iso };

export default function TicketReservationModal({ open, onClose, defaultTicket }) {
  const [form, setForm] = useState(EMPTY);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // 모달이 열릴 때 폼 초기화 + 선택한 티켓 종류 반영
  useEffect(() => {
    if (open) {
      setForm({ ...EMPTY, ticketType: defaultTicket === 'green' ? 'green' : 'red' });
      setSuccess(false);
      setError('');
    }
  }, [open, defaultTicket]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) {
      setError('이름과 연락처는 필수 입력 항목입니다.');
      return;
    }
    setLoading(true);
    setError('');
    try {
      await submitTicketReservation(form);
      setSuccess(true);
      setForm(EMPTY);
    } catch {
      setError('예약 접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    setSuccess(false);
    setError('');
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="sm"
      fullWidth
      PaperProps={{
        sx: { backgroundColor: CREAM, border: `1px solid ${GOLD}`, borderRadius: 0 },
      }}
    >
      <DialogTitle
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: `1px solid ${GOLD}55`,
        }}
      >
        <Box>
          <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', fontStyle: 'italic', color: BURGUNDY }}>
            Ticket Reservation
          </Typography>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            사전 예약 · 2026 한정판 머그컵 증정
          </Typography>
        </Box>
        <IconButton onClick={handleClose} sx={{ color: '#6E6552' }} aria-label="닫기">
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent sx={{ pt: 3 }}>
        {success ? (
          <Box sx={{ textAlign: 'center', py: 4 }}>
            <Typography sx={{ fontSize: '2.5rem', mb: 1 }}>🎟️</Typography>
            <Typography sx={{ fontFamily: '"Playfair Display", serif', fontSize: '1.4rem', color: BURGUNDY, mb: 1 }}>
              Reservation Received
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              예약이 접수되었습니다. 행사 당일 만남의 광장 안내데스크에서
              <br />
              이름과 연락처로 확인 후 한정판 머그컵을 받으실 수 있습니다.
            </Typography>
            <Button variant="outlined" onClick={handleClose} sx={{ mt: 4 }}>
              닫기
            </Button>
          </Box>
        ) : (
          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2.5, mt: 1 }}>
            {error && (
              <Alert severity="error" sx={{ borderRadius: 0 }}>
                {error}
              </Alert>
            )}

            <Box>
              <Typography variant="subtitle2" sx={{ mb: 1, color: INK }}>
                티켓 종류
              </Typography>
              <ToggleButtonGroup
                exclusive
                fullWidth
                value={form.ticketType}
                onChange={(_, v) => v && setForm((p) => ({ ...p, ticketType: v }))}
                sx={{
                  '& .MuiToggleButton-root': {
                    borderRadius: 0,
                    borderColor: `${GOLD}88`,
                    color: INK,
                    py: 1.2,
                    letterSpacing: '0.04em',
                    '&.Mui-selected': { color: CREAM, '&:hover': { opacity: 0.92 } },
                  },
                }}
              >
                <ToggleButton
                  value="red"
                  sx={{ '&.Mui-selected': { backgroundColor: BURGUNDY, '&:hover': { backgroundColor: BURGUNDY } } }}
                >
                  Red Ticket
                </ToggleButton>
                <ToggleButton
                  value="green"
                  sx={{ '&.Mui-selected': { backgroundColor: DEEP_GREEN, '&:hover': { backgroundColor: DEEP_GREEN } } }}
                >
                  Green Ticket
                </ToggleButton>
              </ToggleButtonGroup>
            </Box>

            <TextField
              select
              name="visitDate"
              label="방문 날짜"
              value={form.visitDate}
              onChange={handleChange}
              fullWidth
              sx={FIELD_SX}
            >
              {EVENT.dates.map((d) => (
                <MenuItem key={d.iso} value={d.iso}>
                  {d.label}
                </MenuItem>
              ))}
            </TextField>

            <TextField name="name" label="이름 *" value={form.name} onChange={handleChange} fullWidth sx={FIELD_SX} />
            <TextField name="phone" label="연락처 *" value={form.phone} onChange={handleChange} fullWidth sx={FIELD_SX} placeholder="010-0000-0000" />
            <TextField name="email" label="이메일 (선택)" type="email" value={form.email} onChange={handleChange} fullWidth sx={FIELD_SX} />

            <Button type="submit" variant="contained" disabled={loading} fullWidth sx={{ mt: 1, py: 1.5 }}>
              {loading ? <CircularProgress size={22} sx={{ color: CREAM }} /> : '티켓 예약하기'}
            </Button>

            <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
              1인 1일 1매 · 사전 예약은 결제가 아닌 머그컵 수령 신청입니다.
            </Typography>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
}
