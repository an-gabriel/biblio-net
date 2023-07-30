import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";

@controller("/hello")
export class HelloController {
    @httpGet("/")
    public index(req: Request, res: Response) {
        res.send("Hello, world");
    }
}
