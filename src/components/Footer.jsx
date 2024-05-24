import React from 'react'
import { BiCodeAlt, BiPalette } from 'react-icons/bi';
import { BiBulb } from 'react-icons/bi';
function Footer() {
  return (
    <footer className="bg-[var(--black-primary)] text-[var(--white-primary)] py-2">
      <div className="container mx-auto px-3">
        <div className="flex justify-center">
          <ul className="flex space-x-4 mb-9">
            <li><BiBulb size={24} /></li>
            <li><BiCodeAlt size={24} /></li>
            <li><BiPalette size={24} /></li>
          </ul>
        </div>
        <p className="font-poppins font-extrabold text-center text-[var(--white-primary)] mt-2 mb-4">"In order to be irreplaceable, one must always be different."</p>
      </div>
    </footer>

  )
}

export default Footer