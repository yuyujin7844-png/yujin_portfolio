-- mini_sns (Moviestagram) 데모 시드 데이터
-- 홈 피드 확인용 더미 유저 5명 + 게시물 10개 + 댓글
-- 실행: supabase db 에 직접 실행하거나 psql < seed.sql
-- 반복 실행해도 유저는 username unique 로 중복 생성되지 않음.
-- 게시물/댓글은 picsum seed(ms_*) 로 식별하며, 아래 정리 쿼리로 되돌릴 수 있음.

-- 1) 더미 유저 (비밀번호는 데모용 평문)
insert into public.ms_users (username, password, nickname, email, profile_image_url) values
  ('cinephile_jun', 'demo1234', '준의영화노트', 'jun@example.com',  'https://api.dicebear.com/9.x/adventurer/svg?seed=jun'),
  ('stage_lover',   'demo1234', '무대덕후소라', 'sora@example.com', 'https://api.dicebear.com/9.x/adventurer/svg?seed=sora'),
  ('popcorn_kim',   'demo1234', '팝콘킴',       'kim@example.com',  'https://api.dicebear.com/9.x/adventurer/svg?seed=kim'),
  ('musical_hana',  'demo1234', '뮤지컬하나',   'hana@example.com', 'https://api.dicebear.com/9.x/adventurer/svg?seed=hana'),
  ('film_archive',  'demo1234', '필름아카이브', 'arc@example.com',  'https://api.dicebear.com/9.x/adventurer/svg?seed=archive')
on conflict (username) do nothing;

-- 2) 더미 게시물 10개 (caption 은 앱 작성 폼과 동일한 "[분류] 제목\n감상" 포맷)
insert into public.ms_posts (user_id, caption, image_url, hashtags, likes_count, location, category, created_at)
select
  (select id from public.ms_users where username = t.uname limit 1),
  t.caption, t.image_url, t.hashtags, t.likes_count, t.location, t.category,
  now() - t.age
from (values
  ('cinephile_jun',
   E'[영화] 듄: 파트 3\n아이맥스로 다시 봤는데 모래벌레 등장 장면에서 심장이 내려앉는 줄. 사운드가 진짜 미쳤다.',
   'https://picsum.photos/seed/ms_dune3/400/400', array['#듄파트3','#아이맥스','#SF명작'], 128, 'CGV 용산아이파크몰', '영화', interval '2 hours'),
  ('stage_lover',
   E'[뮤지컬] 오페라의 유령\n25년 만의 내한 공연. 샹들리에 떨어지는 순간 객석 전체가 숨을 멈췄다. 커튼콜 기립박수 10분.',
   'https://picsum.photos/seed/ms_phantom/400/400', array['#오페라의유령','#내한공연','#뮤지컬추천'], 94, '블루스퀘어 신한카드홀', '뮤지컬', interval '6 hours'),
  ('popcorn_kim',
   E'[영화] 인사이드 아웃 3\n어른이 되어버린 라일리의 감정들. 후반부 20분은 그냥 눈물 콧물 다 쏟았음. 픽사 폼 미쳤다.',
   'https://picsum.photos/seed/ms_insideout3/400/400', array['#인사이드아웃3','#픽사','#감동'], 210, '메가박스 코엑스', '영화', interval '10 hours'),
  ('musical_hana',
   E'[콘서트] 라이온 킹 30주년 갈라\n오케스트라 라이브로 듣는 Circle of Life. 첫 소절부터 소름이 쫙 돋았다.',
   'https://picsum.photos/seed/ms_lionking/400/400', array['#라이온킹','#갈라콘서트','#디즈니'], 76, '예술의전당 콘서트홀', '콘서트', interval '1 day'),
  ('film_archive',
   E'[전시] 스탠리 큐브릭 회고전\n2001 스페이스 오디세이 소품이랑 콘티가 실제로 전시되어 있다. 영화광이라면 무조건 가야 함.',
   'https://picsum.photos/seed/ms_kubrick/400/400', array['#큐브릭','#회고전','#영화전시'], 53, '서울시립미술관', '전시', interval '1 day 4 hours'),
  ('yujin',
   E'[연극] 햄릿\n3시간 20분이 순삭. 주인공의 독백 장면에서 극장 공기가 얼어붙는 느낌이었다. 연극의 힘.',
   'https://picsum.photos/seed/ms_hamlet/400/400', array['#햄릿','#연극','#셰익스피어'], 41, 'LG아트센터 서울', '연극', interval '2 days'),
  ('cinephile_jun',
   E'[영화] 극장판 스파이더맨: 비욘드\n멀티버스 떡밥 회수 지리고... 쿠키영상 2개 꼭 보고 나오세요. 스포 없이 말하기 힘든 영화.',
   'https://picsum.photos/seed/ms_spiderman/400/400', array['#스파이더맨','#멀티버스','#쿠키영상필수'], 165, 'CGV 왕십리', '영화', interval '2 days 8 hours'),
  ('stage_lover',
   E'[오페라] 라 트라비아타\n2막 아리아에서 프리마돈나 성량에 압도당함. 오페라 입문작으로 강력 추천합니다.',
   'https://picsum.photos/seed/ms_traviata/400/400', array['#라트라비아타','#오페라입문','#예당'], 38, '예술의전당 오페라극장', '오페라', interval '3 days'),
  ('popcorn_kim',
   E'[공연] 난타 20주년 스페셜\n주방에서 벌어지는 리듬 향연. 외국인 관객 반응이 제일 뜨거웠다. 앞자리는 물 튈 수 있음 주의ㅋㅋ',
   'https://picsum.photos/seed/ms_nanta/400/400', array['#난타','#넌버벌','#20주년'], 62, '명동 난타극장', '공연', interval '4 days'),
  ('musical_hana',
   E'[뮤지컬] 위키드\n엘파바의 Defying Gravity에서 무대가 붕 떠오를 때 객석에서 탄성이 터졌다. 넘버 하나하나가 명곡.',
   'https://picsum.photos/seed/ms_wicked/400/400', array['#위키드','#디파잉그래비티','#뮤지컬성지'], 143, '샤롯데씨어터', '뮤지컬', interval '5 days')
) as t(uname, caption, image_url, hashtags, likes_count, location, category, age);

