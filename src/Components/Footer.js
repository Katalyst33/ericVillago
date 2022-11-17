import React from 'react'
import {TiSocialFacebook} from "react-icons/ti"
import {RiInstagramFill} from "react-icons/ri"
import {SiTiktok} from "react-icons/si"

const Footer = () => {
  return (
    <div className="w-5/6 mx-auto py-10 lg:flex lg:items-center lg:justify-between">
        <p className='font-bold text-2xl'>Eric<span className='text-orange-600'>Villago</span></p>
        <div className='lg:flex lg:gap-7 mt-7 lg:mt-0'>
            <p className='text-lg text-gray-600 mb-2'>Home</p>
            <p className='text-lg text-gray-600 mb-2'>About</p>
            <p className='text-lg text-gray-600 mb-2'>Contact</p>
        </div>
        <div className="flex mt-7 lg:mt-0 gap-4">
            <TiSocialFacebook />
            <RiInstagramFill />
            <SiTiktok />
        </div>
    </div>
  )
}

export default Footer