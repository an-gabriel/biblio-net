import 'dotenv/config';
import express from 'express';

import '../database.connect';

import { InversifyExpressServer } from 'inversify-express-utils';

import logger from './logger';
import { DiContainer } from '../di.container';
import { AuthMiddleware } from '../middleware/auth.middleware';

const container = DiContainer.getContainer();
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
  const authMiddleware = new AuthMiddleware();
  app.use((req, res, next) => {
    logger.info(req.url);
    next();
  }, authMiddleware.validateToken.bind(authMiddleware));
  app.use(express.json());
});

const app = server.build();

export default app;
