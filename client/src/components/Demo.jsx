import React from 'react'

export default function 

h1() {
  return (
    <div className="flex flex-col items-center h-3/4 p-5 relative bg-[#F0F0F0] rounded-xl w-[1000px] ml-[100px]">
    <h1 className="text-[32px] font-bold mb-5">BROWSE BY DRESS STYLE</h1>
    <div className="flex flex-wrap justify-center h-[400px] w-9/12 gap-3">
      <div className="flex gap-3 w-full ml-20">
      <div className="flex flex-col items-center relative">
        <img src="/images/casual.png" alt="Casual" className="w-[280px] h-48 object-cover rounded-md" />
        <h2 className="text-lg font-bold absolute top-4 left-4">Casual</h2>
      </div>
      <div className="flex flex-col items-center relative">
        <img src="/images/party.png" alt="Party" className="w-96 h-48 object-cover rounded-md" />
        <h2 className="text-lg font-bold absolute top-4 left-4">Party</h2>
      </div>
      </div>
      
     
      <div className="flex w-full gap-3 ml-20 ">

      
      
      <div className="flex flex-col items-center relative">
        <img src="/images/formal.png" alt="Formal" className="w-96 h-48 object-cover rounded-md" />
        <h2 className="text-lg font-bold absolute top-4 left-4">Formal</h2>
      </div>
      
      <div className="flex flex-col items-center relative">
        <img src="/images/gym.png" alt="Gym" className="w-[280px] h-48 object-cover rounded-md" />
        <h2 className="text-lg font-bold absolute top-4 left-4">Gym</h2>
      </div>
      </div>
      
    </div>
  </div>
  )
}
