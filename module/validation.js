const Joi = require("joi");
// const phNo = Joi.extend(require("joi-phone-number"))

const registerValidation = (data) => {
  const Schema = Joi.object({
    firstname: Joi.string().min(6),
    lastname: Joi.string().min(6),
    password: Joi.string().min(6),
    email: Joi.string()
      .min(6)
      .required()
      .email({ tlds: { allow: ["com", "net"] } })
      .regex(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/),
    phone: Joi.string()
      .min(10)
      .pattern(/^[0-9]+$/),
    // accountNumber: Joi.string().min(),
    // Phone: phNo.
  });
  return Schema.validate(data);
};

const loginValidation = (data) => {
  const Schema = Joi.object({
    Email: Joi.string()
      .min(6)
      .required()
      .email({ tlds: { allow: ["com", "net"] } })
      .regex(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/),
    Password: Joi.string().min(6).required(),
  });
};

module.exports = {
  registerValidation: registerValidation,
  loginValidation: loginValidation,
};
