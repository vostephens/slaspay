import React, { useState, useRef } from "react"
import SearchInput from "@components/Common/SearchInput"
import { FaRegUserCircle } from "react-icons/fa"
import { BsBellFill } from "react-icons/bs"
import ProfileDropdown from "../ProfileDropdown"
import { IoIosArrowDown } from "react-icons/io"

const Navbar = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  const onShowDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  const dropDownRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex justify-between p-4 w-full bg-DashboardBgColor">
      <span className="text-OrangeTextColor font-bold text-2xl">Dashboard</span>
      <div className="flex justify-between items-center gap-4">
        <SearchInput placeholder="Search..." className="" />
        <div className="flex items-center gap-2 cursor-pointer"  onClick={onShowDropDown} ref={dropDownRef}>
          <FaRegUserCircle className="text-2xl text-OrangeTextColor" />
          <span className="font-normal ">
            Indrani Sen
          </span>
          <IoIosArrowDown className="text-xl text-OrangeTextColor"/>
          <ProfileDropdown showDropDown={showDropDown} setShowDropDown={setShowDropDown} dropDownRef={dropDownRef} />
        </div>
        <BsBellFill className="text-2xl text-GreenBgColor" />
      </div>
    </div>
  )
}

export default Navbar
