import React from 'react'
interface propTypes {
    text: string
    className?: string
  }

const TagButton = ({ text, className }: propTypes) => {
  return <button className={`rounded-md ${className} bg-TagBGgray text-OrangeTextColor py-2 px-2 font-medium`}>{text}</button>
}

export default TagButton