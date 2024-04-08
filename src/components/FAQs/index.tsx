import React from "react"
import { faqDataItems } from "@components/FAQs/data/index"
import Button from "@components/Common/ButtonAccordin"
import { BsPlus } from "react-icons/bs"
import { IoIosArrowDown } from "react-icons/io"
import { IoIosArrowUp } from "react-icons/io"
import { FiMinus } from "react-icons/fi"

interface propTypes {
  item: faqDataItems
  index: number
  onClick: () => void
  clickHeading: boolean[]
  tutorLastIndex: number
}

const FAQs = ({ item, index, onClick, clickHeading, tutorLastIndex }: propTypes) => {
  return (
    <div
      onClick={onClick}
      className={`${
        index === tutorLastIndex ? "" : " text-mainParaColor"
      } flex flex-col cursor-pointer relative w-full rounded-md my-4 shadow-lg`}
    >
      <div
        className={` ${clickHeading[index] ? "rounded-bl-none rounded-br-none" : ""} rounded-xl flex items-center justify-between py-4 px-4 drop-shadow-md bg-white `}
      >
        <h3 className="text-xl font-semibold text-mainParaColor">{item.question}</h3>
        <Button
          padding=""
          className="h-12 w-12 rounded-full bg-mainBlackColor text-mainColor flex items-center justify-center"
          text=""
          icon={clickHeading[index] ? <IoIosArrowUp className="h-5 w-5" /> : <IoIosArrowDown className="h-8 w-8" />}
        />
      </div>
      <p
        className={`text-xs md:text-sm text-mainLightBlackColor lg:text-base transition-all duration-300 drop-shadow-sm ${
          clickHeading[index]
            ? " text-mainParaColor py-6 px-6 static visible drop-shadow-sm bg-LightGrayColor rounded-bl-xl rounded-br-xl"
            : "invisible absolute opacity-0 top-20"
        }`}
      >
        {item.answer}
      </p>
    </div>
  )
}

export default FAQs
