import { Response, Request, NextFunction } from 'express';
import * as model from '../models/user';

export async function read(_req: Request, res: Response, _next: NextFunction) {
  try {
    const users = await model.read()

    return res.status(200).json({ users });
  } catch (error) {
    return res.status(500).json({ message: 'Inside server error.' });
  }
}

export async function create(req: Request, res: Response, _next: NextFunction) {
  try {
    const { name, phone, gender, birthDate, married, departmentId, comments } = req.body

    const user = await model.create({ name, phone, gender, birthDate, married, departmentId, comments });

    return res.status(200).json({ user });
  } catch (error) {
    return res.status(500).json({ message: 'Inside server error.' });
  }
}
