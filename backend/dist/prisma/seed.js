"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../generated/prisma");
const adapter_pg_1 = require("@prisma/adapter-pg");
const pg_1 = require("pg");
const pool = new pg_1.Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new adapter_pg_1.PrismaPg(pool);
const prisma = new prisma_1.PrismaClient({ adapter });
async function main() {
    console.log('🌱 Seeding database...');
    const post1 = await prisma.post.create({
        data: {
            title: 'My First Productive Post',
            url: 'https://reddit.com/r/nestjs',
            source: prisma_1.Source.reddit,
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
//# sourceMappingURL=seed.js.map