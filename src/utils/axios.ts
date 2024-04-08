import axios, { AxiosError, AxiosResponse } from "axios"
import { getToken } from "./getToken"
import toast from "react-hot-toast"
import { SERVER_BASE_URL } from "@configs/index"
import { GetResponseInterface } from "@interfaces/index"

const http = axios.create({
  baseURL: SERVER_BASE_URL,
  timeout: 30000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
})

http.interceptors.request.use(
  (config: any) => {
    const token = getToken()

    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`
    }
    return config
  },
  (error: AxiosError) => error.response
)

http.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse<GetResponseInterface, AxiosError> => response.data,
  (error: AxiosError | any) => {
    if (error.response && error.response.data) {
      const errorMessage = error.response.data.message || "An unknown error occurred"
      toast.error(errorMessage)
    } else {
      toast.error("Network error or server is unreachable")
    }
    return error.response
  }
)

export const fetchRequest = async ({
  url,
  type = "get",
  body,
  query,
  token
}: {
  url: string
  type?: string
  body?: any
  query?: any
  token?: any
}) => {
  let res
  const config = token ? { Authorization: `Bearer ${token}` } : {}

  switch (type) {
    case "get":
      res = await http.get(url, { params: { ...query }, ...config })
      break
    case "post":
      res = await http.post(url, body, { params: { ...query }, ...config })
      break
    case "patch":
      res = await http.patch(url, body, { params: { ...query } })
      break
    case "delete":
      res = await http.delete(url)
      break
    default:
      throw new Error(`Invalid request type: ${type}`)
  }
  return res
}

export default http
