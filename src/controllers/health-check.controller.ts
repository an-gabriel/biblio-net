import { Request, Response } from "express";
import { controller, httpGet } from "inversify-express-utils";

@controller("/health-check")
export class HealthCheckController {
    @httpGet("/")
    public index(req: Request, res: Response) {
        const healthCheck = {
            uptime: process.uptime(),
            message: "ON",
            timestamp: Date.now(),
        }
        res.send(healthCheck);
    }
}
