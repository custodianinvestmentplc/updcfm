const Joi = require("joi");
import * as yup from "yup";

// const validator = (schema) => (payload) =>
//   schema.validate(payload, { abortEarly: false });

export const EmailSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
});

// const emailValidator = validator(EmailSchema);

export const emailValidate = yup.object({
  email: yup.string().required().email("Require valid email"),
});

// export default EmailSchema;
