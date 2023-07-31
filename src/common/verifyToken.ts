import { Request, Response, NextFunction } from "express";
var jwt = require('jsonwebtoken');

const secret = process.env.SECRET_KEY

function verifyJWT(req: Request, res: Response, next: NextFunction) {
    var token = req.headers['x-access-token'];
    if (!token)
        return res.status(401).send({ auth: false, message: 'Token não informado.' });

    jwt.verify(token, secret, (err: Error, decoded: any) => {
        if (err)
            return res.status(500).send({ auth: false, message: 'Token inválido.' });

        next();
    });
}   