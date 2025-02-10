"use client"

import { useEffect, useState } from 'react'
import Coffee from './Coffee'
import { coffees } from './lib/placeholder-data'
import { CoffeeType } from './lib/definitions'
import { PrismaClient } from '@prisma/client'

// const db = new PrismaClient

// Define flavor weights (customize as needed)
const FLAVOR_WEIGHTS = [1.2, 1.0, 0.8, 0.8, 1.0];


const Coffees = ({ roastValue, flavorValue, decaf, bitterValue, nuttyValue, sweetValue, fruityValue, floralValue, complex }
  : { roastValue: string, flavorValue: number, decaf: boolean, bitterValue: number, nuttyValue: number, sweetValue: number, fruityValue: number, floralValue: number, complex: boolean }) => {
  const [tenCoffees, setTenCoffees] = useState<CoffeeType[]>([])

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

  const getTargetVector = (flavorValue: number) => {
    const t = flavorValue / 100
    return [
      10 * Math.max(1 - 2 * t, 0),  // Bitter
      10 * Math.max(1 - Math.abs(0.5 - t) * 4, 0),  // Nutty
      10 * Math.max(1 - Math.abs(0.6 - t) * 4, 0),  // Sweet
      10 * Math.max(1 - Math.abs(0.75 - t) * 4, 0),  // Fruity
      10 * Math.max(2 * t - 1, 0)  // Floral
    ]
  }
  const getTargetVector2 = (bitterValue: number, nuttyValue: number, sweetValue: number, fruityValue: number, floralValue: number) => {
    return [
      10 * Math.max(1 - 2 * (bitterValue / 10), 0),   // Bitter
      10 * Math.max(1 - Math.abs(0.5 - (nuttyValue /10)) * 4, 0),  // Nutty
      10 * Math.max(1 - Math.abs(0.6 - (sweetValue /10)) * 4, 0),  // Sweet
      10 * Math.max(1 - Math.abs(0.75 - (fruityValue /10)) * 4, 0),  // Fruity
      10 * Math.max(2 * (floralValue / 10) - 1, 0)   // Floral
    ]
  }

  // Weighted distance function (using flavor weights)
  const weightedEuclideanDistance = (a: number[], b: number[]) => {
    return Math.sqrt(
      a.reduce((sum, val, i) => sum + FLAVOR_WEIGHTS[i] * (val - b[i]) ** 2, 0)
    )
  }


  useEffect(() => {
    const radarFilteredCoffees = coffees
      .filter(coffee => (!decaf || coffee.decaf) && (coffee.roast_level === roastValue || !coffee.roast_level))
      .map(coffee => {
        const coffeeVector = [
          coffee.bitterValue,
          coffee.nuttyValue,
          coffee.sweetValue,
          coffee.fruityValue,
          coffee.floralValue
        ]

        const target = getTargetVector2(bitterValue, nuttyValue, sweetValue, fruityValue, floralValue)
        const distance = weightedEuclideanDistance(coffeeVector, target)
        return { coffee, distance }
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5)
      .map(coffDistObj => coffDistObj.coffee)
      
      setTenCoffees(radarFilteredCoffees)
  }, [bitterValue, nuttyValue, sweetValue, fruityValue, floralValue, decaf, roastValue, complex])

  useEffect(() => {
    const filteredCoffees = coffees
      .filter(coffee => (!decaf || coffee.decaf) && (coffee.roast_level === roastValue || !coffee.roast_level))
      .map(coffee => {
        const coffeeVector = [
          coffee.bitterValue,
          coffee.nuttyValue,
          coffee.sweetValue,
          coffee.fruityValue,
          coffee.floralValue
        ]
        const target = getTargetVector(flavorValue) 
        const distance = weightedEuclideanDistance(coffeeVector, target)

        return { coffee, distance}
      })
      .sort((a, b) => a.distance - b.distance)
      .slice(0, 5)
      .map(coffDistObj => coffDistObj.coffee)

    setTenCoffees(filteredCoffees)
    console.log("filteredCoffees: ", filteredCoffees)
  }, [roastValue, flavorValue, decaf])
  
  return (
    <ul>
      {tenCoffees.map((coffee, index) => (
        <li key={coffee.id}>
          <Coffee coffee={coffee} rank={index + 1} />
        </li>
      ))}
    </ul>
  )
}

export default Coffees