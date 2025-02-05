"use client"

const Coffee = ({ coffee }) => {
  return (
    <div className="box-border border-8 border-red-400 w-full m-6 p-10">
      <strong>{coffee.brand}</strong> - {coffee.name}
    </div>
  )
}

export default Coffee