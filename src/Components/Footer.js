import React from 'react'

export default function Footer() {
  return (
    <div className='bg-black text-white p-4 mt-7'>
        <p className='text-xl text-center font-bold '>C o n t a c t</p>
        <div className='flex font-semibold flex-col text-sm s350:text-md gap-7 justify-center items-center p-7 font-serif'>
      
            <a className='hover:text-blue-400' href="mailto:tusharbhatt0135@gmail.com" target="_blank" rel="noreferrer">Email</a>
            <a className='hover:text-blue-400' href="https://github.com/TusharBhatt1"  target="_blank"  rel="noreferrer">Github</a>
            <a className='hover:text-blue-400' href="https://www.linkedin.com/in/tushar-bhatt-59b64623b"  target="_blank"  rel="noreferrer">LinkedIn</a>
            <p>+917617446649</p>
        </div>
    </div>
  )
}
