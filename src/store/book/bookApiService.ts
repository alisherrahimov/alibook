class BookApiService {
  async getBooks() {
    const response = await fetch('https://api.example.com/books');
    return response.json();
  }
}

export default new BookApiService();
