import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { Book } from '@prisma/client';

import { BookService } from './book.service';
import { IHome } from './dto/book.dto';

@Controller('book')
export class BookController {
  constructor(private bookService: BookService) {}
  @Get('all')
  async getAllBook(): Promise<Book[]> {
    return this.bookService.getAllBook();
  }
  // @Get('home')
  // async getHome(): Promise<IHome> {
  //   return this.bookService.getHome();
  // }

  @Get('/book/:id')
  async getBookById(@Param() id: string): Promise<Book> {
    return this.bookService.getBookById(id);
  }

  @Get('/category/:id')
  async getCategoryById(@Param() id: string): Promise<Book[]> {
    return this.bookService.getCategoryById(id);
  }

  @Get('/search/:text/:author')
  async getBookBySearch(@Param() text: string, author: string) {
    return this.bookService.getBookBySearch(text, author);
  }

  @Post('/createReview')
  async createReview(
    @Body() book_id: string,
    user_id: string,
    message: string,
    rating: number,
  ): Promise<Book> {
    return this.bookService.createReview(user_id, book_id, message, rating);
  }
}
