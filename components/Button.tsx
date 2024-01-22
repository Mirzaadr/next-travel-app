import { ButtonProps } from '@/types'
import Image from 'next/image'
import React from 'react'

const Button: React.FC<ButtonProps> = ({
  type,
  title,
  icon,
  variant,
  full,
  ...props
}) => {
  return (
    <button 
      type={type} 
      className={`flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`}
      {...props}
    >
      {icon && <Image src={icon} alt="icon" width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap cursor-pointer'>{title}</label>
      <div></div>
    </button>
  )
}

export default Button