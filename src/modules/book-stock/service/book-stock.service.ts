import { injectable } from 'inversify';
import BooksStock from '../models/book-stock';
import logger from '../../../common/logger';

@injectable()
export default class BookStockService {
  public async save(bookId: string, quantity: number) {
    try {
      const stock = new BooksStock({ book: bookId, quantity });
      stock.save();

      logger.info(`successfully added to stock`);
    } catch (error) {
      const errorMessage = (error as Error).message;

      logger.error(
        `There was a problem adding product to stock, check the following message: ${{
          message: errorMessage,
        }} `,
      );
    }
  }

  public async update(bookId: string, quantity: number) {
    try {
      await BooksStock.findByIdAndUpdate(
        { book: bookId },
        {
          $set: { book: bookId, quantity },
        },
      );

      logger.info({ message: 'Information has been changed' });
    } catch (error) {
      const errorMessage = (error as Error).message;

      logger.error(
        `There was a problem updating product to stock, check the following message: ${{
          message: errorMessage,
        }} `,
      );
    }
  }
}
