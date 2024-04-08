import React from "react"
import { Data } from "./Data"

const ExchangeRate = () => {
  return (
    <div className="bg-emerald-100 rounded-md flex flex-col gap-3 px-4 py-4">
      <span className="text-2xl font-semibold">Exchange Rate</span>
      {Data.map((item) => {
        return (
          <div className="shadow-md rounded-md bg-white flex justify-between p-4">
            <p className="flex flex-col gap-2">
              <span>Currency</span>
              <span className="text-OrangeTextColor font-semibold">{item.currency}</span>
            </p>
            <p className="flex flex-col gap-2">
              <span>Current Rate</span>
              <span className="text-GreenBgColor font-semibold">{item.current_rate}</span>
            </p>
            <p>
              <span className="text-green-600 font-semibold">{item.flow}</span>
            </p>
          </div>
        )
      })}
    </div>
  )
}

export default ExchangeRate
