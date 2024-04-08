import { URL } from "@configs/index"
import React, { useState, useRef } from "react"
import { NavLink } from "react-router-dom"
import { FaRegArrowAltCircleRight } from "react-icons/fa"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import DropDownMenu from "@components/DropdownMenu"

const Header = () => {
  const [showDropDown, setShowDropDown] = useState(false)

  const onShowDropDown = () => {
    setShowDropDown(!showDropDown)
  }

  const dropDownRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex w-full relative">
      <div className="w-10/12 mx-auto flex justify-between my-8">
        <img src="assets/images/Home/logo.PNG" alt="Logo" className="cursor-pointer" />
        <div className="flex gap-16">
          <NavLink to={URL.HOME} className="font-semibold">
            Home
          </NavLink>
          <NavLink to={URL.ABOUT} className="font-semibold">
            About SlasPay
          </NavLink>
          <NavLink to={URL.FEATURES} className="font-semibold">
            Features
          </NavLink>
          <div onClick={onShowDropDown} ref={dropDownRef} className="cursor-pointer">
            <span className="font-semibold">
              {" "}
              Business
              {showDropDown ? <IoIosArrowUp className="inline ml-1" onClick={onShowDropDown} /> : <IoIosArrowDown className="inline ml-1"  onClick={onShowDropDown} />}
            </span>
            <DropDownMenu showDropDown={showDropDown} setShowDropDown={setShowDropDown} dropDownRef={dropDownRef} />
          </div>
          <NavLink to={URL.FAQ} className="font-semibold">
            FAQ
          </NavLink>
          <NavLink to={URL.CONTACT} className="font-semibold">
            Contact
          </NavLink>
          <div className="flex">
            <NavLink to={URL.SIGN_IN} className="font-semibold">
              Sign In
            </NavLink>{" "}
            /
            <NavLink to={URL.SIGN_UP} className="font-semibold">
              {" "}
              Sign Up <FaRegArrowAltCircleRight className="text-GreenBgColor inline text-xl" />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
