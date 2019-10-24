import { Router } from 'express';

import SessionController from './app/controllers/SessionController';
import StudentController from './app/controllers/StudentController';

const routes = new Router();

// SESSION
routes.post('/sessions', SessionController.store);

// STUDENT
routes.get('/students', StudentController.index);
routes.post('/students', StudentController.store);

export default routes;
