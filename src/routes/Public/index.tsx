import React, { useEffect } from "react"
import { URL } from "@configs/index"
import { useUserAuth } from "@hooks/useAuth"
import { getToken } from "@utils/getToken"
import { Outlet, useLocation, useNavigate } from "react-router"

const PublicRoute = () => {
  const { isAuthenticated, isLoading, refetchUser } = useUserAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const token = getToken()

  useEffect(() => {
    token && !isAuthenticated && refetchUser()
  }, [location.pathname])

  useEffect(() => {
    if (!isLoading && isAuthenticated && token) {
      navigate(URL.DASHBOARD)
    }
  }, [isAuthenticated, isLoading])

  return <>{isLoading || token ? "Loading..." : <Outlet />}</>
}

export default PublicRoute
