import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';

const prisma = new PrismaClient()

async function main() {
  // Users
  // const user = await prisma.user.createMany({
  //   data: Array.from({ length: 20 }, () => {
  //     return {
  //       email: faker.internet.email(),
  //       name: faker.internet.username(),
  //     }
  //   })
  // })

  // todos
  const todo=await prisma.todo.createMany({
    data:Array.from({length:10},()=>{
      return {
        title:faker.lorem.word(),
        body:faker.lorem.paragraph()
      }
    })
  }) 


  console.log('Seeded database with test user:', todo)
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })