import { Request, Response, NextFunction } from 'express';
import userSchema from '../schemas/userSchema';

export default function validateCreate(req: Request, res: Response, next: NextFunction) {
  const { name, phone, gender, birthDate, married, departmentId, comments } = req.body;

  const { error } = userSchema.validate({ name, phone, gender, birthDate, married, departmentId, comments });

  if (error) return res.status(400).json({ message: error.message });

  return next();
}
