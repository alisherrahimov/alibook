import api from '../config/axios';

class BookService {
  static async getBooks() {
    return await api.get('/todos');
  }
  static async getBook(id: number) {
    return await api.get(`/todos/${id}`);
  }
}

export default BookService;
