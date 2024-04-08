import React from "react"
import { NavLink } from "react-router-dom"
import { URL } from "@configs/index"

const DashboardSidebar = () => {
  return (
    <div className="flex flex-col w-3/12 shadow-lg">
      <img src="assets/images/Home/logo.PNG" alt="Logo" className="w-40 my-4 mx-auto" />
      <NavLink
        to={URL.DASHBOARD}
        className="py-4 px-8 hover:bg-DashboardBgColor hover:border-l-GreenBgColor hover:border-l-8 border-b-2 border-gray-200 font-bold"
      >
        Dashboard
      </NavLink>
      <NavLink
        to={URL.CURRENCY_CONVERSION}
        className="py-4 px-8 hover:bg-DashboardBgColor hover:border-GreenBgColor hover:border-l-8 border-b-2 border-gray-200 font-bold"
      >
        Currency Conversion
      </NavLink>
      <NavLink
        to={URL.CURRENCY}
        className="py-4 px-8 hover:bg-DashboardBgColor hover:border-GreenBgColor hover:border-l-8 border-b-2 border-gray-200 font-bold"
      >
        Payment Options
      </NavLink>
      <NavLink
        to={URL.HOME}
        className="py-4 px-8 hover:bg-DashboardBgColor hover:border-GreenBgColor hover:border-l-8 border-b-2 border-gray-200 font-bold"
      >
        Recipient Management
      </NavLink>
      <NavLink
        to={URL.HOME}
        className="py-4 px-8 hover:bg-DashboardBgColor hover:border-GreenBgColor hover:border-l-8 border-b-2 border-gray-200 font-bold"
      >
        Bank Transfers
      </NavLink>
      <NavLink
        to={URL.HOME}
        className="py-4 px-8 hover:bg-DashboardBgColor hover:border-GreenBgColor hover:border-l-8 border-b-2 border-gray-200 font-bold"
      >
        Transaction History
      </NavLink>
      <NavLink
        to={URL.HOME}
        className="py-4 px-8 hover:bg-DashboardBgColor hover:border-GreenBgColor hover:border-l-8 border-b-2 border-gray-200 font-bold"
      >
        KYC
      </NavLink>
      <NavLink
        to={URL.HOME}
        className="py-4 px-8 hover:bg-DashboardBgColor hover:border-GreenBgColor hover:border-l-8 border-b-2 border-gray-200 font-bold"
      >
        Sittings
      </NavLink>
    </div>
  )
}

export default DashboardSidebar
