import React, { createContext } from "react"
import { createCtx } from "./Context"
import { getToken } from "@utils/getToken"
import { useUserAuth } from "@hooks/useAuth"

type PropsContextType = {}

export const [useProps, CtxProvider] = createCtx<PropsContextType>()

export const PropsContext = createContext<PropsContextType | undefined>(undefined)

export const PropsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const token = getToken()

  const { user, refetchUser } = useUserAuth()

  return <CtxProvider value={{}}>{children}</CtxProvider>
}

export default PropsProvider
