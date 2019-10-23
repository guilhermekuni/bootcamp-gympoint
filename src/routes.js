import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

const routes = new Router();

// SESSION
routes.post('/sessions', SessionController.store);

export default routes;
