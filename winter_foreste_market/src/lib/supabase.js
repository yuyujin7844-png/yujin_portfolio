import { createClient } from '@supabase/supabase-js';

// 포트폴리오 공용 Supabase 프로젝트 (anon 키는 공개되어도 되는 키)
const supabaseUrl =
  import.meta.env.VITE_SUPABASE_URL || 'https://nfwoyrgbqhpobmbikeud.supabase.co';
const supabaseAnonKey =
  import.meta.env.VITE_SUPABASE_ANON_KEY ||
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5md295cmdicWhwb2JtYmlrZXVkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODc1NjkzMDMsImV4cCI6MjEwMzE0NTMwM30.pij00LVsKXSv4x6ivzbZqSIPTowLC3YRSbh-Hd9JfjE';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * 사전 티켓 예약 등록 (더미 — 실제 결제 연동 없음)
 * @param {{ name: string, phone: string, email?: string, ticketType: 'red'|'green', visitDate: string }} payload
 */
export async function submitTicketReservation({ name, phone, email, ticketType, visitDate }) {
  const { data, error } = await supabase
    .from('wfm_ticket_reservations')
    .insert([
      {
        name,
        phone,
        email: email || null,
        ticket_type: ticketType,
        visit_date: visitDate,
        quantity: 1,
      },
    ])
    .select();

  if (error) throw error;
  return data;
}
