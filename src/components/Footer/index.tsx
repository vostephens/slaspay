import React, { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { URL } from "@configs/index"

const Footer = () => {
  const [value, setValue] = useState("")

  const location = useLocation()

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(e)
  }
  return (
    <div className="w-full bg-FooterBgColor mt-12">
      {location.pathname === URL.HOME && 
      <div className="w-10/12 mx-auto bg-GreenBgColor rounded-3xl py-6 px-6 flex flex-col gap-4 -translate-y-28">
        <span className="text-white font-medium text-2xl mx-auto">Subscribe to our newsletter</span>
        <p className="text-center text-white text-base">
          Unlock financial insights! Subscribe for exclusive updates and announcement. Join SlasPay community now!{" "}
        </p>
        <form onSubmit={handleSubmit} className="relative w-full">
          <div className="relative w-10/12 mx-auto">
            <input
              className="custom-shadow border-8 border-SearchBorderColor rounded-[10px] py-5 pl-[52px] outline-none text-base text-mainTextColor w-full lg:pr-[520px]"
              value={value}
              onChange={({ target }) => setValue(target.value)}
              placeholder="Enter Your Email ID Here To Get Our Update"
            />
          </div>
          <button
            className="py-[11px] px-[39px] absolute right-[98px] bottom-2 top-2 bg-OrangeTextColor text-white text-sm hover:bg-opacity-50 font-semibold"
            type="submit"
          >
            SUBSCRIBE NOW
          </button>
        </form>
      </div>}
      <div className="flex justify-between py-8 px-28">
        <div className="flex flex-col gap-2">
          <img src="assets/images/Home/footerLogo.PNG" className= "w-2/5" alt="logo" />
          <p className="text-white w-2/4">The optimal payment solution for you and your business.</p>
          <p className="text-white">@2023 SLasPay. All right reserved</p>
        </div>
        <div className="flex gap-12">
          <div className="flex flex-col gap-3">
            <span className="text-GreenBgColor font-medium">Quick Link</span>
            <NavLink to={URL.HOME} className="text-white">
              Home
            </NavLink>
            <NavLink to={URL.ABOUT} className="text-white">
              About
            </NavLink>
            <NavLink to={URL.FEATURES} className="text-white">
              Features
            </NavLink>
            <NavLink to={URL.BUSINESS} className="text-white">
              Send Bulk Money
            </NavLink>
          </div>
          <div className="flex flex-col gap-3">
            <span className="text-GreenBgColor font-medium">Support</span>
            <NavLink to={URL.HOME} className="text-white">
              Partner API
            </NavLink>
            <NavLink to={URL.FAQ} className="text-white">
              FAQ
            </NavLink>
            <NavLink to={URL.FAQ} className="text-white">
              Privacy Policy
            </NavLink>
            <NavLink to={URL.BUSINESS} className="text-white">
              Terms of Services
            </NavLink>
          </div>
        </div>
        <div>
          <img src="assets/images/Home/footerCardPic.PNG" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Footer
