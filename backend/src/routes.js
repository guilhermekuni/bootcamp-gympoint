import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';
import MembershipController from './app/controllers/MembershipController';
import RegistrationController from './app/controllers/RegistrationController';
import CheckinController from './app/controllers/CheckinController';
import StudentHelpOrderController from './app/controllers/StudentHelpOrderController';
import HelpOrderController from './app/controllers/HelpOrderController';

import authMiddleware from './app/middlewares/auth';
import AnswerController from './app/controllers/AnswerController';

const routes = new Router();

// CHECKIN
routes.get('/students/:studentId/checkins', CheckinController.index);
routes.post('/students/:studentId/checkins', CheckinController.store);

// STUDENT  HELP ORDER
routes.get(
  '/students/:studentId/help-orders',
  StudentHelpOrderController.index
);
routes.post(
  '/students/:studentId/help-orders',
  StudentHelpOrderController.store
);

// SESSION
routes.post('/sessions', SessionController.store);

/* ==== ADMIN ENDPOINTS ==== */
routes.use(authMiddleware);

// STUDENT
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);
routes.put('/students/:id', StudentController.update);

// HELP ORDERS
routes.get('/help-orders', HelpOrderController.index);

// ANSWER
routes.post('/help-orders/:id/answer', AnswerController.store);

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
