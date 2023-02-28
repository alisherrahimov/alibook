import { Body, Controller, Post } from '@nestjs/common';
import { User } from '@prisma/client';
import { AuthService } from './auth.service';
import { IToken } from './dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  @Post('login')
  async login(@Body() phone: string): Promise<User> {
    return this.authService.login(phone);
  }
  @Post('verify')
  async verify(@Body() phone: string, code: number): Promise<IToken> {
    return this.authService.verifyCode(phone, code);
  }

  @Post('createInterest')
  async createInterested(@Body() arr: { id: string }[]): Promise<User> {
    return this.authService.createInterested(arr);
  }
}
