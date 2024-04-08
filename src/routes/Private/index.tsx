import React, { useEffect } from "react"
import { URL } from "@configs/index"
import { useUserAuth } from "@hooks/useAuth"
import { getToken } from "@utils/getToken"
import { Outlet, useLocation, useNavigate } from "react-router-dom"

const PrivateRoute = () => {
  const { isAuthenticated, isLoading, refetchUser } = useUserAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const token = getToken()

  useEffect(() => {
    token && !isAuthenticated && refetchUser()
  }, [location.pathname])

  useEffect(() => {
    if (!isLoading && !token && !isAuthenticated) {
      navigate(URL.SIGN_IN)
    }
  }, [isAuthenticated, isLoading])

  return (
    <>
      {isAuthenticated && token ? (
        <>
          <Outlet />
        </>
      ) : (
        "Loading..."
      )}
    </>
  )
}

export default PrivateRoute
