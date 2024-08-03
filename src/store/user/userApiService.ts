class UserApiService {
  constructor() {}
  async getUsers() {
    try {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    }
  }
}

export default new UserApiService();
