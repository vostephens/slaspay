import { SubscriptionInterface, UserInterface } from "@interfaces/index"

export const SUBSCRIPTION: SubscriptionInterface = {
  id: "",
  stripeSessionId: "",
  stripeCustomerId: "",
  stripeSubscriptionId: "",
  subscriptionStatus: "",
  paymentStatus: "",
  plan: "",
  price: "",
  startedAt: "",
  expiredAt: "",
  createdAt: "",
  userId: ""
}

export const USER_DATA: UserInterface = {
  id: "",
  googleId: "",
  username: "",
  email: "",
  avatar: "",
  password: "",
  active: false,
  role: "",
  subscription: SUBSCRIPTION,
  vipStatus: false,
  phone_number: "",
  sms_otp: "",
  sms_otp_created_at: "",
  sms_otp_expires_at: "",
  number_verified_at: "",
  createdAt: "",
  updatedAt: ""
}
