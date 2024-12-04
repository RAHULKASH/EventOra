import React from 'react'

export const LoginAsOrganizer = () => {
  return (
    
      <div className='p-8 w-3/4'>        
        <form className='w-full' >
        <div className="flex gap-4 flex-row mb-6 items-center justify-evenly">
              <label htmlFor="name" className="block mb-2 text-sm font-medium  text-gray-300 w-16">Name</label>
              <input type="name" id="name" className="shadow-sm bg-gray-700 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full" placeholder="Shubham Sarda" required autoComplete="off" />
          </div>
          <div className="flex gap-4 flex-row items-center justify-evenly mb-6">
              <label htmlFor="email" className="block mb-2 text-sm font-medium  text-gray-300 w-16">Pass</label>
              <input type="email" id="password" className="shadow-sm bg-gray-700 border border-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light w-full " placeholder="shubham.com" required autoComplete="off" />
          </div>
          <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Log In</button>
        </form>
        </div> 
  )
}
