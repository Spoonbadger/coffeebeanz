"use client"

import Link from 'next/link'
import { CoffeeType } from '../lib/definitions'
import Image from 'next/image'

const Coffee = ({ coffee, rank }: { coffee: CoffeeType, rank: number } ) => {
  return (
    // This one to change the positioning of all the coffees
    <div className="box-border border-4 border-[#6f4f1e]/[0.20] dark:border-yellow-500 dark:text-stone-900 bg-white dark:bg-stone-200 w-full sm:m-6 m-6 ml-0 p-5 sm:pl-1 rounded-lg shadow-lg drop-shadow-sm">
      <div className="mb-2">
        <span className="text-2xl font-bold text-[#6f4f1a]/[1] dark:text-yellow-500">{rank}. </span>
          <Link href={coffee.purchase_link} target="_blank" rel="noopener noreferrer">
            <span className="text-2xl"><strong>{coffee.brand}</strong></span><span className="text-2xl"> - {coffee.name}</span>
          </Link>
      </div>
      <div className="flex flex-direction-row">
        <Link href={coffee.purchase_link} target="_blank" rel="noopener noreferrer">
          <div style={{ minWidth: "100px"}}>
            <Image 
              src={coffee.image || '/fallback-coffee-img.jpg'}
              className="max-w-[100px] rounded-md"
              alt="coffee beans image"
              width="100"
              height="100"
              style={{ maxWidth: '100px', maxHeight: '140px' }}
              layout="intrinsic"
            />
          </div>
        </Link>
        <div>
          {coffee.origin &&
            <div className='m-2'>
              Origin: <i>{coffee.origin}</i>
            </div>
          }
          <div className='m-2'>
            {coffee.description}
          </div>
        </div>
      </div>
      <div className="flex justify-between mr-5">
        {coffee.price &&
          <span className="mt-3">${coffee.price}</span>
        }
        <div className="justify-end">
          <a href={coffee.purchase_link} target="_blank" rel="noopener noreferrer">
            <button type="button" className="ml-auto bg-stone-200 hover:bg-stone-300 dark:hover:bg-stone-300 bg-transparent border border-2 border-stone-300 dark:border-stone-300 text-gray-700 dark:text-gray-800 rounded-lg p-1 m-1" title="link to puchase coffee" aria-label="link to purchase coffee">
              Buy here
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Coffee

        {/* <Image
          className="dark:invert"
          src="/next.svg"
          alt="coffee beans logo"
          width={180}
          height={38}
          priority
        /> */}