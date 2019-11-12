import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import MembershipController from './app/controllers/MembershipController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// SESSION
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// STUDENT
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

// MEMBERSHIP
routes.get('/membership', MembershipController.index);

export default routes;
