import * as express from 'express';
import awaitHandlerFactory from '../../../middleware/awaitHandler.service';
import usersController from './users.controller';

const router = express.Router();

router.get(
  '/',
  awaitHandlerFactory(usersController.find),
);

router.post(
  '/',
  awaitHandlerFactory(usersController.create),
);

export default router;