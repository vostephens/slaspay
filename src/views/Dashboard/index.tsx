import React from "react"
import DashboardSidebar from "@components/Dashboard/DashboardSidebar"
import Navbar from "@components/Dashboard/Navbar"
import CurrencyLineChart from "@components/LineChart"
import ExchangeRate from "@components/Dashboard/ExchangeRate"
import TransferMoney from "@components/Dashboard/TransferMoney"
import DashboardTable from "@components/Dashboard/Table"
import UpcomingPayment from "@components/Dashboard/UpcomingPayment"
import CurrencyChange from "@components/Dashboard/CurrenecyChange"
import { GoDotFill } from "react-icons/go"
import { IoIosArrowDown } from "react-icons/io"
import { SlCalender } from "react-icons/sl"

const currencyData = [
  { month: "Jan", currency1: 0, currency2: 3 },
  { month: "Feb", currency1: 2, currency2: 4 },
  { month: "Mar", currency1: 5, currency2: 6 },
  { month: "Apr", currency1: 4, currency2: 7 },
  { month: "May", currency1: 0, currency2: 8 },
  { month: "Jun", currency1: 5, currency2: 3 },
  { month: "Jul", currency1: 6, currency2: 4 }
]

const Dashboard = () => {
  return (
    <>
      <div className="flex gap-4 pt-4 pl-4 pr-4">
        <CurrencyChange />
        <div className="flex bg-sky-100 p-2 flex-col gap-4 rounded-lg w-8/12">
          <div className="flex justify-between">
            <span className="text-2xl font-bold">Currency Tracking </span>
            <div className="flex gap-4">
              <p className="flex items-center gap-2 bg-white rounded-md p-2">
                <GoDotFill className="text-blue-400" /> <span className="font-medium text-sm">USD</span>{" "}
                <IoIosArrowDown />
              </p>
              <p className="flex items-center gap-2 bg-white rounded-md p-2">
                <GoDotFill className="text-blue-400" /> <span className="font-medium text-sm">INR</span>{" "}
                <IoIosArrowDown />
              </p>
              <p className="flex items-center gap-2 bg-white rounded-md p-2">
                <SlCalender className="text-blue-400" /> <span className="font-medium text-sm">Jan-2024</span>{" "}
                <IoIosArrowDown />
              </p>
            </div>
          </div>
          <div className="">
            <CurrencyLineChart data={currencyData} />
          </div>
        </div>
      </div>

      <div className="flex gap-4 pt-4 px-4 ">
        <div className="w-3/5 flex flex-col gap-4"> 
          <UpcomingPayment />
          <DashboardTable />
        </div>
        <div className="w-2/5 flex flex-col gap-4">
          <TransferMoney />
          <ExchangeRate />
        </div>
      </div>
    </>
  )
}

export default Dashboard
