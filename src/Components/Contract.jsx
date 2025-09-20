import React from 'react'

function Contract() {
  return (
    <div>
         <section className="relative w-full h-full  mt-12  py-20 flex flex-col  overflow-hidden">
             <div
  className="absolute bg-cover bg-center inset-0 "
  style={{ backgroundImage: "url('/worldmap.svg')" }}
></div>
      <div className="ml-28 space-y-14 z-10">
        <h1 className="text-2xl font-semibold text-gray-800">Talent Hub</h1>
        <h2 className="text-6xl font-bold text-red-600 mt-2">IT Staffing Solutions</h2>
        <button className="mt-6 px-6 py-2 border border-black text-black hover:bg-gray-200">
          Consult With Us <span className="ml-2">➔</span>
        </button>
      </div>
      <div className="absolute  right-20 top-6 w-96 h-72 overflow-hidden">
        <img
          src="/Contract.svg" 
          alt="Team"
          className="w-auto h-full object-cover"
        />
      </div>
    </section>
    </div>
  )
}

export default Contract
