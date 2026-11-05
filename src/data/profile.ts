export interface Link {
  label: string
  href: string
}

export interface Project {
  name: string
  /** Groups projects under a heading on the Projects page. */
  category: 'Web & Mobile' | 'Data Engineering'
  description: string
  tech: string[]
  /** Live demo URL. Leave undefined to hide the link. */
  live?: string
  /** Source code URL. Leave undefined to hide the link. */
  source?: string
}

export interface SkillGroup {
  name: string
  skills: string[]
}

export interface Role {
  title: string
  org: string
  period?: string
  summary: string
}

export const profile = {
  name: 'Geof Hirow C. Lapitan',
  tagline: 'Full-stack developer and data engineer building web apps with TypeScript and data pipelines with Python and SQL.',
  location: 'Binangonan, Rizal, Philippines',
  email: 'lapitangeof2@gmail.com',
  /**
   * Path to your photo, e.g. '/me.jpg' (put the file in /public).
   * Leave undefined to show the initials placeholder.
   */
  photo: '/photo.png' as string | undefined,
  initials: 'GL',

  skills: [
    {
      name: 'Frontend',
      skills: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vue', 'React', 'Next.js', 'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'VeeValidate', 'React Hook Form', 'Zod', 'Axios'],
    },
    {
      name: 'Backend',
      skills: ['Express.js', 'REST APIs', 'JWT', 'Better Auth', 'PostgreSQL', 'MongoDB', 'Supabase', 'Drizzle ORM', 'Mongoose', 'Redis'],
    },
    {
      name: 'Data Engineering',
      skills: ['Python', 'SQL', 'PySpark', 'pandas', 'ClickHouse', 'Databricks', 'Apache Airflow', 'ETL/ELT pipelines'],
    },
    {
      name: 'Mobile',
      skills: ['React Native', 'Expo'],
    },
    {
      name: 'Tools & Platforms',
      skills: ['Node.js', 'Bun', 'uv', 'Git', 'GitHub', 'Docker', 'WSL', 'Vercel', 'Render'],
    },
  ] as SkillGroup[],

  /** Shown under your name, in the same order as your résumé header. */
  links: [
    { label: 'lapitangeof2@gmail.com', href: 'mailto:lapitangeof2@gmail.com' },
    { label: 'linkedin.com/in/geoflapitan', href: 'https://linkedin.com/in/geoflapitan' },
    { label: 'github.com/Alingggg', href: 'https://github.com/Alingggg' },
  ] as Link[],

  about: [
    "I'm a Computer Science student at the Polytechnic University of the Philippines – Manila who likes building complete products, from the database schema to the last form field.",
    'On the web side I work with TypeScript across the stack, with PostgreSQL and Drizzle on the backend, and add AI assistants that use tool calling to act on real app data.',
    'On the data side I build batch pipelines that move raw API and file data through Bronze, Silver, and Gold layers, using PySpark on Databricks, Apache Airflow, ClickHouse, and PostgreSQL.',
  ],

  experience: [
    {
      title: 'Frontend Developer Intern',
      org: 'QAME',
      // TODO: add dates, e.g. 'Jun – Aug 2026'
      summary:
        'Built the Vue and TypeScript frontend for a DepEd CALABARZON activity management and evaluation platform, including role-based dashboards, calendars, and public evaluation forms shared through links and QR codes.',
    },
  ] as Role[],

  education: {
    school: 'Polytechnic University of the Philippines – Manila',
    degree: 'BS Computer Science',
    period: '2023 – 2027',
  },

  // TODO: add `live` and `source` URLs for each project
  projects: [
    {
      name: 'Binance Crypto ELT Pipeline',
      category: 'Data Engineering',
      description:
        'Apache Airflow pipeline that loads Binance BTCUSDT candle data into ClickHouse as raw JSON snapshots, then transforms it with pandas into a typed Silver table and a Gold view of 5-minute price and volume aggregates.',
      tech: ['Python', 'Apache Airflow', 'ClickHouse', 'pandas', 'Docker'],
    },
    {
      name: 'Movie Analytics Pipeline',
      category: 'Data Engineering',
      description:
        'Three-stage PySpark pipeline on Databricks that ingests MovieLens 32M and IMDb files into Bronze and Silver Delta tables, then builds a movie dimension, three fact tables, a genre bridge, and four analytics marts, run as a Databricks job.',
      tech: ['Python', 'PySpark', 'Databricks', 'Delta Lake'],
    },
    {
      name: 'Microsoft Learn Pipeline',
      category: 'Data Engineering',
      description:
        'Python ETL pipeline that ingests the Microsoft Learn catalog API into PostgreSQL, keeping dated raw snapshots as JSONB and loading 12 catalog sections into queryable tables.',
      tech: ['Python', 'PostgreSQL', 'Docker'],
    },
    {
      name: 'KwarTala',
      category: 'Web & Mobile',
      description:
        'Personal finance tracker with budgets, spending analytics, and an AI assistant that manages expenses in plain language.',
      tech: ['React', 'TypeScript', 'Express', 'PostgreSQL', 'Drizzle', 'Redis', 'Gemini API'],
    },
    {
      name: 'Due It',
      category: 'Web & Mobile',
      description:
        'Collaborative class workspace for tasks, subjects, schedules, and shared materials, with role-based permissions and an AI assistant.',
      tech: ['React', 'TypeScript', 'Bun', 'Express', 'MongoDB', 'Redis', 'Gemini API'],
    },
    {
      name: 'LabBorrow James',
      category: 'Web & Mobile',
      description:
        'Room and equipment reservation system with role-based portals, an approval workflow, and check-out and return tracking.',
      tech: ['Next.js', 'TypeScript', 'PostgreSQL', 'Drizzle', 'Better Auth', 'shadcn/ui'],
    },
    {
      name: 'Piamontrack',
      category: 'Web & Mobile',
      description:
        'React Native frontend for a personal finance app with budgets, recurring expenses, and weekly and monthly charts.',
      tech: ['React Native', 'Expo', 'Axios'],
    },
  ] as Project[],
}
