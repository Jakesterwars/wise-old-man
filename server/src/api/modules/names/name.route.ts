import { Router } from 'express';
import * as controller from './name.controller';
import * as validator from './name.validator';

const api = Router();

api.get('/', controller.index);
api.post('/', validator.submit, controller.submit);
api.get('/:id', validator.details, controller.details);
api.post('/:id/refresh', validator.refresh, controller.refresh);
api.post('/:id/approve', controller.approve);
api.post('/:id/deny', validator.deny, controller.deny);

export default api;
