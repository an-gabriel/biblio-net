import { Container } from "inversify";
import { HelloController } from "./modules/base/controller/hello.controller";
import { HealthCheckController } from "./modules/health-check/controller/health-check.controller";
import { AuthController } from "./modules/auth/controller/auth.controller";
import { BookController } from "./modules/book/controller/book.controller";
import { AuthorController } from "./modules/author/controller/author.controller";
import BookStockService from "./modules/book-stock/service/book-stock.service";

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
        this.container.bind<BookController>(BookController).toSelf();
        this.container.bind<AuthorController>(AuthorController).toSelf();
        this.container.bind<BookStockService>(BookStockService).toSelf();
    }
}
