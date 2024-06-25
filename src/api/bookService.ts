import api from '../config/axios';

class BookService {
  static async getBooks() {
    try {
      const response = await api.get('/todos/1');
      return response;
    } catch (error) {
      throw error;
    }
  }
}

export default BookService;
