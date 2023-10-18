import React from 'react'

const TextInputField = ({name, placeholder = 'Enter a value'} : {name: string, placeholder: string}) => {
  return (
    <input type="text" name={name} placeholder={placeholder} className='bg-[#EDEDED] w-full rounded h-10 px-2 border-2 focus:border-2 focus:border-gray-200 focus:bg-gray-100 outline-none' />
  )
}

export default TextInputField