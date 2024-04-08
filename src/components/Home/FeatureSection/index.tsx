import React from "react"
import TagButton from "@components/TagButton"
import { AiOutlineGlobal } from "react-icons/ai"
import { MdOutlineSecurity } from "react-icons/md"
import { GrCurrency } from "react-icons/gr"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import "./style.css"
import { Pagination } from "swiper/modules"

const FeatureSection = () => {
  return (
    <div className="w-full bg-TagBGgray py-12">
      <div className="w-10/12 mx-auto">
        <TagButton text="Features" className="block bg-white mb-4" />
        <span className="text-3xl font-bold leading-10">Unlock the power of SlasPay</span>
        <p className="text-lg mb-4 ">
          Discover the essence of SlasPay, seamless cross-border transactions, speed, affordability, and security.
          Explore the features that redefine your financial experience
        </p>
        <Swiper pagination={true} modules={[Pagination]} className="mySwiper" slidesPerView={2.5} spaceBetween={30}>
          <SwiperSlide className="rounded-lg">
            <div className=" p-6 bg-white rounded-lg ">
              <span className="font-bold flex items-center">
                {" "}
                <AiOutlineGlobal className="inline mr-2 text-xl" />
                Global Transactions
              </span>
              <p className="text-left">Seamlessly conduct cross-border payments, connecting you to a world of financial possibilities.</p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            <div className=" p-6 bg-white rounded-lg">
              <span className="font-bold flex items-center">
                <GrCurrency className="inline mr-2 text-xl" />
                Stellar Performance
              </span>
              <p className="text-left">Experience swift and efficient financial transactions that redefine the speed of payments. </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            {" "}
            <div className=" p-6 bg-white rounded-lg">
              <span className="font-bold flex items-center">
                <MdOutlineSecurity className="inline mr-2 text-xl" />
                Ironclad Security
              </span>
              <p className="text-left">
                Trust in our robust security measures to safeguard every Transaction, ensuring your financial peace of
                mind.{" "}
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="rounded-lg">
            {" "}
            <div className="p-6 bg-white rounded-lg">
              <span className="font-bold flex items-center">
                <MdOutlineSecurity className="inline mr-2 text-xl" />
                Ironclad Security
              </span>
              <p className="text-left">
                Trust in our robust security measures to safeguard every Transaction, ensuring your financial peace of
                mind.{" "}
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default FeatureSection
