"use client"

import { CoffeeType } from './lib/definitions'
import Image from 'next/image'

const Coffee = ({ coffee }: { coffee: CoffeeType } ) => {
  return (
    <div className="box-border border-8 border-red-400 w-full m-6 p-5">
      <strong>{coffee.brand}</strong> - {coffee.name}
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
      ${coffee.price}
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