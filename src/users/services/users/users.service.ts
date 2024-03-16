import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/users/utils/types';

@Injectable()
export class UsersService {
  private fakeUsers = [
    { username: 'Alex', email: 'alex@gmail.com' },
    { username: 'Rony', email: 'rony@gmail.com' },
    { username: 'Arnold', email: 'arnold@gmail.com' },
  ];

  fetchUsers(queries: any) {
    return {
      ...queries,
      users: this.fakeUsers,
    };
  }

  createUser(userDetails: CreateUserType) {
    this.fakeUsers.push(userDetails);
    return { ...userDetails };
  }

  fetchUserById(id: number) {
    return { id, username: 'Fake user', email: 'fakeuser@gmail.com' };
  }
}
