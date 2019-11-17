import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import MembershipController from './app/controllers/MembershipController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

// CHECKIN
routes.get('/students/:id/checkins', CheckinController.index);
routes.post('/students/:id/checkins', CheckinController.store);

// SESSION
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

// STUDENT
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

// MEMBERSHIP
routes.get('/memberships', MembershipController.index);
routes.post('/memberships', MembershipController.store);
routes.put('/memberships/:id', MembershipController.update);
routes.delete('/memberships/:id', MembershipController.delete);

// REGISTRATION
routes.get('/registrations', RegistrationController.index);
routes.post('/registrations', RegistrationController.store);
routes.put('/registrations/:id', RegistrationController.update);
routes.delete('/registrations/:id', RegistrationController.delete);

export default routes;
