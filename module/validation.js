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




const loginValidation = data =>{
  const Schema = Joi.object({
    email: Joi.string()
    .min(6)
    .required()
    .email()
    .regex(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/),
    password: Joi.string().min(6).required(),
  });
  return Schema.validate(data,{abortEarly:false})
}


module.exports = {
registerValidation : registerValidation,
loginValidation :loginValidation
};