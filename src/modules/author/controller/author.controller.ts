import { Request, Response } from "express";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { PathRoutes } from "../../../enum/path-routes";
import authors from "../models/author";

@controller(PathRoutes.AUTHOR)
export class AuthorController {
    @httpGet(PathRoutes.DEFAULT)
    public async listAuthor(req: Request, res: Response) {
        try {
            const authorsResult = await authors.find()
            res.status(200).json(authorsResult)
        } catch (error) {
            res.status(500).send({ messagem: (error as Error).message })
        }
    }

    @httpPost(PathRoutes.CREATE)
    public async createAuthor(req: Request, res: Response) {
        try {
            const author = new authors(req.body);
            await author.save();

            res.status(200).json(author.toJSON())
        } catch (error) {
            res.status(500).send({ messagem: (error as Error).message })
        }
    }

    @httpPut(`${PathRoutes.UPDATE}/:id`)
    public async updateAuthor(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const authos = await authors.findByIdAndUpdate(
                id,
                {
                    $set: req.body
                });

            res.status(200).json({ message: 'Information has been changed' });
        } catch (error) {
            res.status(500).send({ messagem: (error as Error).message })
        }
    }

    @httpDelete(`${PathRoutes.DELETE}/:id`)
    public async deleteAuthor(req: Request, res: Response) {
        console.log('oi')
        try {
            const { id } = req.params;

            const author = await authors.findById(id)
            const IsExistsAuthor = !author

            if (IsExistsAuthor) {
                return res.status(404).json({ message: `the requested record does not exist` })
            }

            await authors.findByIdAndDelete(id)

            res.status(200).json({ message: `record ${id} deleted` })
        } catch (error) {
            res.status(500).send({ messagem: (error as Error).message })
        }
    }
}
