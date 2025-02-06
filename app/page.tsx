"use client"

import Image from "next/image";
import { useEffect, useState, useRef } from 'react'
import Coffees from './Coffees'
import Chart from 'chart.js/auto'
import 'chartjs-plugin-dragdata';


export default function Home() {

  const [roastValue, setRoastValue] = useState<string>("medium")
  const [flavorValue, setFlavorValue] = useState(50)
  const [decaf, setDecaf] = useState(false)
  const [simple, setSimple] = useState(true)

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);
  // state for complex
  const [bitterValue, setBitterValue] = useState(Math.ceil(Math.random() * 10))
  const [nuttyValue, setNuttyValue] = useState(Math.ceil(Math.random() * 10))
  const [sweetValue, setSweetValue] = useState(Math.ceil(Math.random() * 10))
  const [fruityValue, setFruityValue] = useState(Math.ceil(Math.random() * 10))
  const [floralValue, setFloralValue] = useState(Math.ceil(Math.random() * 10))


  const handleRoastValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value)
    const roastLevels = ["dark", "medium-dark", "medium", "medium-light", "light"]
    setRoastValue(roastLevels[value/25])

  }
  const handleFlavorValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFlavorValue(Number(event.target.value))
  }


  useEffect(() => {
    if (!canvasRef.current) return;
  
    // Destroy existing chart instance if it exists
    if (chartInstanceRef.current) {
      chartInstanceRef.current.destroy();
    }
  
    const ctx = canvasRef.current.getContext("2d");
    if (!ctx) return;
  
    chartInstanceRef.current = new Chart<"radar", number[], string>(ctx, {
      type: "radar",
      data: {
        labels: ['Bitter', 'Nutty', 'Sweet', 'Fruity', 'Floral'],
        datasets: [{
          label: 'Flavor Profile',
          data: [bitterValue, nuttyValue, sweetValue, fruityValue, floralValue],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgb(243, 134, 157)',
          borderWidth: 1,
        }]
      },
      options: {
        plugins: {
          dragData: {
            round: 1,
            onDragStart: (e, datasetIndex, index) => {
              console.log('Started dragging point', index);
            },
            onDrag: (e, datasetIndex, index, value) => {
              console.log('Dragging point', index, 'Value:', value)
            },
            onDragEnd: (e, datasetIndex, index, value) => {
              value = Math.round(Number(value))
              console.log('Dropped point', index, 'Final Value:', value)

              // Update the state values based on the dragged point
              if (index === 0) setBitterValue(Math.round(Number(value)))
              if (index === 1) setNuttyValue(value)
              if (index === 2) setSweetValue(value)
              if (index === 3) setFruityValue(value)
              if (index === 4) setFloralValue(value)
            },
          },
        },
        responsive: true,
        scales: {
          r: {
            min: 0,
            max: 10,
            ticks: {
              stepSize: 1,  // Optional: sets the step size for ticks
            },
          },
        },
      }
    });
    // Cleanup on unmount
    return () => {
      chartInstanceRef.current?.destroy()
    }
  }, [bitterValue, nuttyValue, sweetValue, fruityValue, floralValue]) 
  

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
        <div>
          <label className="inline-flex items-center me-5 cursor-pointer">
            <input 
              type="checkbox" 
              checked={simple} 
              className="sr-only peer" 
              onChange={(e) => setSimple(e.target.checked)}
            />
            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-focus:ring-4 peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-yellow-400 dark:peer-checked:bg-yellow-400"></div>
            <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">Complex</span>
          </label>
        </div>
        <div className="w-full">
          {!simple ? ( 
            <div>
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
            </div>
           ) : (
            <div className="max-w-[400px] mx-auto">
              <canvas 
                ref={canvasRef} 
                width="200" 
                height="200"
                ></canvas>
            </div>
           )
          }
        </div>
        <div>
            <input 
              type="checkbox"
              checked={decaf}
              onChange={(e) => setDecaf(e.target.checked)}
            /> decaf
          </div>

        <div className="w-full">
          <Coffees 
            roastValue={roastValue} 
            flavorValue={flavorValue} 
            decaf={decaf} 
            bitterValue={bitterValue} 
            nuttyValue={nuttyValue} 
            sweetValue={sweetValue}
            fruityValue={fruityValue}
            floralValue={floralValue}
          />
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
