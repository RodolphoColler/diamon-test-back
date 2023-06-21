import { Router } from 'express';
import validateCreate from '../middlewares/validateUser';
import * as controllers from '../controllers/user';

const router = Router();

router.post('/', validateCreate, controllers.create);

router.get('/', controllers.read);

export default router;
