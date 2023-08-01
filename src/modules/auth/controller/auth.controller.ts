// auth.controller.ts
import { Request, Response } from 'express';
import { controller, httpPost } from 'inversify-express-utils';
import jwt from 'jsonwebtoken';

import { PathRoutes } from '../../../enum/path-routes';

@controller(PathRoutes.AUTH)
export class AuthController {
  private readonly SECRET_KEY = process.env.PRIVATE_KEY ?? '';

  @httpPost(PathRoutes.LOGIN)
  public login(req: Request, res: Response) {
    const { username, password } = req.body;

    // fake validation - need to implement validation via database afterwards
    if (username === 'usuario' && password === 'senha123') {
      const token = jwt.sign({ username }, this.SECRET_KEY, {
        expiresIn: '1h',
      });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'invalid credentials' });
    }
  }

  @httpPost(PathRoutes.LOGOUT)
  public logout(req: Request, res: Response) {
    res.status(200).send({ auth: false, token: null });
  }
}
