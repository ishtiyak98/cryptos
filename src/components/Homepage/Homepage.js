import React from 'react'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='md:px-16 py-8'>
      <div className='flex flex-col justify-center h-[80vh] items-center'>
        <h1 className=' font-mono text-xl md:text-5xl '>
          Welcome to CRYPTOS<span className='text-6xl'>☕</span>
        </h1>
        <Link to={"/coins"} className='py-3 px-12 text-white text-xl mt-4 rounded-full bg-slate-900 hover:bg-red-500'>
          Explore Coins
        </Link>
      </div>
    </div>
  )
}

export default Homepage
