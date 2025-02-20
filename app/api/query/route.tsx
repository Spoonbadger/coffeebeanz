import { PrismaClient } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
  try {
    const coffees = await prisma.coffee.findMany()
    return NextResponse.json(coffees, { status: 200 })
  } catch (error) {
    console.error('Error fetching coffees:', error)
    return NextResponse.json({ error: 'Error fetching coffees' }, { status: 500 })
  } finally {
    await prisma.$disconnect()
  }
}




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