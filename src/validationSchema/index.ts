import { yupResolver } from "@hookform/resolvers/yup"
import * as Yup from "yup"

export const SignInSchema = yupResolver(
  Yup.object().shape({
    email: Yup.string().required("Field is Required *").email(),
    password: Yup.string().required("Field is Required *").min(8, "Min 8 Characters !")
  })
)

export const SignUpSchema = yupResolver(
  Yup.object().shape({
    email: Yup.string().required("Field is Required *").email(),
    username: Yup.string().required("Field is Required *"),
    phone_number: Yup.string().required("Field is Required *"),
    password: Yup.string().required("Field is Required *").min(8, "Min 8 Characters !")
  })
)

export const ForgotPasswordSchema = yupResolver(
  Yup.object().shape({
    email: Yup.string().required("Field is Required *").email()
  })
)

export const ResetPasswordSchema = Yup.object().shape({
  newPassword: Yup.string().required("Field is Required *").min(8, "Password must contain min 8 Characters"),
  confirmPassword: Yup.string()
    .required("Field is Required *")
    .min(8, "Password must contain min 8 Characters")
    .test("passwords-match", "Passwords do not match", function (value) {
      return this.parent.newPassword === value
    })
})
