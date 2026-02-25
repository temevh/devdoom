import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';
import { PrismaClient, Source, Topics } from '@prisma/client';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🧼 Cleaning database...');
  // Optional: Clears existing posts so you don't get unique constraint errors
  await prisma.post.deleteMany();

  console.log('🌱 Seeding database...');

  const mockPosts = [
    // --- ORIGINAL POSTS ---
    {
      title: 'Mastering NestJS Dependency Injection',
      url: 'https://reddit.com/r/nestjs/comments/1',
      source: Source.reddit,
      tags: ['backend', 'nestjs', 'typescript'],
    },
    {
      title: '10 Productivity Hacks for Software Engineers',
      url: 'https://reddit.com/r/productivity/comments/2',
      source: Source.reddit,
      tags: ['productivity', 'career'],
    },
    {
      title: 'Why I switched from TypeORM to Prisma',
      url: 'https://medium.com/engineering/prisma-vs-typeorm',
      source: Source.medium,
      tags: ['database', 'prisma', 'node', 'react'],
    },
    {
      title: 'Understanding Docker Networking',
      url: 'https://reddit.com/r/devops/comments/3',
      source: Source.reddit,
      tags: ['devops', 'docker'],
    },
    {
      title: 'Next.js 15: Server Actions Deep Dive',
      url: 'https://reddit.com/r/nextjs/comments/4',
      source: Source.reddit,
      tags: ['frontend', 'nextjs', 'react'],
    },
    {
      title: 'Advanced Redis Caching Patterns',
      url: 'https://reddit.com/r/backend/comments/5',
      source: Source.reddit,
      tags: ['backend', 'redis', 'performance'],
    },

    // --- NEW PRODUCTIVITY & CAREER DATA ---
    {
      title: 'Deep Work: How to focus in a world of Slack',
      url: 'https://medium.com/productivity/deep-work-slack',
      source: Source.medium,
      tags: ['productivity', 'focus', 'soft-skills'],
    },
    {
      title: 'The Senior Engineer Guide to System Design',
      url: 'https://reddit.com/r/softwareengineering/comments/6',
      source: Source.reddit,
      tags: ['architecture', 'career', 'backend'],
    },
    {
      title: 'How to handle burnout as a developer',
      url: 'https://medium.com/wellness/dev-burnout',
      source: Source.medium,
      tags: ['productivity', 'career', 'health'],
    },

    // --- AI & FUTURE TECH ---
    {
      title: 'Building LLM Apps with LangChain and NestJS',
      url: 'https://reddit.com/r/nestjs/comments/7',
      source: Source.reddit,
      tags: ['ai', 'nestjs', 'backend'],
    },
    {
      title: 'The Future of AI Coding Assistants',
      url: 'https://medium.com/ai/coding-assistants-2026',
      source: Source.medium,
      tags: ['ai', 'productivity', 'tools'],
    },

    // --- CLOUD & DEVOPS ---
    {
      title: 'Kubernetes for People in a Hurry',
      url: 'https://reddit.com/r/devops/comments/8',
      source: Source.reddit,
      tags: ['devops', 'kubernetes', 'cloud'],
    },
    {
      title: 'AWS Lambda vs Google Cloud Functions in 2026',
      url: 'https://medium.com/cloud/serverless-battle',
      source: Source.medium,
      tags: ['cloud', 'serverless', 'backend'],
    },
    {
      title: 'Terraform Best Practices for Small Teams',
      url: 'https://reddit.com/r/terraform/comments/9',
      source: Source.reddit,
      tags: ['devops', 'infrastructure', 'automation'],
    },

    // --- FRONTEND & UI/UX ---
    {
      title: 'Tailwind CSS: Is it still the king?',
      url: 'https://reddit.com/r/frontend/comments/10',
      source: Source.reddit,
      tags: ['frontend', 'css', 'ui'],
    },
    {
      title: 'React Server Components: The Good and The Bad',
      url: 'https://medium.com/react/rsc-truth',
      source: Source.medium,
      tags: ['frontend', 'react', 'javascript'],
    },
    {
      title: 'Why you should use Vitest over Jest',
      url: 'https://reddit.com/r/javascript/comments/11',
      source: Source.reddit,
      tags: ['frontend', 'testing', 'javascript'],
    },

    // --- RANDOM TECH INTERESTS ---
    {
      title: 'Rust for Node.js Developers',
      url: 'https://medium.com/rust/node-to-rust',
      source: Source.medium,
      tags: ['rust', 'backend', 'performance'],
    },
    {
      title: 'The State of GraphQL in 2026',
      url: 'https://reddit.com/r/graphql/comments/12',
      source: Source.reddit,
      tags: ['backend', 'graphql', 'api'],
    },
    {
      title: 'Postgres vs Mongo: The final showdown',
      url: 'https://medium.com/databases/sql-vs-nosql',
      source: Source.medium,
      tags: ['database', 'backend', 'productivity'],
    },
  ];

  for (const postData of mockPosts) {
    const post = await prisma.post.create({
      data: postData,
    });
    console.log(`✅ Created post: ${post.title}`);
  }

  const mockUser = {
    email: 'tester@test.mail',
    topics: [Topics.productivity],
  };

  const user = await prisma.user.upsert({
    where: { email: mockUser.email },
    update: {},
    create: mockUser,
  });

  console.log(`✅ Created User: ${user.email}`);

  console.log('🚀 Seeding complete!');
}

main()
  .catch((e) => {
    console.error('❌ Seeding failed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
    await pool.end();
  });
