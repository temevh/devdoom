import { PrismaClient, Source } from '../generated/prisma';
import { PrismaPg } from '@prisma/adapter-pg';
import { Pool } from 'pg';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

const adapter = new PrismaPg(pool);

const prisma = new PrismaClient({ adapter });

async function main() {
  console.log('🌱 Seeding database...');

  const post1 = await prisma.post.create({
    data: {
      title: 'My First Productive Post',
      url: 'https://reddit.com/r/nestjs',
      source: Source.reddit,
      tags: ['productivity', 'nest.js'],
    },
  });

  console.log('✅ Seed data created:', post1);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
