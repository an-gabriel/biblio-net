import { Container } from "inversify";
import { HelloController } from "./controllers/hello.controller";

export class DiContainer {
    private static container: Container;

    public static getContainer(): Container {
        if (!this.container) {
            this.container = new Container();
            this.registerControllers();
        }
        return this.container;
    }

    private static registerControllers(): void {
        this.container.bind<HelloController>(HelloController).toSelf();
        // Adicione aqui outras classes de controle se necessário

    }
}
