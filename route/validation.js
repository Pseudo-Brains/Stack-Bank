const Joi = require("joi");
// const phNo = Joi.extend(require("joi-phone-number"))

const registerValidation = (data) => {
  const Schema = Joi.object({
    FirstName: Joi.string().min(6).required(),
    LastName: Joi.string().min(6).required(),
    Email: Joi.string()
      .min(6)
      .required()
      .email({ tlds: { allow: ["com", "net"] } })
      .regex(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/),
    Password: Joi.string().min(6).required(),
    // Phone: phNo.
  });
  return Schema.validate(data);
};

module.exports.registerValidation = registerValidation;


const loginValidation = data =>{
  const Schema = Joi.on
}