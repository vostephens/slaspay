import React from "react"
import Navbar from "@components/Dashboard/Navbar"
import DashboardSidebar from "@components/Dashboard/DashboardSidebar"
import "react-toastify/dist/ReactToastify.css"

interface LayoutProps {
  children: React.ReactNode
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <main id="main" className="flex">
      <DashboardSidebar />
      <div className="flex flex-col w-full">
      <Navbar />
      <div>{children}</div>
      </div>
    </main>
  )
}

export default MainLayout
