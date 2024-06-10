import React from 'react'
import { IconType } from 'react-icons' // Importing the type for icons

interface IconButtonProps {
  Icon?: IconType
  onClick?: () => void
  buttonColor?: string
  textColor?: string
  children?: React.ReactNode
  className?: string
}

const IconButton: React.FC<IconButtonProps> = ({
  Icon,
  onClick,
  buttonColor = 'bg-black',
  textColor = 'text-white',
  children,
  className = '',
  ...props
}) => {
  return (
    <button
      className={`${buttonColor} ${textColor} flex items-center justify-center rounded-5xl px-4 py-2 shadow transition duration-150 hover:bg-opacity-90 ${className}`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className='mr-2' size={20} />}
      {children}
    </button>
  )
}

export default IconButton
