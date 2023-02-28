import { Book, Category } from '@prisma/client';

export interface IHome {
  categories: Category[];
  new_release: Book[];
  trend_now: Book[];
  recommended: Book[];
}
