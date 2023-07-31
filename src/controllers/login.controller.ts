import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";

@controller("/login")
export class LoginController {
    @httpGet("/")
    public index(req: Request, res: Response) {
        res.send("usuario e senha");
    }
}
