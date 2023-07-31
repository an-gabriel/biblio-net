import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";
import { PathRoutes } from "../enum/path-routes";

@controller(PathRoutes.HELLO_WORLD)
export class HelloController {
    @httpGet(PathRoutes.DEFAULT)
    public index(req: Request, res: Response) {
        res.send("Hello, world");
    }
}
