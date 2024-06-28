import React from 'react'
import Link from 'next/link'

export default function UILinks() {
  return (
    <div className='hidden md:flex gap-6'>
      <Link className='text-white active:text-main' href="/">Home</Link>
      <Link className='text-white active:text-main' href="/Articles">Articles</Link>
      <Link className='text-white active:text-main' href="/Contact">Contacts Us</Link>
    </div>
  )
}
