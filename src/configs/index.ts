/* --- Application Constants --- */
export const SERVER_BASE_URL = process.env.REACT_APP_SERVER_BASE || ""
export const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID || ""
export const CLOUDINARY_NAME = process.env.REACT_APP_CLOUDINARY_NAME || ""
export const AWS_ACCESS_KEY_ID = process.env.REACT_APP_AWS_ACCESS_KEY_ID || ""
export const AWS_SECRET_ACCESS_KEY = process.env.REACT_APP_AWS_SECRET_ACCESS_KEY || ""
export const AWS_REGION = process.env.REACT_APP_AWS_REGION || ""
export const AWS_S3_BUCKET = process.env.REACT_APP_AWS_S3_BUCKET || ""

/* --- App Router Endpoints --- */
export const URL = {
  HOME: "/",
  ABOUT: "/about",
  BUSINESS: "/business",
  CONTACT: "/contact",
  FAQ: "/faq",
  FEATURES: "/features",
  SIGN_IN: "/sign-in",
  SIGN_UP: "/sign-up",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
  DASHBOARD: "/dashboard",
  OTP: "/otp",
  CURRENCY: "/currency",
  CURRENCY_CONVERSION: "/currency-conversion",
}

/* --- HTTP Request Methods --- */
export const HTTP_METHODS = {
  GET: "get",
  POST: "post",
  PATCH: "patch",
  DELETE: "delete"
}

/* --- HTTP Status Codes --- */
export const HTTP_STATUS_CODES = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  RESOURCE_NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500
}
