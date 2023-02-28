import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { Book } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { IHome } from './dto/book.dto';

@Injectable()
export class BookService {
  constructor(private client: PrismaService) {}
  async getAllBook(): Promise<Book[]> {
    try {
      const data = await this.client.book.findMany({});
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getHome(): Promise<IHome> {
    const id = '';
    try {
      const user = await this.client.user.findFirst({
        where: { id },
        include: { interest: true },
      });
      const categories = await this.client.category.findMany();
      const new_release = await this.client.book.findMany({
        orderBy: { createdAt: 'asc' },
        take: 10,
        include: { images: true },
      });
      const trend_now = await this.client.book.findMany({
        orderBy: { downloads: 'asc' },
      });
      return {
        categories,
        new_release,
        trend_now: trend_now,
        recommended: [],
      };
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getBookById(id: string): Promise<Book> {
    try {
      const book = await this.client.book.findFirst({
        where: {
          id,
        },
      });
      if (book) {
        return book;
      } else {
        throw new HttpException('Not found book', HttpStatus.BAD_REQUEST);
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getCategoryById(id: string): Promise<Book[]> {
    try {
      const books = await this.client.book.findMany({
        where: {
          category: {
            every: { id: id },
          },
        },
      });
      if (books) {
        return books;
      } else {
        return [];
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async getBookBySearch(text: string, author: string): Promise<Book[]> {
    try {
      const books = await this.client.book.findMany({
        where: {
          OR: [
            {
              author: {
                contains: author,
              },
              title: {
                contains: text,
              },
            },
          ],
        },
      });
      if (books) {
        return books;
      } else {
        return [];
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
  async createReview(
    user_id: string,
    book_id: string,
    message: string,
    rating: number,
  ): Promise<Book> {
    try {
      const book = await this.client.book.update({
        where: {
          id: book_id,
        },
        data: {
          review: {
            create: { content: message, userId: user_id, rating: rating },
          },
        },
        include: {
          review: true,
        },
      });
      return book;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
