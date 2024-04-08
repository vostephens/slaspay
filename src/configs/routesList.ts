import About from "@views/About"
import Business from "@views/Business"
import Contact from "@views/Contact"
import FAQ from "@views/FAQ"
import Home from "@views/Home"
import Features from "@views/Features"
import SignUp from "@views/Auth/SignUp"
import SignIn from "@views/Auth/SignIn"
import OTP from "@views/OTP"
import Dashboard from "@views/Dashboard"
import { URL } from "./index"
import CurrencyChange from "@components/Dashboard/CurrenecyChange"
import CurrencyGraph from "@views/Dashboard/Currency Conversion"

export const ROUTE_LIST = [
  {
    link: URL.SIGN_UP,
    element: SignUp,
    isLayout: false
  },
  {
    link: URL.SIGN_IN,
    element: SignIn,
    isLayout: false
  },
  {
    link: URL.OTP,
    element: OTP,
    isLayout: false
  },
  {
    link: URL.HOME,
    element: Home,
    isLayout: false
  },
  {
    link: URL.ABOUT,
    element: About,
    isLayout: false
  },
  {
    link: URL.BUSINESS,
    element: Business,
    isLayout: false
  },
  {
    link: URL.CONTACT,
    element: Contact,
    isLayout: false
  },
  {
    link: URL.FAQ,
    element: FAQ,
    isLayout: false
  },
  {
    link: URL.FEATURES,
    element: Features,
    isLayout: false
  },
  {
    link: URL.DASHBOARD,
    element: Dashboard,
    isLayout: true
  },
  {
    link: URL.CURRENCY_CONVERSION,
    element: CurrencyGraph,
    isLayout: true
  },
]
