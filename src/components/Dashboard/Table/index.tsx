import React, { useState } from "react"
import { GoDotFill } from "react-icons/go"
import DataTable from "react-data-table-component"
import { TableData } from "./Data"

const DashboardTable = () => {
  const [tableData, setTableData] = useState(TableData)

  const handleSortRecent = () => {
    const sortedData = [...tableData].sort((a, b) => new Date(b.date) - new Date(a.date));
    setTableData(sortedData);
    console.log("tableData",tableData)
  };

  const handleSortOldest = () => {
    const sortedData = [...tableData].sort((a, b) => new Date(a.date) - new Date(b.date));
    setTableData(sortedData);
  };

  return (
    <div className="border rounded border-gray-400 p-3">
      <div className="flex justify-between my-2">
        <span className="text-xl font-medium">Recent Transactions</span>
        <div className="flex gap-4 items-center">
          <span
            className="font-normal hover:font-bold hover:border-b-2 hover:border-SubmitButtonColor cursor-pointer"
            onClick={handleSortRecent}
          >
            Recent
          </span>
          <span
            className="font-normal hover:font-bold hover:border-b-2 hover:border-SubmitButtonColor cursor-pointer"
            onClick={handleSortOldest}
          >
            Oldest
          </span>
          <span className="font-normal hover:font-bold hover:border-b-2 hover:border-SubmitButtonColor">More</span>
        </div>
      </div>
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="py-2 text-left font-medium">Transaction</th>
            <th className="py-2 px-4 text-left font-medium">Date</th>
            <th className="py-2 px-4 text-left font-medium">Time</th>
            <th className="py-2 px-4 text-left font-medium">Amount</th>
            <th className="py-2 px-4 text-left font-medium">State</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr key={index}>
              <td className="py-2 font-medium text-sm">
                {item.Transaction}
                <span className="block text-xs text-[#bfb9b9]">Youtube Plan</span>
              </td>
              <td className="py-2 px-4 font-medium text-sm">{item.date}</td>
              <td className="py-2 px-4 font-medium text-sm">{item.time}</td>
              <td className="py-2 px-4 font-medium text-sm">{item.amount}</td>
              <td
                className={`py-2 px-4 font-medium text-sm ${item.status === "Completed" ? "text-SubmitButtonColor" : "text-red-600"}`}
              >
                <GoDotFill className={`text-SubmitButtonColor text-xl inline items-center gap-2 ${item.status === "Completed" ? "text-SubmitButtonColor" : "text-red-600"}`} />
                {item.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DashboardTable
