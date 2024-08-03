import {action} from 'mobx';
import api from '../../config/axios';
import {response} from '../../helper/response';

type Ok<T> = {
  success?: true;
  data: T;
};
type Error<T> = {
  success?: false;
  message: T;
};

type Response<T> = Ok<T> | Error<T>;

type LoginResponse = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

class AuthApiService {
  @action
  async login(phone: number): Promise<Response<LoginResponse>> {
    try {
      const {data} = await api.post('auth/login', {phone});
      return await response(data, null);
    } catch (error: any) {
      return await response(null, error.message);
    }
  }

  @action
  async verifyOtp(phone: number, otp: number) {
    try {
      const {data} = await api.post('/auth/verify-otp', {phone, otp});
      return data;
    } catch (error) {
      throw error;
    }
  }
}

export default new AuthApiService();
