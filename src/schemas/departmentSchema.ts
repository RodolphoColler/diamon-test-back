import Joi from 'joi';

const departmentSchema = Joi.object({
  name: Joi.string().empty().required(),
});

export default departmentSchema;