import JoiBase from 'joi';
import JoiDate from '@joi/date';

const Joi = JoiBase.extend(JoiDate);

const userSchema = Joi.object({
  name: Joi.string().empty().required().max(30),
  phone: Joi.string().min(15).max(15).regex(/(\([0-9]{2}\)\s[0-9]{4,5}-?[0-9]{3,4})/),
  gender: Joi.string().regex(/Feminino|Masculino/),
  birthDate: Joi.date().required(),
  married: Joi.boolean().required(),
  departmentId: Joi.number().required().integer().min(1),
  comments: Joi.string().empty().required()
});

export default userSchema;
