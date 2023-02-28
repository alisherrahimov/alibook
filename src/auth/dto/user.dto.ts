import { User } from '@prisma/client';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export interface IToken {
  token: string;
  success?: boolean;
}

export interface IsAvailable extends User {
  isAvailable: boolean;
}
