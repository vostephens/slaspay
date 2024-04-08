import React from "react"
import { DATA } from "./DATA"

const ConversionTable = () => {
  return (
    <div className="bg-DashboardBgColor rounded-lg w-full">
      {DATA.map((item: any, index) => {
         const isLastChild = index === DATA.length - 1;
        return (
          <div className={`p-4 flex my-1 justify-between border-b-2 ${isLastChild ? ' bg-green-300 rounded-lg'  : ''}`}>
            <span className="font-semibold">{item.name}</span>
            <span>{item.value}</span>
          </div>
        )
      })}
    </div>
  )
}

export default ConversionTable
