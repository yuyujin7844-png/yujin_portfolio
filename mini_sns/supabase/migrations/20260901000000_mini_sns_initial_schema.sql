-- mini_sns (Moviestagram) 데모 SNS 스키마
-- 테이블 기반 커스텀 아이디/비밀번호 인증을 사용 (Supabase Auth 미사용)

create table if not exists public.ms_users (
  id uuid primary key default gen_random_uuid(),
  username text not null unique,
  password text not null,
  nickname text not null,
  email text,
  profile_image_url text,
  created_at timestamptz not null default now()
);

create table if not exists public.ms_posts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references public.ms_users(id) on delete cascade,
  caption text,
  image_url text,
  hashtags text[] not null default '{}',
  likes_count integer not null default 0,
  location text,
  category text,
  created_at timestamptz not null default now()
);

create table if not exists public.ms_comments (
  id uuid primary key default gen_random_uuid(),
  post_id uuid not null references public.ms_posts(id) on delete cascade,
  user_id uuid not null references public.ms_users(id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now()
);

create index if not exists ms_posts_user_id_idx on public.ms_posts (user_id);
create index if not exists ms_posts_created_at_idx on public.ms_posts (created_at desc);
create index if not exists ms_comments_post_id_idx on public.ms_comments (post_id);
create index if not exists ms_comments_user_id_idx on public.ms_comments (user_id);

-- RLS: 데모용 — 익명(anon) 키로 모든 CRUD 허용
alter table public.ms_users enable row level security;
alter table public.ms_posts enable row level security;
alter table public.ms_comments enable row level security;

create policy "ms_users public access" on public.ms_users
  for all to anon, authenticated using (true) with check (true);
create policy "ms_posts public access" on public.ms_posts
  for all to anon, authenticated using (true) with check (true);
create policy "ms_comments public access" on public.ms_comments
  for all to anon, authenticated using (true) with check (true);
