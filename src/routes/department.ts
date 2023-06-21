import { Router } from 'express';
import * as controllers from '../controllers/department';
import validateCreate from '../middlewares/validateDepartment';

const router = Router();

router.post('/', validateCreate, controllers.create);

router.get('/', controllers.read);

export default router;