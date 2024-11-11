import React from 'react'

function New() {
  return (
    <div className='flex flex-col items-center '>
        <h2 className='text-5xl font-extralight mt-10 mb-6'>New Arrivals</h2>
        <div id="catagry" className=' mb-8 flex capitalize gap-8'>
            <a className=' text-zinc-600 text-xl hover:text-zinc-950 hover:font-semibold font-thin' href="">Women</a>
            <a className=' text-zinc-600 text-xl hover:text-zinc-950 hover:font-semibold font-thin' href="">Men</a>
            <a className=' text-zinc-600 text-xl hover:text-zinc-950 hover:font-semibold font-thin' href="">shoes</a>
            <a className=' text-zinc-600 text-xl hover:text-zinc-950 hover:font-semibold font-thin' href="">bags</a>
            <a className=' text-zinc-600 text-xl hover:text-zinc-950 hover:font-semibold font-thin' href="">Accessories</a>
        </div>
      
    </div>
  )
}

export default New
