import api from '../config/axios';

class UserService {
  static async getUser(id: string) {
    return await api.get(`/users/${id}`);
  }
}

export default UserService;
