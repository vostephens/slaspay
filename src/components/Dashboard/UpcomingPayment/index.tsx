import React from "react"
import Button from "@components/Common/Button"

const UpcomingPayment = () => {
  return (
    <div className="flex flex-col gap-4 bg-DashboardBgColor rounded-lg py-4">
      <span className="text-xl text-semibold px-4 font-medium">Upcoming Payments</span>
      <div className="flex justify-between px-4">
        <div className="w-[30%] flex flex-col gap-2 bg-white border border-gray-300 rounded-lg py-4 px-4 text-center">
          <img src="assets/images/Home/4.PNG" alt="assetsCapture" className="w-12 h-12 mx-auto" />
          <span className="text-OrangeTextColor font-medium">Credit Card Bill</span>
          <span className="text-GreenBgColor">$580</span>
          <Button text="PAY NOW" className="bg-SubmitButtonColor w-3/5 mx-auto text-white p-1 rounded-full text-xs" />
        </div>
        <div className="w-[30%] flex flex-col gap-2 bg-white border border-gray-300 rounded-lg py-4 px-4  text-center">
          <img src="assets/images/Home/2.PNG" alt="assetsCapture" className="w-12 h-12 mx-auto" />
          <span className="text-OrangeTextColor font-medium">Electricity Bill</span>
          <span className="text-GreenBgColor">$780</span>
          <Button text="PAY NOW" className="bg-SubmitButtonColor w-3/5 mx-auto text-white p-1 rounded-full text-xs" />
        </div>
        <div className="w-[30%] flex flex-col gap-2 bg-white border border-gray-300 rounded-lg py-4 px-4  text-center">
          <img src="assets/images/Home/3.PNG" alt="assetsCapture" className="w-12 h-12 mx-auto" />
          <span className="text-OrangeTextColor font-medium">Mobile Phone Bill</span>
          <span className="text-GreenBgColor">$580</span>
          <Button text="PAY NOW" className="bg-SubmitButtonColor w-3/5 mx-auto text-white p-1 rounded-full text-xs" />
        </div>
      </div>
    </div>
  )
}

export default UpcomingPayment
