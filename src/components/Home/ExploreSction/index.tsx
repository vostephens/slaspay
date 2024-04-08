import React from "react"
import Button from "@components/Common/Button"
import { FaArrowRight } from "react-icons/fa6"

const ExploreSection = () => {
  return (
    <div className="w-full my-12">
      <div className="w-10/12 mx-auto flex justify-between">
        <div className="flex flex-col gap-4 py-8 w-6/12">
          <span className="text-4xl leading-headingLineHeight font-bold w-4/5">
            Explore our current job openings and start your journey
          </span>
          <p className="text-base font-normal leading-8 w-5/6">
            Are you ready to embark on a fulfilling career journey? at <span className="font-medium">Slas</span>
            <span className="text-OrangeTextColor font-medium">Pay</span>, we believe in fostering talent, creativity, and innovation. Join our dynamic team, where your skills are valued and aspirations are supported.
          </p>
          <Button text="Join Us"  icon={<FaArrowRight className="inline"/>} className="rounded-md bg-GreenBgColor py-4 px-4 font-xl font-medium text-white w-3/12 mt-8" />
        </div>
        <img src="assets/images/Home/explore.PNG" className="w-5/12" alt="Banner" />
      </div>
    </div>
  )
}

export default ExploreSection
