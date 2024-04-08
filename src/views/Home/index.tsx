import React from "react"
import Button from "@components/Common/Button"
import CountBar from "@components/CountBar"
import TagButton from "@components/TagButton"
import FeatureSection from "@components/Home/FeatureSection"
import ExploreSection from "@components/Home/ExploreSction"
import AccordionFAQ from "@components/FAQs/AccordionFAQ"
import StartChat from "@components/Home/StartChat"
import GoogleSection from "@components/Home/GoogleSection"
import { FaArrowRight } from "react-icons/fa6";

const Home = () => {
  return (
    <>
      <div className="w-full">
        <div className="w-10/12 mx-auto flex gap-12 mb-8">
          <img src="assets/images/Home/Capture.PNG" className="w-6/12 h-[450px]" alt="Banner" />
          <div className="flex flex-col gap-4 pt-8 w-3/5">
            <span className="text-4xl leading-headingLineHeight font-bold w-2/3">
              Experience a payment solution for seamless property transactions across continents.
            </span>
            <p className=" text-sm font-semibold leading-6  w-3/4">
              <span className="font-bold"> Welcome to SlasPay! </span>Sign up, download the app, and experience seamless
              cross-border transactions. Redefine the way you transact -
              <span className="text-OrangeTextColor font-medium"> START TODAY!</span>
            </p>
            <Button text="Get Started" icon={<FaArrowRight className="text-white inline text-2xl font-medium rounded-md"/>} className="bg-GreenBgColor p-4 text-2xl font-medium text-white w-2/5 mt-8 rounded-lg" />
          </div>
        </div>
        <CountBar />
      </div>
      <div className="w-10/12 mx-auto">
        <TagButton text="About Us" className="my-8" />
        <div className="flex w-full gap-7 mb-12">
          <div className="flex flex-col w-6/12 gap-3">
            <span className="font-bold text-xl leading-10">
              Revolutionize Global Transactions With Slaspay! Speed, Security, And Simplicity In One Fintech Solution.
            </span>
            <span className="font-bold text-xl">Welcome To The Future - This is Slaspay !</span>
            <img src="assets/images/Home/videoPic.PNG" alt="assetsCapture" />
          </div>
          <div className="flex flex-col w-6/12 gap-6">
            <div className="drop-shadow-2xl p-4 bg-white w-4/5 mx-auto rounded-lg hover:border-l-8 hover:border-GreenBgColor hover:scale-x-110 transition duration-300 ease-in-out">
              <span className="font-bold leading-8">Speed and Efficiency Redefined</span>
              <p className="text-sm text-left">
                Empower your transactions with SlasPay - instant, seamless cross- border payment. No delays, just
                efficiency and innovation{" "}
              </p>
            </div>
            <div className="drop-shadow-2xl p-4 bg-white w-4/5 mx-auto rounded-lg hover:border-l-8 hover:border-GreenBgColor hover:scale-x-110 transition duration-300 ease-in-out">
              <span className="font-bold  leading-8">Affordable Access Anytime, Anywhere</span>
              <p className="text-sm text-left">
                Gain financial freedom with SlasPay - affordable, mobile-friendly, and always accessible. Your finance,
                your way!{" "}
              </p>
            </div>
            <div className="drop-shadow-2xl p-4 bg-white w-4/5 mx-auto rounded-lg hover:border-l-8 hover:border-GreenBgColor hover:scale-x-110 transition duration-300 ease-in-out">
              <span className="font-bold leading-8">Secure and Liberating Financial Experience</span>
              <p className="text-sm text-left">
                SlasPay: Ensuring your financial security and freedom with cutting - edge features for hassie-free
                transactions.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
      <FeatureSection />
      <StartChat />
      <ExploreSection />
      <GoogleSection />
      <div className="w-full">
        <div className="w-10/12 mx-auto">
          <TagButton text="FAQ" className="block mx-auto px-4 mb-4" />
          <p className="text-2xl font-semibold mx-auto text-center w-9/12">
            Discover worry-free transactions with SlasPay FAQs - yourr guide to a seamless financial journey.
          </p>
          <AccordionFAQ />
        </div>
      </div>
    </>
  )
}

export default Home
