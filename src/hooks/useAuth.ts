import { URL } from "@configs/index"
import { AuthStateInterface, UserAuthHook, UserInterface } from "@interfaces/index"
import { verifyUser } from "@store/action/userVerify"
import { loggedIn, logout, updateUser } from "@store/slices/auth.slice"
import { deleteCookie, setCookie } from "@utils/cookies"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export const useUserAuth = (): UserAuthHook => {
  const state = useSelector((state: { auth: AuthStateInterface }) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const updateUserDetails = (obj: UserInterface) => dispatch(updateUser(obj))
  const refetchUser = () => dispatch(verifyUser() as any)

  const logoutUser = () => {
    dispatch(logout())
    deleteCookie("access_token")
    deleteCookie("refresh_token")
    localStorage.clear()
    navigate(URL.SIGN_IN)
  }

  const loggedInUser = ({ access, refresh }: { access: string; refresh: string }) => {
    dispatch(loggedIn())
    setCookie("access_token", access)
    refresh && setCookie("refresh_token", refresh)
  }

  return {
    ...state,
    refetchUser,
    updateUserDetails,
    logoutUser,
    loggedInUser
  }
}
