import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import MembershipController from './app/controllers/MembershipController';
import RegistrationController from './app/controllers/RegistrationController';

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
routes.post('/membership', MembershipController.store);
routes.put('/membership/:id', MembershipController.update);
routes.delete('/membership/:id', MembershipController.delete);

// REGISTRATION
routes.get('/registration', RegistrationController.index);
routes.post('/registration', RegistrationController.store);

export default routes;
