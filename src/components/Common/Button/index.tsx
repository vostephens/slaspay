import React from "react"
interface propTypes {
  text: string
  className?: string
  icon?: React.ReactNode
  onClick?: () => void
}

const Button = ({ text, className, icon, onClick }: propTypes) => {
  return (
    <button type="submit" className={` ${className}`} onClick={onClick}>
      {text} {icon}
    </button>
  )
}

export default Button
