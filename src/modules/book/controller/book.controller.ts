import { Request, Response } from "express";
import { controller, httpDelete, httpGet, httpPost, httpPut } from "inversify-express-utils";
import { PathRoutes } from "../../../enum/path-routes";
import books from "../models/book";

@controller(PathRoutes.BOOK)
export class BookController {
    @httpGet(PathRoutes.DEFAULT)
    public async listBook(req: Request, res: Response) {
        try {
            const bookResult = await books.find()
            res.status(200).json(bookResult)
        } catch (error) {
            res.status(500).send({ messagem: (error as Error).message })
        }
    }

    @httpPost(PathRoutes.CREATE)
    public async createBook(req: Request, res: Response) {
        try {
            const book = new books(req.body);
            await book.save();

            res.status(200).json(book.toJSON())
        } catch (error) {
            res.status(500).send({ messagem: (error as Error).message })
        }
    }

    @httpPut(`${PathRoutes.UPDATE}/:id`)
    public async updateBook(req: Request, res: Response) {
        try {
            const { id } = req.params;

            await books.findByIdAndUpdate(
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
    public async deleteBook(req: Request, res: Response) {
        console.log('oi')
        try {
            const { id } = req.params;

            const book = await books.findById(id)
            const IsExistsBook = !book

            if (IsExistsBook) {
                return res.status(404).json({ message: `the requested record does not exist` })
            }

            await books.findByIdAndDelete(id)

            res.status(200).json({ message: `record ${id} deleted` })
        } catch (error) {
            res.status(500).send({ messagem: (error as Error).message })
        }
    }
}
