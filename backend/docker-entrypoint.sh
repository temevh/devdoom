#!/bin/sh
set -e

echo "⏳ Waiting for database to be ready..."

until npx prisma migrate deploy 2>&1; do
  echo "🔄 Database not ready yet, retrying in 3s..."
  sleep 3
done

echo "✅ Migrations applied, starting app..."
exec npm run start:dev
