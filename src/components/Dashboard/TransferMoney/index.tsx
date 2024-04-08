import React from "react"
import Button from "@components/Common/Button"
import { MdOutlineCurrencyExchange } from "react-icons/md"
import { IoIosArrowForward } from "react-icons/io"

const TransferMoney = () => {
  return (
    <div className="bg-DashboardBgColor p-4 rounded-lg">
      <div className="flex justify-between border-b-2 border-gray-300 pb-4">
        <div className="border-2 border-gray-300 rounded-xl py-2 px-2 bg-white relative pb-6 w-24">
          <span className="text-base font-medium ">
            Wallet Transfer
          </span>
          <IoIosArrowForward className="absolute bottom-0 right-0 bg-OrangeTextColor text-white rounded-tl-xl rounded-br-lg text-2xl" />
        </div>
        <div className="border-2 border-gray-300 rounded-xl py-2 px-2 bg-white relative pb-6 w-24">
          <span className="font-medium text-base">
            Transfer to Other
          </span>
          <IoIosArrowForward className="absolute bottom-0 right-0 bg-OrangeTextColor text-white rounded-tl-xl rounded-br-lg text-2xl" />
        </div>
        <div className="border-2 border-gray-300 rounded-xl py-2 px-2 bg-white relative pb-6 w-24">
          <span className="text-base font-medium ">
            Self Transfer
          </span>
          <IoIosArrowForward className="absolute bottom-0 right-0 bg-OrangeTextColor text-white rounded-tl-xl rounded-br-lg text-2xl" />
        </div>
      </div>
      <Button
        text="Transfer Money"
        icon={<MdOutlineCurrencyExchange className="inline" />}
        className="w-full text-white text-2xl font-medium bg-GreenBgColor rounded-md p-4 mt-4 mx-auto"
      />
    </div>
  )
}

export default TransferMoney
