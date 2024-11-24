import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Add your seed data here
  const user = await prisma.user.create({
    data: {
      email: 'test@example.com',
      name: 'Test User'
    },
  })
  
  console.log('Seeded database with test user:', user)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })