export interface AuthStateInterface {
  user: UserInterface
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface GoogleSignInInterface {
  email: string
  username: string
  avatar: string
  isVerified: boolean
  googleId: string
}

export interface SignInResponseInterface {
  accessToken: string
  refreshToken: string
  token?: string
  user: UserInterface
}

export interface UserInterface {
  id: string
  googleId: string
  username: string
  email: string
  avatar: string
  password: string
  active: boolean
  role: string
  subscription: SubscriptionInterface
  vipStatus: boolean
  phone_number: string
  sms_otp: string
  sms_otp_created_at: string
  sms_otp_expires_at: string
  number_verified_at: string
  createdAt: string
  updatedAt: string
}

export interface SubscriptionInterface {
  id: string
  stripeSessionId: string
  stripeCustomerId: string
  stripeSubscriptionId: string
  subscriptionStatus: string
  paymentStatus: string
  plan: string
  price: string
  startedAt: string
  expiredAt: string
  createdAt: string
  userId: string
}

export interface GetResponseInterface {
  data: any
  message: string
  status: number
}

export interface PostResponseInterface extends GetResponseInterface {}

export interface PostPaginatedResponseInterface {
  count: number
  data: any
  limit: number
  nextPage: number | null
  page: number
  totalPage: number
}

export interface GetPaginatedResponseInterface {
  count: number
  data: any
  limit: number
  nextPage: number | null
  page: number
  totalPage: number
}

export interface UserAuthHook extends AuthStateInterface {
  refetchUser: () => void
  updateUserDetails: (obj: UserInterface) => void
  logoutUser: () => void
  loggedInUser: (obj: { access: string; refresh: string }) => void
}

export interface ChangePasswordInterface {
  currentPassword: string
  newPassword: string
}

export interface ReactSelectBoxInterface {
  label: string
  value: string
}

export interface ResetPasswordFormInterface {
  newPassword: string
  confirmPassword: string
}
