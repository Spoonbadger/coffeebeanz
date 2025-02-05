"use client"

import { useEffect, useState } from 'react'
import Coffee from './Coffee'
import { coffees } from './lib/placeholder-data'

// Define flavor weights (customize as needed)
const FLAVOR_WEIGHTS = [1.2, 1.0, 0.8, 0.8, 1.0];


const Coffees = ({ roastValue, flavorValue }: { roastValue: string, flavorValue:number }) => {
  const [tenCoffees, setTenCoffees] = useState([])

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

  // Weighted distance function (using flavor weights)
  const weightedEuclideanDistance = (a: number[], b: number[]) => {
    return Math.sqrt(
      a.reduce((sum, val, i) => sum + FLAVOR_WEIGHTS[i] * (val - b[i]) ** 2, 0)
    )
  }


  useEffect(() => {
    const filteredCoffees = coffees
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
      .filter(coffDistObj => coffDistObj.coffee.roast_level === roastValue)
      .slice(0, 10)
      .map(coffDistObj => coffDistObj.coffee)

    setTenCoffees(filteredCoffees)
    console.log("filteredCoffees: ", filteredCoffees)
  }, [roastValue, flavorValue])
  
  return (
    <ul>
      {tenCoffees.map(coffee => (
        <li key={coffee.coffee_id}>
          <Coffee coffee={coffee} />
        </li>
      ))}
    </ul>
  )
}

export default Coffees