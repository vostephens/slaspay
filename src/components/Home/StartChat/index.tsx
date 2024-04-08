import React from "react"
import Button from "@components/Common/Button"
import { FaArrowRight } from "react-icons/fa6"

const StartChat = () => {
  return (
    <div className="w-full bg-GreenBgColor py-12">
      <div className="w-10/12 mx-auto flex gap-5 items-center">
        <img src="assets/images/Home/circle.PNG" alt="Circle" className="w-full" />
        <div className="flex flex-col gap-6 text-white text-center">
          <span className="text-3xl font-bold w-4/6 mx-auto leading-10">Send Money in Bulk for your Business</span>
          <p className="w-4/6 mx-auto">
            Empower your business transactions with SlasPay! Experience swift, secure, and efficient cross-border
            payments for global enterprises and startups alike.
          </p>
          <Button text="Start Chat" icon={<FaArrowRight className="inline"/>}  className=" rounded-md ml-48 w-2/6 py-4 px-8 font-medium text-GreenBgColor bg-white"/>
        </div>
      </div>
    </div>
  )
}

export default StartChat
