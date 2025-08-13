import { IsNotEmpty, MinLength } from 'class-validator';

export class RegisterUserDto {
  @IsNotEmpty({ message: 'username not empty' })
  account_name: string;
  @IsNotEmpty({ message: 'password not empty' })
  @MinLength(8, { message: 'password must be at least 8 characters' })
  password: string;
}
