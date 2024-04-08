import React from "react"
import { MdOutlineFileDownload } from "react-icons/md"
import { FiUsers } from "react-icons/fi";
import { BsGraphUpArrow } from "react-icons/bs";
import { MdHeadsetMic } from "react-icons/md";

const CountBar = () => {
  return (
    <div className="flex bg-GreenBgColor gap-4 w-10/12 mx-auto justify-between rounded-3xl p-8 mt-8">
      <div className="flex gap-2 items-center">
        <MdOutlineFileDownload className="text-white text-5xl" />
        <p className="flex flex-col">
          <span className="text-white">DOWNLOADS</span>
          <span className="text-OrangeTextColor font-bold">20,000</span>
        </p>
      </div>
      <div  className="flex gap-2 items-center">
        <FiUsers className="text-white text-5xl" />
        <p className="flex flex-col">
          <span className="text-white">HAPPY USERS</span>
          <span className="text-OrangeTextColor font-bold">19,000</span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <BsGraphUpArrow className="text-white text-5xl" />
        <p className="flex flex-col">
          <span className="text-white">BUSINESS GROWTH</span>
          <span className="text-OrangeTextColor font-bold">Yearly 88.09%</span>
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <MdHeadsetMic className="text-white text-5xl" />
        <p className="flex flex-col">
          <span className="text-white">EXPERT SUPORT</span>
          <span className="text-OrangeTextColor font-bold">24*7</span>
        </p>
      </div>
    </div>
  )
}

export default CountBar
