"use client"

const Coffee = ({ coffee }) => {
  return (
    <div className="box-border border-8 border-red-400 w-full m-6 p-5">
      <strong>{coffee.brand}</strong> - {coffee.name}
      <div className="flex flex-direction-row">
        <img src={coffee.image} className="max-w-[100px]"></img>
        <div>
          {coffee.origin &&
            <div>
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