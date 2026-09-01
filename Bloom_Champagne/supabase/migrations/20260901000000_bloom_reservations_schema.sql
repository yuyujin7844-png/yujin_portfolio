-- Bloom_Champagne 랜딩페이지 사전 예약 신청 테이블

create table if not exists public.bloom_reservations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  phone text,
  quantity integer not null default 1,
  created_at timestamptz not null default now()
);

create index if not exists bloom_reservations_created_at_idx on public.bloom_reservations (created_at desc);

alter table public.bloom_reservations enable row level security;

-- 공개 폼: 익명 사용자는 예약 등록(INSERT) 가능
create policy "bloom_reservations anon insert" on public.bloom_reservations
  for insert to anon, authenticated with check (true);

-- insert 후 .select()로 등록 결과를 되돌려받기 위해 SELECT도 허용 (데모용)
create policy "bloom_reservations public read" on public.bloom_reservations
  for select to anon, authenticated using (true);
