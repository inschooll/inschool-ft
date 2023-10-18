import constants from '@/app/core/constants/constants'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import links from '@/app/core/constants/links'

const Navbar = () => {
  return (
    <nav>
      <div className="flex justify-between items-center mx-10 py-5">
        {/* logo */}
        <Link href={links.landingPage}>
          <Image
            src={constants.logoFull}
            alt="inschool logo"
            width={150}
            height={40}
          />
        </Link>
      </div>
    </nav>
  )
}

export default Navbar