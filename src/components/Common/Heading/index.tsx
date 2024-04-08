import React from 'react'
interface propTypes {
    text: string
    className?: string
  }

const Heading = ({ text, className }: propTypes) => {
  return (
    <p className={`text-2xl font-bold ${className}`}>{text}</p>
  )
}

export default Heading