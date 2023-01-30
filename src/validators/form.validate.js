import * as yup from "yup";

export const emailSchema = yup.object({
  email: yup.string().required().email("Require valid email"),
});

export const passcodeSchema = yup.object({
  passcode: yup
    .string()
    .required("Passcode is Required")
    .length(5, "Passcode must be 5 digits"),
});

export const passwordSchema = yup.object({
  password: yup.string().required("Password field is required").min(8),
  confirmPassword: yup
    .string()
    .required()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

export const loginSchema = yup.object({
  email: yup.string().required().email("Require valid email"),
  password: yup.string().required("Password field is required"),
});
