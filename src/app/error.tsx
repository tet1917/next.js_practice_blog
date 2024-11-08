"use client";

import React from 'react'

const Error = ({reset} :{reset:() =>void}) => {
  return (
    <div className='bg-red-100 border-1-4 border-red-500 text-red-700 rounded shadow-md p-2 mx-auto'>
      <h3 className='font-bold mb-2'>エラーが発生しました</h3>
      <button onClick={() => reset()} className='bg-red-600 text-white px-4 py-2 hover:bg-red-500 transition duration-200'>もう一度ためす</button>
    </div>
  )
}

export default Error
