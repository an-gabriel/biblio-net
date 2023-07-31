import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

import { PathRoutes } from "../enum/path-routes";

export class AuthMiddleware {
    private readonly SECRET_KEY: string;

    constructor() {
        this.SECRET_KEY = process.env.PRIVATE_KEY ?? "";
    }

    public validateToken(req: Request, res: Response, next: NextFunction) {
        const token = req.headers.authorization?.split(" ")[1];

        if (req.path === PathRoutes.HEALTH_CHECK) {
            next();
        }

        if (!token) {
            return res.status(401).json({ error: "not found Token " });
        }

        try {
            const decodedToken = jwt.verify(token, this.SECRET_KEY);
            req.user = decodedToken;

            next();
        } catch (error) {
            return res.status(401).json({ error: "invalid token" });
        }
    }
}
