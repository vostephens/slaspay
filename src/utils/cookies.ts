import Cookies from "js-cookie"

export const getCookie = (name: string) => {
  return Cookies.get(name)
}

export const setCookie = (name: string, value: any) => {
  Cookies.set(name, value, { expires: 365 * 10 })
}

export const deleteCookie = (name: string) => {
  Cookies.remove(name)
}
