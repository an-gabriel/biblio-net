import "reflect-metadata";

import express from "express";
import { InversifyExpressServer, next } from "inversify-express-utils";
import container from "./inversify.container";
import { HelloController } from "./controllers/hello.controller";
import logger from "./common/logger";

const server = new InversifyExpressServer(container);

server.setConfig((app) => {
    app.use(express.json());

    app.use((req, res, next) => {
        logger.info(req.url);

        next()
    })
});

const app = server.build();

container.bind<HelloController>(HelloController).toSelf();

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000...");
});
