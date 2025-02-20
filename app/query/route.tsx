import { db } from "@vercel/postgres"

const client = await db.connect


async function listCoffees() {
  const data = await client.sql`
  SELECT coffees.brand, coffees.name
  FROM coffees
  WHERE coffees.bitterValue = 4
  `

  return data.rows
}



// const getCoffeesHandler = async (_req: Request, res: Response) => {
//   try {
//     const coffees = await prisma.coffee.findMany()
//     console.log("coffees backend:", coffees)
//     // Response(JSON.stringify(coffees), { status: 200 })
//     res.status(200).json(coffees)
//   } catch (error) {
//     console.error("Error fetching coffees:", error)
//     res.status(500).json({ error: 'Error fetching coffees' })
//   } finally {
//     await prisma.$disconnect()
//   }
// }
// export default getCoffeesHandler


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