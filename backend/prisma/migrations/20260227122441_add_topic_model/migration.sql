-- AlterEnum
-- This migration adds more than one value to an enum.
-- With PostgreSQL versions 11 and earlier, this is not possible
-- in a single migration. This can be worked around by creating
-- multiple migrations, each migration adding only one value to
-- the enum.


ALTER TYPE "Topics" ADD VALUE 'PHP';
ALTER TYPE "Topics" ADD VALUE 'Python';
ALTER TYPE "Topics" ADD VALUE 'Ruby';
ALTER TYPE "Topics" ADD VALUE 'Javascript';
ALTER TYPE "Topics" ADD VALUE 'low_level_and_systems';
ALTER TYPE "Topics" ADD VALUE 'jvm_and_dotnet';
ALTER TYPE "Topics" ADD VALUE 'functional_and_niche_langs';
ALTER TYPE "Topics" ADD VALUE 'databases';
ALTER TYPE "Topics" ADD VALUE 'os_and_platforms';
ALTER TYPE "Topics" ADD VALUE 'terminal_and_shell';
ALTER TYPE "Topics" ADD VALUE 'data_science_and_ai';
ALTER TYPE "Topics" ADD VALUE 'cs_theory_and_career';
ALTER TYPE "Topics" ADD VALUE 'web_design_and_ui';
ALTER TYPE "Topics" ADD VALUE 'security_and_networking';
ALTER TYPE "Topics" ADD VALUE 'browsers';
ALTER TYPE "Topics" ADD VALUE 'hardware_and_iot';
ALTER TYPE "Topics" ADD VALUE 'culture_and_humor';
ALTER TYPE "Topics" ADD VALUE 'general_dev_learning';

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "name" "Topics" NOT NULL,
    "description" TEXT NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);
