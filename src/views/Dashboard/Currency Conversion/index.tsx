import React, { useState } from "react"
import CurrencyLineChart from "@components/LineChart"
import ConversionAmount from "@components/Dashboard/CurrencyConversion"
import ConversionTable from "@components/Dashboard/CurrencyConversion/Table"

const currencyData = [
  { month: "Jan", currency1: 500, currency2: 600 },
  { month: "Feb", currency1: 550, currency2: 620 },
  { month: "Mar", currency1: 600, currency2: 640 },
  { month: "Apr", currency1: 620, currency2: 670 },
  { month: "May", currency1: 650, currency2: 690 },
  { month: "Jun", currency1: 700, currency2: 720 },
  { month: "Jul", currency1: 750, currency2: 740 }
]

const CurrencyGraph = () => {
  const [showTable, setShowTable] = useState(false)

  const handleButtonClick = () => {
    console.log("click button")
    setShowTable(!showTable)
  }

  return (
    <div>
      <div className="flex gap-4 p-4">
        <ConversionAmount onButtonClick={handleButtonClick} />
        {showTable ? (
          <ConversionTable />
        ) : (
          <div className="flex p-2 flex-col gap-4 rounded-lg w-8/12 border border-gray-200">
            <div className="">
              <div className="flex justify-between">
                <span className="text-xl font-medium">Currency Tracking </span>
              </div>
              <CurrencyLineChart data={currencyData} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CurrencyGraph
