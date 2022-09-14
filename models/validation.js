const Joi = require("joi");
<<<<<<< HEAD
const RegisterValidation = (data) => {
  const Schema = Joi.object({
    firstname: Joi.string().min(2).max(20).required(),
    lastname: Joi.string().min(2).max(20).required(),
    email: Joi.string()
      .min(6)
      .required()
      .email()
      .regex(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/),
    password: Joi.string().min(6).required(),
    dateOfBirth: Joi.date().raw().required(),
    accountNumber: Joi.string().min(2).max(20),
    phone: Joi.number().integer(),
  });
  // return Schema.validate(data, (err,value)=>{
  // if (err) {
  // return err
  // }
  // return null
  // })
  return Schema.validate(data);
};
=======
>>>>>>> 6a07e755ef0e86fbfc1b9c46edcf45ace9045aa9

const loginValidation = data =>{
  const Schema = Joi.object({
    email: Joi.string()
    .min(6)
    .required()
    .email()
    .regex(/^[a-zA-Z0-9_][a-zA-Z0-9_.]*/),
    password: Joi.string().min(6).required(),
  });
<<<<<<< HEAD
  return Schema.validate(data);
};
=======
  return Schema.validate(data,{abortEarly:false})
}
>>>>>>> 6a07e755ef0e86fbfc1b9c46edcf45ace9045aa9

module.exports = {loginValidation };