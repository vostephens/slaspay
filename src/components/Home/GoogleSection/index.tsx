import React from "react"

const GoogleSection = () => {
  return (
    <div className=" bg-MobileImageBgColor mt-20 mb-8 py-4">
      <div className=" flex w-10/12 mx-auto justify-between">
        <img src="assets/images/Home/mobile.PNG" className="-mt-28 w-2/5" alt="Banner" />
        <div className="py-40 w-6/12 flex flex-col items-end">
          <span className="text-5xl font-bold text-white">Download Our App Now</span>
          <div className="flex gap-4 items-center mt-6 w-full">
            <img src="assets/images/Home/google.PNG" className="w-6/12" alt="Banner" />
            <img src="assets/images/Home/app.PNG" className="w-6/12" alt="Banner" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default GoogleSection
