import "reflect-metadata";

import container from "./inversify.container";
import { HelloController } from "./controllers/hello.controller";
import app from './common/app'

container.bind<HelloController>(HelloController).toSelf();

app.listen(3000, () => {
    console.log("Servidor ouvindo na porta 3000...");
});
