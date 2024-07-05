import api from '../config/axios';

class BookService {
  static async getBooks() {
    return await api.get('/todos');
  }
  static async getBook(id: number) {
    return await api.get(`/todos/${id}`);
  }
  static async getCategories() {
    return await api.get('/book/categories');
  }
  static async getBooksByCategory(id: number, page: number) {
    return await api.get(`/book/category/${id}/${page}`);
  }
}

export default BookService;
