import { IsNotEmpty, MinLength } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty({ message: 'username not empty' })
  account_name: string;
  @IsNotEmpty({ message: 'password not empty' })
  password: string;
}
