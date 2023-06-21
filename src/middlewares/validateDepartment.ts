import { Request, Response, NextFunction } from 'express';
import departmentSchema from '../schemas/departmentSchema';

export default function validateCreate(req: Request, res: Response, next: NextFunction) {
  const { name } = req.body;

  const { error } = departmentSchema.validate({ name });

  if (error) return res.status(400).json({ message: error.message });

  return next();
}
