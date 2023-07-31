import { Request, Response } from "express";
import { controller, httpGet, httpPatch, httpPost } from "inversify-express-utils";
import { PathRoutes } from "../../../enum/path-routes";
import books from "../models/book";

interface Book {
    id: string,
    name: string
}

@controller(PathRoutes.BOOK)
export class BookController {
    @httpGet(PathRoutes.DEFAULT)
    public async listBook(req: Request, res: Response) {
        try {
            const booksResult = await books.find()
            res.status(200).json(booksResult)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    @httpPost(PathRoutes.CREATE)
    public async createBook(req: Request, res: Response) {
        try {
            const booksResult = await books.find()
            res.status(200).json(booksResult)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    @httpPatch(PathRoutes.UPDATE)
    public async updateBook(req: Request, res: Response) {
        try {
            const booksResult = await books.updateOne()
            res.status(200).json(booksResult)
        } catch (error) {
            res.status(500).json(error)
        }
    }

    @httpPatch(PathRoutes.DELETE)
    public async deleteBook(req: Request, res: Response) {
        try {
            const booksResult = await books.updateOne()
            res.status(200).json(booksResult)
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
