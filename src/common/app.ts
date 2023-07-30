import express from "express";
import { InversifyExpressServer } from "inversify-express-utils";
import { DiContainer } from "../DiContainer";
import logger from "./logger";

const container = DiContainer.getContainer();
const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());

    app.use((req, res, next) => {
        logger.info(req.url);

        next()
    })
});

const app = server.build();

export default app;