import React, { useState } from "react"
import { NavLink } from "react-router-dom"

interface DropDownProps {
  showDropDown: boolean
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>
  dropDownRef?: React.RefObject<HTMLDivElement>
}

const ProfileDropdown: React.FC<DropDownProps> = ({ showDropDown, setShowDropDown, dropDownRef }) => {
  const handleClickOutsideDropDown = (event: MouseEvent) => {
    if (showDropDown && dropDownRef?.current && !dropDownRef.current.contains(event.target as Node)) {
      setShowDropDown(false)
    }
  }

  window.addEventListener("click", handleClickOutsideDropDown)
  const allDropDowns = [
    { name: "My Profile", to: "" },
    { name: "Logout", to: "" }
  ]

  return (
    <div>
      {showDropDown ? (
        <div className="w-[160px] py-2 custom-shadow absolute top-[60px] right-1 shadow-md bg-white cursor-pointer showDropDown rounded-lg z-10">
          {allDropDowns.map(({ name, to = "" }) => (
            <NavLink
              key={"dropDown--" + name}
              to={to}
              className="w-full block py-[9px] pl-[15px] hover:bg-profileBgColor text-lightGrayColor hover:text-darkTextBlueColor"
            >
              <p className="flex items-center gap-x-2 font-semibold">{name}</p>
            </NavLink>
          ))}
        </div>
      ) : (
        ""
      )}
    </div>
  )
}

export default ProfileDropdown
