-- Enable RLS
alter table public.projects enable row level security;
alter table public.blogs enable row level security;
alter table public.messages enable row level security;
alter table public.skills enable row level security;
alter table public.goals enable row level security;
alter table public.timeline enable row level security;
alter table public.profile enable row level security;

-- Create projects table
create table public.projects (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  long_description text not null,
  tech_stack text[] not null,
  github_url text,
  demo_url text,
  image_url text,
  category text not null check (category in ('web', 'android', 'data')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create blogs table
create table public.blogs (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  content text not null,
  excerpt text not null,
  author text not null,
  image_url text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create messages table
create table public.messages (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  email text not null,
  message text not null,
  read boolean default false,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create skills table
create table public.skills (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  category text not null,
  proficiency integer not null check (proficiency between 0 and 100),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create goals table
create table public.goals (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  status text not null check (status in ('planned', 'in_progress', 'completed')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create timeline table
create table public.timeline (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  description text not null,
  date date not null,
  type text not null check (type in ('education', 'work', 'achievement')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create profile table
create table public.profile (
  id uuid default gen_random_uuid() primary key,
  full_name text not null,
  bio text not null,
  avatar_url text,
  cv_url text,
  github_url text,
  linkedin_url text,
  email text not null,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Create RLS policies
create policy "Public profiles are viewable by everyone" on public.profile
  for select using (true);

create policy "Public projects are viewable by everyone" on public.projects
  for select using (true);

create policy "Public blogs are viewable by everyone" on public.blogs
  for select using (true);

create policy "Anyone can submit a message" on public.messages
  for insert with check (true);

create policy "Public skills are viewable by everyone" on public.skills
  for select using (true);

create policy "Public goals are viewable by everyone" on public.goals
  for select using (true);

create policy "Public timeline entries are viewable by everyone" on public.timeline
  for select using (true);