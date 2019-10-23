import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

// SESSION
routes.post('/sessions', SessionController.store);

// STUDENT
routes.get('/students');

export default routes;
