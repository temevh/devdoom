import { PrismaClient, Source } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Cleaning database...');
  // Optional: Clears existing posts so you don't get unique constraint errors
  await prisma.post.deleteMany();

  console.log('🌱 Seeding database...');

  const mockPosts = [
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
      source: Source.medium, // Note: You currently only have 'reddit' in your Enum
      tags: ['database', 'prisma', 'node'],
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
  ];

  for (const postData of mockPosts) {
    const post = await prisma.post.create({
      data: postData,
    });
    console.log(`✅ Created post: ${post.title}`);
  }

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
