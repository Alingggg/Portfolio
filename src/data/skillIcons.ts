import type { SimpleIcon } from 'simple-icons'
import {
  siBetterauth,
  siDatabricks,
  siDrizzle,
  siReacthookform,
  siReactquery,
  siRender,
  siZod,
} from 'simple-icons'

// Full-color logos from Devicon (https://devicon.dev). Vite turns each import
// into a URL and only bundles the logos used here.
import axios from 'devicon/icons/axios/axios-plain.svg'
import airflow from 'devicon/icons/apacheairflow/apacheairflow-original.svg'
import bun from 'devicon/icons/bun/bun-original.svg'
import clickhouse from 'devicon/icons/clickhouse/clickhouse-original.svg'
import css from 'devicon/icons/css3/css3-original.svg'
import docker from 'devicon/icons/docker/docker-original.svg'
import expo from 'devicon/icons/expo/expo-original.svg'
import express from 'devicon/icons/express/express-original.svg'
import git from 'devicon/icons/git/git-original.svg'
import github from 'devicon/icons/github/github-original.svg'
import html from 'devicon/icons/html5/html5-original.svg'
import javascript from 'devicon/icons/javascript/javascript-original.svg'
import jwt from 'devicon/icons/jwt/jwt-original.svg'
import mongodb from 'devicon/icons/mongodb/mongodb-original.svg'
import mongoose from 'devicon/icons/mongoose/mongoose-original.svg'
import nextjs from 'devicon/icons/nextjs/nextjs-original.svg'
import nodejs from 'devicon/icons/nodejs/nodejs-original.svg'
import pandas from 'devicon/icons/pandas/pandas-original.svg'
import postgresql from 'devicon/icons/postgresql/postgresql-original.svg'
import python from 'devicon/icons/python/python-original.svg'
import react from 'devicon/icons/react/react-original.svg'
import redis from 'devicon/icons/redis/redis-original.svg'
import shadcn from 'devicon/icons/shadcn/shadcn-original.svg'
import spark from 'devicon/icons/apachespark/apachespark-original.svg'
import supabase from 'devicon/icons/supabase/supabase-original.svg'
import tailwind from 'devicon/icons/tailwindcss/tailwindcss-original.svg'
import typescript from 'devicon/icons/typescript/typescript-original.svg'
import uv from 'devicon/icons/uv/uv-original.svg'
import veevalidate from 'devicon/icons/veevalidate/veevalidate-original.svg'
import vercel from 'devicon/icons/vercel/vercel-original.svg'
import vue from 'devicon/icons/vuejs/vuejs-original.svg'

/** A full-color logo image (Devicon). */
export interface ImageIcon {
  src: string
}

/** Generic icons for skills that have no logo. */
export type GenericIcon = 'database' | 'code' | 'terminal'

/**
 * Devicon logo when there is one, otherwise a single-color Simple Icons logo
 * (https://simpleicons.org) in its brand color, otherwise a generic icon.
 */
export type SkillIconSource = ImageIcon | SimpleIcon | GenericIcon

const img = (src: string): ImageIcon => ({ src })

/**
 * Icon for each skill name used in `profile.skills`.
 * A skill missing from this map is shown without an icon.
 */
export const skillIcons: Record<string, SkillIconSource> = {
  // Frontend
  TypeScript: img(typescript),
  JavaScript: img(javascript),
  HTML: img(html),
  CSS: img(css),
  Vue: img(vue),
  React: img(react),
  'Next.js': img(nextjs),
  'Tailwind CSS': img(tailwind),
  'shadcn/ui': img(shadcn),
  'TanStack Query': siReactquery,
  VeeValidate: img(veevalidate),
  'React Hook Form': siReacthookform,
  Zod: siZod,
  Axios: img(axios),

  // Backend
  'Node.js': img(nodejs),
  Bun: img(bun),
  'Express.js': img(express),
  'REST APIs': 'code',
  JWT: img(jwt),
  'Better Auth': siBetterauth,
  Supabase: img(supabase),
  'Drizzle ORM': siDrizzle,
  Mongoose: img(mongoose),
  Redis: img(redis),

  PostgreSQL: img(postgresql),
  MongoDB: img(mongodb),

  // Data engineering
  Python: img(python),
  SQL: 'database',
  PySpark: img(spark),
  pandas: img(pandas),
  ClickHouse: img(clickhouse),
  Databricks: siDatabricks,
  'Apache Airflow': img(airflow),
  'ETL/ELT pipelines': 'code',

  // Mobile
  'React Native': img(react),
  Expo: img(expo),

  // Tools & platforms
  Git: img(git),
  GitHub: img(github),
  Docker: img(docker),
  WSL: 'terminal',
  uv: img(uv),
  Vercel: img(vercel),
  Render: siRender,
}
