import 'dotenv/config'
require('dotenv').config();
import express from "express";

import { InversifyExpressServer } from "inversify-express-utils";
import { DiContainer } from "../di.container";
import logger from "./logger";
import { AuthMiddleware } from '../middleware.ts/auth.middleware';

const container = DiContainer.getContainer();
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());

    const authMiddleware = new AuthMiddleware();
    app.use((req, res, next) => {
        logger.info(req.url);

        next()
    }, authMiddleware.validateToken.bind(authMiddleware))
});

const app = server.build();

export default app;