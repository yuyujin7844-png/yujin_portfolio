-- Winter Forest Market in Taehwa — 사전 티켓 예약 테이블
-- 랜딩페이지의 티켓 예약 폼이 이 테이블에 INSERT 한다. (더미: 실제 결제 없음)

create table if not exists public.wfm_ticket_reservations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text,
  ticket_type text not null check (ticket_type in ('red', 'green')),
  visit_date date not null check (visit_date in ('2026-12-22', '2026-12-23', '2026-12-24')),
  quantity integer not null default 1 check (quantity = 1),  -- 1인 1일 1매
  created_at timestamptz not null default now()
);

create index if not exists wfm_ticket_reservations_created_at_idx
  on public.wfm_ticket_reservations (created_at desc);

alter table public.wfm_ticket_reservations enable row level security;

-- 공개 폼: 익명 사용자가 예약 등록(INSERT) 가능
create policy "wfm_ticket_reservations anon insert" on public.wfm_ticket_reservations
  for insert to anon, authenticated with check (true);

-- INSERT 후 .select()로 결과를 되돌려받기 위해 SELECT도 허용 (데모용)
create policy "wfm_ticket_reservations public read" on public.wfm_ticket_reservations
  for select to anon, authenticated using (true);
