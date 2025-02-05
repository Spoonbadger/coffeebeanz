"use client"

import Image from "next/image";
import { useEffect, useState } from 'react'
import Coffees from './Coffees.tsx'

export default function Home() {

  const [roastValue, setRoastValue] = useState("medium")
  const [flavorValue, setFlavorValue] = useState(50)

  const handleRoastValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    const roastLevels = ["dark", "medium-dark", "medium", "medium-light", "light"]
    setRoastValue(roastLevels[value/25])

  }

  const handleFlavorValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlavorValue(Number(event.target.value))
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-start justify-items-start min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full bg-white/[.05] text-center px-5 py-5 rounded font-bold full-width text-4xl">coffee&beans</div>
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start my-10 w-full">
        
        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="coffee beans logo"
          width={180}
          height={38}
          priority
        /> */}
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by moving the{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              sliders
            </code>to match your preferred flavor notes
            
          </li>
          <li>See your beans!</li>
        </ol>
        Roast Profile
        <input 
          type="range" 
          min={0} 
          max={100} 
          value={roastValue === "dark" ? 0 : roastValue === "medium-dark" ? 25 : roastValue === "medium" ? 50 : roastValue === "medium-light" ? 75 : 100} 
          className="range" 
          step="25"
          onChange={handleRoastValueChange}
        />
        <div className="flex w-full justify-between px-2 text-xs">
          <span>dark</span>
          <span >medium-<div>dark</div></span>
          <span>medium</span>
          <span>medium-<div>light</div></span>
          <span>light</span>
        </div><br />
        Flavor Profile
        <input 
          type="range"
          min={0} 
          max="100" 
          value={flavorValue}
          className="range range-warning"
          onChange={handleFlavorValueChange}
        />
        <div className="flex justify-between w-full">
          <span>bitter</span>
          <span>nutty</span>
          <span>sweet</span>
          <span>fruity</span>
          <span>floral</span>
        </div>

        <div className="w-full">
          <Coffees roastValue={roastValue} flavorValue={flavorValue} />
        </div>

      </main>






      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to coffeebeantaste.com →
        </a>
      </footer>
    </div>
  );
}
