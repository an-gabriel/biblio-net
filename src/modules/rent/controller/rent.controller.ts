import { Request, Response } from 'express';
import { controller, httpPost, httpPut } from 'inversify-express-utils';
import { PathRoutes } from '../../../enum/path-routes';
import books from '../../book/models/book';
import booksStock from '../../book-stock/models/book-stock';
import Rents from '../models/rent';

@controller(PathRoutes.RENT)
export class RentController {
  @httpPost(`${PathRoutes.DEFAULT}`)
  public async toRent(req: Request, res: Response) {
    try {
      const { book } = req.body;
      const bookId = book;

      const findBook = await books.findOne({ _id: bookId });
      const findBooksWhitinStock = await booksStock.findOne({ book: bookId });
      const findRents = (await Rents.find({ book: bookId })).filter(
        (rent) => rent.status !== 'RETURNED',
      );

      const IsbookHaveInStock = !Object.keys(findBooksWhitinStock ?? {}).length;

      if (!findBook) {
        return res.status(404).json({ message: 'Book not found' });
      }

      if (IsbookHaveInStock) {
        return res.status(404).json({ message: 'The book is out of stock' });
      }

      const quantity = findBooksWhitinStock?.quantity ?? 0;
      if (quantity === findRents.length) {
        return res
          .status(404)
          .json({ message: 'It is no longer possible to rent this copy' });
      }

      const rentBooks = new Rents(req.body);
      await rentBooks.save();

      return res
        .status(200)
        .json({ message: 'Congratulations, the book has been rented!' });
    } catch (error) {
      res.status(500).send({ messagem: (error as Error).message });
    }
  }

  @httpPut(`${PathRoutes.UPDATE}/:id`)
  public async giveBackTheBook(req: Request, res: Response) {
    try {
      const { params } = req;
      const { id } = params;

      await Rents.findByIdAndUpdate(id, { $set: { status: 'RETURNED' } });

      res.status(200).json({ message: 'Information has been changed' });
    } catch (error) {
      res.status(500).send({ messagem: (error as Error).message });
    }
  }
}