-- 3) 일부 게시물 댓글
insert into public.ms_comments (post_id, user_id, content, created_at)
select
  (select id from public.ms_posts where image_url = c.img limit 1),
  (select id from public.ms_users where username = c.uname limit 1),
  c.content, now() - c.age
from (values
  ('https://picsum.photos/seed/ms_dune3/400/400',      'popcorn_kim',   '저도 아이맥스로 봤는데 의자가 진동했어요 ㅋㅋ', interval '1 hour 30 min'),
  ('https://picsum.photos/seed/ms_dune3/400/400',      'film_archive',  '드니 빌뇌브 영상미는 진짜 못 이김',            interval '1 hour'),
  ('https://picsum.photos/seed/ms_dune3/400/400',      'yujin',         '주말에 예매하러 갑니다 🔥',                    interval '40 min'),
  ('https://picsum.photos/seed/ms_insideout3/400/400', 'stage_lover',   '후반부 진짜 오열 포인트... 손수건 필수',       interval '8 hours'),
  ('https://picsum.photos/seed/ms_insideout3/400/400', 'cinephile_jun', '불안이 또 나오나요? 궁금',                     interval '7 hours'),
  ('https://picsum.photos/seed/ms_phantom/400/400',    'musical_hana',  '내한 이번에 놓치면 또 25년 기다려야 함 ㅠㅠ',  interval '5 hours'),
  ('https://picsum.photos/seed/ms_wicked/400/400',     'yujin',         '디파잉 그래비티 라이브는 진짜 인생 넘버',      interval '4 days 20 hours'),
  ('https://picsum.photos/seed/ms_spiderman/400/400',  'popcorn_kim',   '쿠키 2개 안 보고 나온 사람 손...',            interval '2 days 6 hours')
) as c(img, uname, content, age);

-- 되돌리기(정리):
--   delete from public.ms_posts where image_url like 'https://picsum.photos/seed/ms_%';
--   delete from public.ms_users where username in
--     ('cinephile_jun','stage_lover','popcorn_kim','musical_hana','film_archive');
--   (ms_comments 는 posts 삭제 시 on delete cascade 로 함께 정리됨)
