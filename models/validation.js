const Joi = require("joi");




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


module.exports = {loginValidation };