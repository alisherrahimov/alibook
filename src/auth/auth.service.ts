import {
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { IToken, IsAvailable } from './dto/user.dto';

@Injectable()
export class AuthService {
  constructor(private client: PrismaService, private jwt: JwtService) {}
  async login(phone: string): Promise<IsAvailable> {
    try {
      const user = await this.client.user.findFirst({
        where: { phone: phone },
      });
      if (user) {
        // smssend
        console.log('sms send');
        return { ...user, isAvailable: false };
      } else {
        const createUser = await this.client.user.create({
          data: {
            phone: phone,
            code: 1111,
          },
        });
        //sms send
        return { ...createUser, isAvailable: true };
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async verifyCode(phone: string, code: number): Promise<IToken> {
    try {
      const user = await this.client.user.findFirst({
        where: {
          phone,
        },
      });
      if (user) {
        if (code === user.code) {
          const token: string = this.jwt.sign(user, { expiresIn: '365d' });
          return { token: token, success: true };
        } else {
          throw new HttpException('Sms code notogri', HttpStatus.BAD_REQUEST);
        }
      } else {
        throw new HttpException(
          'Telefon raqam mavjud emas',
          HttpStatus.BAD_REQUEST,
        );
      }
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  async createInterested(arr: { id: string }[]): Promise<User> {
    const idx = '';
    try {
      const data = await this.client.user.update({
        where: { id: idx },
        data: { interest: { createMany: { data: arr } } },
      });
      return data;
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }
}
