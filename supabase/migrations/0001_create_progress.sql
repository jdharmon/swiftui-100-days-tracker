create table if not exists public.progress (
  id           uuid primary key default gen_random_uuid(),
  user_id      uuid not null references auth.users(id) on delete cascade,
  item_key     text not null,
  day          integer not null,
  completed    boolean not null default true,
  completed_at timestamptz default now(),
  constraint progress_user_item_unique unique (user_id, item_key)
);

alter table public.progress enable row level security;

create policy "Users read own"
  on public.progress for select
  using (auth.uid() = user_id);

create policy "Users insert own"
  on public.progress for insert
  with check (auth.uid() = user_id);

create policy "Users update own"
  on public.progress for update
  using (auth.uid() = user_id);

create policy "Users delete own"
  on public.progress for delete
  using (auth.uid() = user_id);

create index progress_user_id_idx on public.progress(user_id);
