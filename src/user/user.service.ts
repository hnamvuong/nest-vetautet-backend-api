import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { RegisterUserDto } from './dto/register-user.dto';
import { User } from './entities/user.entity';
import { DbService } from '../db/db.service';

@Injectable()
export class UserService {
  @Inject(DbService)
  dbService: DbService;

  async register(registerUserDto: RegisterUserDto) {
    const users: User[] = await this.dbService.read();

    // Check user already
    const userFound = users.find(
      (user) => user.account_name === registerUserDto.account_name,
    );

    if (userFound) {
      throw new NotFoundException(
        `User ${registerUserDto.account_name} already exists`,
      );
    }

    const user = new User();
    user.account_name = registerUserDto.account_name;
    user.password = registerUserDto.password;

    // push
    users.push(user);

    // save file
    await this.dbService.write(users);
    return user;
  }

  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    return `This action returns all user`;
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
