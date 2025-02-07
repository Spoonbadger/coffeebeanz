"use client"

import { CoffeeType } from './lib/definitions'
import Image from 'next/image'

const Coffee = ({ coffee, rank }: { coffee: CoffeeType, rank: number } ) => {
  return (
    <div className="box-border border-4 border-[#6f4f1e]/[0.15] bg-[#6f4f1e]/[0.05] w-full m-6 p-5 rounded-lg shadow-lg drop-shadow-sm">
      <div className="mb-2">
        <span className="text-2xl font-bold text-[#6f4f1a]/[1]">{rank}. </span>
        <span className="text-2xl"><strong>{coffee.brand}</strong></span><span className="text-2xl"> - {coffee.name}</span>
      </div>
      <div className="flex flex-direction-row">
        <Image 
          src={coffee.image || '/fallback-coffee-img.jpg'}
          className="max-w-[100px]"
          alt="coffee beans image"
          width="100"
          height="0"
          style={{ maxWidth: '100px', maxHeight: '100px' }}
          layout="intrinsic"
        />
        <div>
          {coffee.origin &&
            <div className='m-2'>
              Origin: {coffee.origin}
            </div>
          }
          <div className='m-2'>
            {coffee.description}
          </div>
        </div>
      </div>
      {coffee.price &&
        <span>${coffee.price}</span>
      }
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