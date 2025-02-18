import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const getCoffeesHandler = async (_req: unknown, res: unknown) => {
  try {
    const coffees = await prisma.coffee.findMany()
    console.log("coffees backend:", coffees)
    res.status(200).json(coffees)
  } catch (error) {
    console.error("Error fetching coffees:", error)
    res.status(500).json({ error: 'Error fetching coffees' })
  } finally {
    await prisma.$disconnect()
  }
}

export default getCoffeesHandler



  // const allCoffees = await db.coffee.findMany({
  //   where: {
  //     roastValue: "dark"
  //   },
  //   orderBy: {
  //     roastValue: "asc"
  //   },
  //   take: 10,
  //   skip: 2,
  //   select: {
  //     bitterValue: true,
  //     flavorValue: true
  //   }
  // })