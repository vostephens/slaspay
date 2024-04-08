import React, { useState } from "react"
import { NavLink } from "react-router-dom"
import { URL } from "@configs/index"
import SideBar from "@components/SideBarSection"

interface DropDownProps {
  showDropDown: boolean
  setShowDropDown: React.Dispatch<React.SetStateAction<boolean>>
  dropDownRef?: React.RefObject<HTMLDivElement>
}
const DropDownMenu: React.FC<DropDownProps> = ({ showDropDown, setShowDropDown, dropDownRef }) => {
  const [showSidebar, setShowSidebar] = useState(false)
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar)
  }

  const handleClickOutsideDropDown = (event: MouseEvent) => {
    if (showDropDown && dropDownRef?.current && !dropDownRef.current.contains(event.target as Node)) {
      setShowDropDown(false)
    }
  }

  window.addEventListener("click", handleClickOutsideDropDown)
  const allDropDowns = [
    { name: "Partner Api", to: "" },
    { name: "Send Bulk Money", to: URL.BUSINESS }
  ]

  return (
    <div>
      {showSidebar && <SideBar onClose={toggleSidebar} />}
      {showDropDown ? (
        <div className="w-[200px] py-2 custom-shadow absolute top-[55px] shadow-md bg-white cursor-pointer showDropDown rounded-lg">
          {allDropDowns.map(({ name, to = "" }) => (
            <NavLink
              key={"dropDown--" + name}
              to={to}
              onClick={name === "Partner Api" ? toggleSidebar : undefined}
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

export default DropDownMenu
