import React from "react"
import InputBox from "@components/Common/Input"
import TagButton from "@components/TagButton"
import { FaArrowAltCircleRight } from "react-icons/fa"

const CurrencyChange = () => {
  return (
    <div className="flex flex-col gap-2 w-4/12">
      <div className="flex p-4 bg-DashboardBgColor rounded-lg justify-between items-center">
        <p className="flex flex-col">
          <span className="text-OrangeTextColor text-xs font-bold">Your Wallet Balance</span>
          <span className="text-GreenBgColor text-3xl font-bold">$5792.323</span>
        </p>
        <span className="bg-purple-200 rounded-md text-red-500 p-4">-0.89%</span>
      </div>
      <div className="flex flex-col gap-4 bg-purple-200 rounded-lg p-4">
        <p className="flex justify-between">
          <span className="font-bold text-xl">Currency Conversion</span>
          <FaArrowAltCircleRight className="text-2xl text-GreenBgColor" />
        </p>
        <InputBox type="text" placeholder="1000" />
        <InputBox type="text" placeholder="87000" />
      </div>
    </div>
  )
}

export default CurrencyChange
