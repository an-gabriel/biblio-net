import { Container } from "inversify";
import { HelloController } from "./controllers/hello.controller";
import { HealthCheckController } from "./controllers/health-check.controller";
import { AuthController } from "./controllers/auth.controller";

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
        this.container.bind<HealthCheckController>(HealthCheckController).toSelf();
        this.container.bind<AuthController>(AuthController).toSelf();
    }
}
