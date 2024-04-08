import React, { useState } from "react"
import InputBox from "@components/Common/Input"
import { GiCancel } from "react-icons/gi"
import { PhoneInput } from "react-international-phone"
import "react-international-phone/style.css"
import Select from "react-select"
import Button from "@components/Common/Button"

const ListOption = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" }
]
interface propType {
  onClose: any
}

const SideBar = ({ onClose }: propType) => {
  const [phone, setPhone] = useState("")
  return (
    <div>
      <div className="fixed top-0 left-0 w-full h-full bg-black opacity-50 z-50" onClick={onClose}></div>
      <div className="absolute top-0 left-56 bg-white w-5/12 shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out z-50 ">
        <div className="bg-GreenBgColor py-4 px-8 flex justify-between">
          <span className="text-white text-xl font-medium">Request for Partner API</span>
          <GiCancel className="text-white text-xl" onClick={onClose} />
        </div>
        <form className="py-4 px-8 flex flex-col gap-4">
          <span className="font-medium text-xl leading-10">Please provide a little information about you</span>
          <div className="flex gap-4">
            <div className="flex flex-col gap-2 w-6/12">
              <label className="text-GreenBgColor font-semibold">First Name</label>
              <InputBox
                placeholder="First Name"
                autoComplete="off"
                className="p-0"
                customInputClass="px-2 py-[10px] text-[15px] rounded-md outline-none placeholder:text-md w-full"
              />
            </div>
            <div className="flex flex-col gap-2 w-6/12">
              <label className="text-GreenBgColor font-semibold">Last Name</label>
              <InputBox
                placeholder="Last Name"
                autoComplete="off"
                className="p-0"
                customInputClass="px-2 py-[10px] text-[15px] w-full rounded-md outline-none placeholder:text-md"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-GreenBgColor font-semibold">Email ID</label>
            <InputBox
              placeholder="Email ID"
              autoComplete="off"
              className="p-0"
              customInputClass="px-2 py-[10px] text-[15px] rounded-md outline-none placeholder:text-md w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-GreenBgColor font-semibold">Company Name</label>
            <InputBox
              placeholder="Company Name"
              autoComplete="off"
              className="p-0"
              customInputClass="px-2 py-[10px] text-[15px] rounded-md outline-none placeholder:text-md w-full"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-GreenBgColor font-semibold">Mobile Number</label>
            <div>
              <PhoneInput
                defaultCountry="ua"
                inputStyle={{ padding: "25px" }}
                inputClassName={"w-PhoneFiledSidebarWidth"}
                value={phone}
                onChange={(phone) => setPhone(phone)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-GreenBgColor font-semibold">Which Team is Most Relevant to your Enquiry</label>
            <Select
              options={ListOption?.map((institute) => ({
                label: institute.label,
                value: institute.value
              }))}
              placeholder="Select Institute"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="text-GreenBgColor font-semibold">Your Message</label>
            <div className="message">
              <textarea
                className={`border  border-grayColor block p-2.5 w-full text-sm md:text-xl rounded-lg  resize-none outline-none placeholder:text-lg `}
                placeholder="Enter your purpose..."
                rows={5}
              />
            </div>
          </div>
          <Button
            text="SUBMIT QUERY"
            className="bg-SubmitButtonColor text-white rounded-full font-medium w-2/6 p-2 ml-80 placeholder:text-md "
          />
        </form>
      </div>
    </div>
  )
}

export default SideBar
