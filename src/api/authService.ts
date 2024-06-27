import api from '../config/axios';

class AuthService {
  static async login(email: string, password: string) {
    return await api.post('/auth/login', {email, password});
  }

  static async register() {
    return await api.post('/auth/register');
  }
}

export default AuthService;
