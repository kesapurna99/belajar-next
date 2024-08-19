"use client"
import React, { useState } from 'react'

const NewUsersPage = () => {
    
    const [input, setInput] = useState('INI TEXT')

  return (
    <div className='flex justify-center mt-10'> 

        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{input}</h5>
        <input type="text" onChange={(e) => setInput(e.target.value)} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Masukkan Text"  />
        </a>

    </div>
  )
}

export default NewUsersPage