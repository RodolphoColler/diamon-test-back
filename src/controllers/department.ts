import { Response, Request, NextFunction } from 'express';
import * as model from '../models/department';

export async function read(_req: Request, res: Response, _next: NextFunction) {
  try {
    const departments = await model.read()

    return res.status(200).json(departments);
  } catch (error) {
    return res.status(500).json({ message: 'Inside server error.' });
  }
}

export async function create(req: Request, res: Response, _next: NextFunction) {
  try {
    const { name } = req.body;

    const department = await model.create(name);

    return res.status(200).json({ department });
  } catch (error) {
    return res.status(500).json({ message: 'Inside server error.' });
  }
}
